# Image Generation

## Overview

75 images are included in `assets/images/` as 256×256 PNG files, covering A1 words
in categories: engineer-tools, engineer-drawings, engineer-assembly, engineer-shopfloor,
work-office, work-meetings, transport-travel, food-basic, restaurant, home-basic,
everyday-objects, space-environment, shopping, work-email.

The remaining ~3,725 `imageEligible` words (A2–C2 and remaining A1 categories) have no
image yet and fall back to emoji display. See Roadmap for future image generation plans.

## Hardware Stack

- **GPU 0:** NVIDIA A100 (80 GB) — ComfyUI on port **8188**
- **GPU 1:** NVIDIA A100 (80 GB) — ComfyUI on port **8189**
- **Model:** FLUX.2-dev (fp8 mixed precision)
  - UNet: `flux2_dev_fp8mixed.safetensors`
  - CLIP: `mistral_3_small_flux2_bf16.safetensors`
  - VAE: `full_encoder_small_decoder.safetensors`
- **ComfyUI location:** `/mnt/data4/ai-studio/ComfyUI/`

## Generation Parameters

| Parameter | Value |
|-----------|-------|
| Resolution | 1024×1024 (generation) → 256×256 (final) |
| Steps | 28 |
| CFG / Guidance | 3.8 |
| Sampler | Euler |
| Scheduler | Flux2Scheduler |
| Seed | Random per image |
| Max file size | 25 KB (quantized PNG) |

## Final Positive Prompt (General Objects)

```
Vintage educational textbook illustration of {subject},
in the style of mid-20th-century school textbooks.
Hand-drawn appearance with clean ink outlines, simple cross-hatching for shading,
soft muted colors. Single object centered. Warm cream paper background #f5efe6.
Color palette: muted sage green, dusty teal, soft tan and wood tones,
gentle brown ink lines. Style: educational illustration like Soviet or American
school textbook drawings from the 1960s-1980s.
Slightly imperfect hand-drawn quality, organic lines, simple but recognizable.
NO text, NO letters, NO words, NO numbers, NO digits, NO captions,
NO labels, NO annotations, NO watermark, NO signatures.
```

## Final Positive Prompt (Engineering Drawings)

Used for `engineer-drawings` category only:

```
Vintage educational textbook illustration showing {subject}
with dimensional arrow lines between geometric features (corners, holes, edges).
Faint dotted grid background like graph paper. 1970s engineering textbook style.
Muted teal and sage green ink on warm cream paper.
Pure shapes, lines, dots, arrows.
NO letters, NO numbers, NO annotations, NO text of any kind.
```

## Negative Prompt (both templates)

```
text, letters, words, numbers, digits, A, B, C, D, E, F, captions,
labels, annotations, typography, alphabet, watermark, signature, modern
flat design, app icon, minimalist icon, 3D rendering, photorealistic,
photograph, isometric, glossy, vibrant saturated colors, neon, gradient,
cartoon, anime, manga, chibi, cute mascot, people, hands, multiple
objects, busy composition, cluttered, modern UI design, vector logo,
sticker, dimension values, measurement numbers
```

## Script: generate-images.py

Location: `scripts/generate-images.py`

The script communicates with ComfyUI via its REST API, submitting workflow JSON and
polling for results. It uses `ThreadPoolExecutor` to run both GPUs in parallel with
round-robin URL assignment.

### Usage Examples

```bash
# Generate pack A (engineering drawings and tools)
python3 scripts/generate-images.py --pack=a

# Generate all 4 packs
python3 scripts/generate-images.py --pack=all

# Only generate images not yet on disk
python3 scripts/generate-images.py --pack=all --only-missing

# Generate a single word by ID
python3 scripts/generate-images.py --word=torque-wrench

# Generate all imageEligible=true words from the JS data files
python3 scripts/generate-images.py --from-words-js --only-missing

# Filter by category
python3 scripts/generate-images.py --pack=all --category=engineer-tools

# Limit to first N images
python3 scripts/generate-images.py --pack=all --limit=10

# Use only 1 worker (single GPU)
python3 scripts/generate-images.py --pack=a --workers=1
```

### Image Packs

| Pack | Contents | Count |
|------|----------|-------|
| A | Engineering drawings, tools, assembly parts | 20 |
| B | Office, shop floor, hand tools | 13 |
| C | Transport vehicles, safety equipment | 14 |
| D | Food, furniture, everyday objects | 28 |

### Post-processing Pipeline

1. Generate at 1024×1024
2. Resize to 256×256 with LANCZOS filter
3. Composite onto solid #f5efe6 background (remove transparency)
4. Quantize: try 128 colors → 64 → 48 → 32 until file ≤ 25 KB
5. Save as optimized PNG to `assets/images/{word_id}.png`
6. Update `data/image-manifest.json` (list of all generated IDs)

### Image Manifest

`data/image-manifest.json` is a JSON array of word IDs for which an image exists:
```json
["airplane", "apple", "assembly-line", ...]
```

The app fetches this at startup (`loadManifest()`) and uses it to decide whether to show
an image or fall back to emoji for each word.

## How to Generate More Images in the Future

### Prerequisites

1. ComfyUI running with FLUX.2-dev loaded (see docs/07-SETUP.md)
2. Python 3 with Pillow: `pip install Pillow`
3. The WordStick project cloned locally

### Step-by-step

1. Mark words in data files as `imageEligible: true` and set `image: 'word-id'`
2. Add entries to `PACK_A/B/C/D` in `generate-images.py` with subject descriptions,
   OR use `--from-words-js` to auto-load all `imageEligible=true` entries from data files
3. Run the generator:
   ```bash
   python3 scripts/generate-images.py --from-words-js --only-missing
   ```
4. Review results in `assets/images/` — delete and re-run any that look wrong
5. Commit: `git add assets/images/ data/image-manifest.json && git commit -m "assets: new images"`

### Subject Description Tips

Good subject descriptions are:
- Specific and visual: `"adjustable wrench spanner tool, flat 2D side view, simple clean silhouette"`
- Not too complex: avoid more than 2 objects in one image
- Include view angle: `flat 2D front view`, `flat 2D side view`, `top view`
- Avoid abstract concepts — stick to concrete, physical objects

For abstract words (C1/C2 level), prefer emoji over attempting image generation.
