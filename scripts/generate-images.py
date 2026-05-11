#!/usr/bin/env python3
"""
WordStick image generator via ComfyUI API (FLUX.2-dev).

Usage:
  python3 scripts/generate-images.py --limit=5
  python3 scripts/generate-images.py --pack=a
  python3 scripts/generate-images.py --pack=all --only-missing
  python3 scripts/generate-images.py --word=blueprint
  python3 scripts/generate-images.py --category=engineer-tools
"""

import argparse, io, json, os, random, re, sys, time, urllib.parse, urllib.request
from pathlib import Path
from PIL import Image

# ── Config ────────────────────────────────────────────────────────────────────
COMFYUI_URL   = "http://127.0.0.1:8188"
PROJECT_ROOT  = Path(__file__).parent.parent
OUTPUT_DIR    = PROJECT_ROOT / "assets" / "images"
DATA_DIR      = PROJECT_ROOT / "data"
PROMPTS_LOG   = Path(__file__).parent / "prompts.log"
MANIFEST_PATH = DATA_DIR / "image-manifest.json"

UNET = "flux2_dev_fp8mixed.safetensors"
CLIP = "mistral_3_small_flux2_bf16.safetensors"
VAE  = "full_encoder_small_decoder.safetensors"

GEN_SIZE   = 1024   # generate at 1024×1024 for sharpness
FINAL_SIZE = 256    # downscale to 256×256 for web
GUIDANCE   = 3.8
STEPS      = 28
BG_COLOR   = (245, 239, 230)  # #f5efe6

# Categories that need the technical-drawing variant prompt
DRAWING_CATEGORIES = {
    'engineer-drawings',  # blueprint, tolerance, dimension, revision…
}

# ── Prompt templates ──────────────────────────────────────────────────────────

# For engineer-drawings: vintage diagram with dimension arrows, NO text
PROMPT_DRAWING = (
    "Vintage educational textbook illustration showing {subject} "
    "with dimensional arrow lines indicating measurements between points. "
    "Hand-drawn appearance, clean ink outlines, faint grid pattern in background "
    "like graph paper. Style of a 1970s engineering textbook diagram. "
    "Muted teal and sage green ink lines on warm cream paper #f5efe6. "
    "Pure shapes, lines, dots, and dimensional arrows — "
    "absolutely NO letters, NO numbers, NO annotations, NO text of any kind. "
    "Friendly educational diagram style, organic hand-drawn lines."
)

# For all other words — vintage textbook illustration style
PROMPT_GENERAL = (
    "Vintage educational textbook illustration of {subject}, "
    "in the style of mid-20th-century school textbooks. "
    "Hand-drawn appearance with clean ink outlines, simple cross-hatching for shading, "
    "soft muted colors. Single object centered, warm cream paper background #f5efe6. "
    "Color palette: muted sage green, dusty teal, soft tan and wood tones, "
    "gentle brown ink lines. Style: educational illustration like Soviet or American "
    "school textbook drawings from the 1960s-1980s. "
    "Slightly imperfect hand-drawn quality, organic lines not perfectly geometric, "
    "simple but recognizable. The object is the clear subject — "
    "easy for a language learner to identify. Friendly, warm, nostalgic feel. "
    "NO text, NO letters, NO words, NO numbers, NO digits, NO captions, "
    "NO labels, NO annotations, NO watermark, NO signatures."
)

# ── Word packs ────────────────────────────────────────────────────────────────
# (word_id, subject_description, category)
PACK_A = [
    ("blueprint",   "rectangular block with holes and triangular bracket, with dimension arrow lines around it", "engineer-drawings"),
    ("tolerance",   "simple cylindrical part cross-section, with two concentric circles and gap indicator arrows", "engineer-drawings"),
    ("caliper",     "vernier caliper measuring tool, flat 2D side view, simple silhouette",                      "engineer-tools"),
    ("lathe",       "lathe machine, flat 2D side view, simple rectangular body with headstock cylinder and tailstock", "engineer-tools"),
    ("jig",         "woodworking clamp holding a wooden plank, flat 2D front view, simple geometric shapes",     "engineer-tools"),
    ("wrench",      "adjustable wrench spanner tool, flat 2D side view, simple clean silhouette",               "engineer-tools"),
    ("fixture",     "machining fixture workholding clamp device, flat 2D view, simple block with clamping arm", "engineer-tools"),
    ("gauge",       "round pressure gauge dial indicator, flat 2D front view, circular face with pointer needle","engineer-tools"),
    ("shim",        "thin flat rectangular shim spacer plate, simple flat rectangle shape",                      "engineer-assembly"),
    ("gasket",      "flat rubber gasket ring seal, circular shape with inner hole, top view",                    "engineer-assembly"),
    ("bearing",     "ball bearing mechanical element, flat 2D front view showing outer ring inner ring and balls","engineer-assembly"),
    ("bushing",     "cylindrical sleeve bushing, flat 2D front view showing hollow cylinder cross-section",      "engineer-assembly"),
    ("flange",      "circular pipe flange fitting with bolt holes around the rim, flat 2D front view",           "engineer-assembly"),
    ("weld",        "welded metal joint, two flat rectangular plates joined at corner with weld bead symbol",    "engineer-assembly"),
    ("fastener",    "bolt nut washer fastener set, flat 2D exploded view, simple geometric shapes",              "engineer-assembly"),
    ("threading",   "metal bolt screw thread coil pattern, flat 2D side view, simple zigzag thread profile",    "engineer-assembly"),
    ("chamfer",     "metal block with beveled corner chamfer, flat 2D front view showing angled cut edge",       "engineer-assembly"),
    ("fillet",      "two flat plates joined at corner with smooth curved fillet radius, flat 2D side view",      "engineer-assembly"),
    ("sheet-metal", "flat rectangular sheet metal panel with one bent edge, flat 2D view",                      "engineer-assembly"),
    ("mill-tool",   "vertical milling machine, flat 2D front view, simple rectangular column and table shape",  "engineer-tools"),
]

PACK_B = [
    ("assembly-line","industrial conveyor belt with parts moving along, flat 2D side view, simple shapes",      "engineer-shopfloor"),
    ("meeting-room", "round conference table with chairs around it, flat 2D top view, simple geometric shapes", "work-meetings"),
    ("cubicle",      "office desk cubicle with monitor and partition walls, flat 2D front view",                "work-office"),
    ("command-line", "computer screen with blinking cursor prompt on dark background, flat 2D icon",            "engineer-cad"),
    ("shop-floor",   "factory floor with two machines and a workbench, flat 2D side view, simple shapes",       "engineer-shopfloor"),
    ("kickoff",      "whiteboard with sticky notes and marker, flat 2D front view, simple shapes",              "work-meetings"),
    ("standup",      "three simple person silhouettes standing in a circle, flat 2D top view",                  "work-meetings"),
]

PACK_C = [
    ("receipt",  "paper cash register receipt, curled at bottom, simple vertical rectangle with lines",         "shopping"),
    ("deposit",  "bank envelope with a coin and arrow going in, flat 2D front view",                            "money-banking"),
    ("lease",    "contract document sheet with a pen, flat 2D front view, simple shapes",                       "money-banking"),
    ("neighbor", "two houses with a wooden fence between them, flat 2D front view, simple shapes",              "small-talk"),
    ("tip",      "hand holding out coins, flat 2D front view, simple geometric shapes",                         "restaurant"),
]

ALL_PACKS = {"a": PACK_A, "b": PACK_B, "c": PACK_C}

# ── ComfyUI helpers ───────────────────────────────────────────────────────────

def build_workflow(prompt_text: str, prefix: str, seed: int) -> dict:
    return {
        "1": {"class_type": "UNETLoader",
              "inputs": {"unet_name": UNET, "weight_dtype": "default"}},
        "2": {"class_type": "CLIPLoader",
              "inputs": {"clip_name": CLIP, "type": "flux2", "device": "default"}},
        "3": {"class_type": "VAELoader",
              "inputs": {"vae_name": VAE}},
        "4": {"class_type": "CLIPTextEncode",
              "inputs": {"text": prompt_text, "clip": ["2", 0]}},
        "5": {"class_type": "FluxGuidance",
              "inputs": {"guidance": GUIDANCE, "conditioning": ["4", 0]}},
        "6": {"class_type": "BasicGuider",
              "inputs": {"model": ["1", 0], "conditioning": ["5", 0]}},
        "7": {"class_type": "EmptyFlux2LatentImage",
              "inputs": {"width": GEN_SIZE, "height": GEN_SIZE, "batch_size": 1}},
        "8": {"class_type": "Flux2Scheduler",
              "inputs": {"steps": STEPS, "width": GEN_SIZE, "height": GEN_SIZE}},
        "9": {"class_type": "RandomNoise",
              "inputs": {"noise_seed": seed}},
        "10": {"class_type": "KSamplerSelect",
               "inputs": {"sampler_name": "euler"}},
        "11": {"class_type": "SamplerCustomAdvanced",
               "inputs": {"noise": ["9", 0], "guider": ["6", 0],
                          "sampler": ["10", 0], "sigmas": ["8", 0],
                          "latent_image": ["7", 0]}},
        "12": {"class_type": "VAEDecode",
               "inputs": {"samples": ["11", 0], "vae": ["3", 0]}},
        "13": {"class_type": "SaveImage",
               "inputs": {"filename_prefix": f"ws_{prefix}", "images": ["12", 0]}},
    }


def queue_prompt(wf: dict) -> str:
    data = json.dumps({"prompt": wf}).encode()
    req  = urllib.request.Request(f"{COMFYUI_URL}/prompt", data=data,
                                   headers={"Content-Type": "application/json"})
    return json.loads(urllib.request.urlopen(req, timeout=30).read())["prompt_id"]


def wait_for(pid: str, timeout: int = 600) -> dict:
    deadline = time.time() + timeout
    while time.time() < deadline:
        resp = urllib.request.urlopen(f"{COMFYUI_URL}/history/{pid}", timeout=10)
        h = json.loads(resp.read())
        if pid in h:
            return h[pid]
        time.sleep(3)
    raise TimeoutError(f"Job {pid} timed out")


def download_img(filename: str, sub: str = "", ftype: str = "output") -> bytes:
    p = urllib.parse.urlencode({"filename": filename, "subfolder": sub, "type": ftype})
    return urllib.request.urlopen(f"{COMFYUI_URL}/view?{p}", timeout=30).read()


def save_optimized(raw: bytes, dest: Path):
    """Downscale to 256×256 and quantize to ≤25 KB."""
    img = Image.open(io.BytesIO(raw)).convert("RGBA")
    img = img.resize((FINAL_SIZE, FINAL_SIZE), Image.LANCZOS)

    # Composite onto cream background
    bg = Image.new("RGB", img.size, BG_COLOR)
    bg.paste(img, mask=img.split()[3])

    # Quantize (128 colours → ~14–20 KB for flat vector images)
    quantized = bg.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=0)
    quantized.save(dest, "PNG", optimize=True)

    kb = dest.stat().st_size // 1024
    # If still too large, reduce colours further
    if kb > 25:
        quantized = bg.quantize(colors=64, method=Image.Quantize.MEDIANCUT, dither=0)
        quantized.save(dest, "PNG", optimize=True)


def update_manifest(word_id: str):
    m = json.loads(MANIFEST_PATH.read_text()) if MANIFEST_PATH.exists() else []
    if word_id not in m:
        m.append(word_id)
    MANIFEST_PATH.write_text(json.dumps(sorted(m), indent=2))


def log_prompt(word_id: str, prompt: str):
    with open(PROMPTS_LOG, "a") as f:
        f.write(f"[{word_id}] {prompt}\n\n")


def make_prompt(subject: str, category: str) -> str:
    if category in DRAWING_CATEGORIES:
        return PROMPT_DRAWING.format(subject=subject)
    return PROMPT_GENERAL.format(subject=subject)


# ── Core generate function ────────────────────────────────────────────────────

def generate(word_id: str, subject: str, category: str) -> bool:
    dest   = OUTPUT_DIR / f"{word_id}.png"
    prompt = make_prompt(subject, category)
    seed   = random.randint(1, 2**32 - 1)

    log_prompt(word_id, prompt)

    try:
        wf     = build_workflow(prompt, word_id, seed)
        pid    = queue_prompt(wf)
        result = wait_for(pid)

        for node_out in result.get("outputs", {}).values():
            imgs = node_out.get("images", [])
            if imgs:
                raw = download_img(imgs[0]["filename"],
                                   imgs[0].get("subfolder", ""),
                                   imgs[0].get("type", "output"))
                save_optimized(raw, dest)
                update_manifest(word_id)
                return True

        print("  No image output from ComfyUI", file=sys.stderr)
        return False

    except Exception as e:
        print(f"  ERROR: {e}", file=sys.stderr)
        return False


# ── Load from words.js ────────────────────────────────────────────────────────

def load_from_js() -> list:
    wf = DATA_DIR / "words.js"
    if not wf.exists():
        return []
    content = wf.read_text()
    m = re.search(r'(?:const\s+\w+|export\s+default)\s*=\s*(\[[\s\S]*?\]);', content)
    if not m:
        return []
    try:
        data = json.loads(m.group(1))
        return [(w["image"], w.get("en", w["image"]), w.get("category", ""))
                for w in data if w.get("image")]
    except Exception:
        return []


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="WordStick image generator")
    parser.add_argument("--pack",     choices=["a", "b", "c", "all"], default="a")
    parser.add_argument("--word",     default="", help="Generate single word by id")
    parser.add_argument("--only-missing", action="store_true")
    parser.add_argument("--category", default="", help="Filter by category substring")
    parser.add_argument("--limit",    type=int, default=0)
    args = parser.parse_args()

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PROMPTS_LOG.parent.mkdir(parents=True, exist_ok=True)

    # Build word list
    if args.word:
        # Single word — find it in packs
        all_words = PACK_A + PACK_B + PACK_C
        match = [(wid, subj, cat) for wid, subj, cat in all_words if wid == args.word]
        if not match:
            print(f"Word '{args.word}' not found in packs.", file=sys.stderr)
            sys.exit(1)
        words = match
    elif args.pack == "all":
        words = PACK_A + PACK_B + PACK_C
    else:
        words = list(ALL_PACKS[args.pack])

    # Merge JS words
    js = load_from_js()
    existing_ids = {w for w, _, _ in words}
    for wid, subj, cat in js:
        if wid not in existing_ids:
            words.append((wid, subj, cat))

    # Filters
    if args.category:
        words = [(w, s, c) for w, s, c in words if args.category in c]
    if args.only_missing:
        words = [(w, s, c) for w, s, c in words
                 if not (OUTPUT_DIR / f"{w}.png").exists()]
    if args.limit:
        words = words[:args.limit]

    total = len(words)
    if not total:
        print("Nothing to generate.")
        return

    print(f"WordStick — FLUX.2-dev @ {COMFYUI_URL}")
    print(f"Pack: {args.pack.upper()} | {total} images | {GEN_SIZE}px → {FINAL_SIZE}px")
    print(f"Steps: {STEPS} | Guidance: {GUIDANCE}\n")

    success, failed = 0, []

    for i, (word_id, subject, category) in enumerate(words, 1):
        dest = OUTPUT_DIR / f"{word_id}.png"
        if args.only_missing and dest.exists():
            print(f"[{i}/{total}] SKIP: {word_id}")
            continue

        tpl = "drawing" if category in DRAWING_CATEGORIES else "general"
        print(f"[{i}/{total}] {word_id}  [{tpl} prompt]")

        ok = generate(word_id, subject, category)
        if ok:
            kb = dest.stat().st_size // 1024
            print(f"  ✓ {word_id}.png ({kb} KB)")
            success += 1
        else:
            print(f"  ✗ FAILED")
            failed.append(word_id)

    print(f"\n{'='*50}")
    print(f"Done: {success}/{total}")
    if failed:
        print(f"Failed: {', '.join(failed)}")


if __name__ == "__main__":
    main()
