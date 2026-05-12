# Setup Guide

## Prerequisites

| Tool | Version used | Notes |
|------|-------------|-------|
| Node.js | 22.22.2 | For Playwright tests and local dev server |
| Python 3 | 3.10+ | For image generation only |
| Pillow | latest | `pip install Pillow` — for image post-processing |
| Git | any | For version control and GitHub Pages deploy |
| ComfyUI | latest | For image generation only |
| FLUX.2-dev | fp8 | For image generation only |

## Clone and Run Locally

```bash
git clone https://github.com/yapavelkulikov-dev/WordStick.git
cd WordStick
npm install                          # installs Playwright + http-server
npx http-server . -p 8080 -c-1      # start local server
# open http://localhost:8080 in browser
```

That's it — no build step, no compilation. The app is pure static HTML/JS/CSS.

## Run Tests

```bash
npx playwright test                  # run all 29 tests
npx playwright test --reporter=list  # verbose output
npx playwright show-report           # open HTML report
```

Tests automatically start an http-server on port 8787, run all tests, then stop the server.

## Deploy to GitHub Pages

The repository is already configured for GitHub Pages from `main` branch root.
Any push to `main` triggers an automatic redeploy (usually completes in 30–60 seconds).

```bash
git add .
git commit -m "your changes"
git push origin main
```

Check deploy status:
```bash
gh api repos/yapavelkulikov-dev/WordStick/pages | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['status'], d['html_url'])"
```

## Set Up ComfyUI for Image Generation

**Only needed if you want to generate new images.**

### Requirements
- NVIDIA GPU with 16+ GB VRAM (A100 recommended for FLUX.2-dev)
- CUDA 11.8+ and cuDNN installed
- Python 3.10+

### Install ComfyUI

```bash
git clone https://github.com/comfyanonymous/ComfyUI.git /mnt/data4/ai-studio/ComfyUI
cd /mnt/data4/ai-studio/ComfyUI
pip install -r requirements.txt
```

### Download FLUX.2-dev Models

```bash
# UNET
huggingface-cli download black-forest-labs/FLUX.1-dev \
    --local-dir /mnt/data4/ai-studio/ComfyUI/models/unet \
    flux2_dev_fp8mixed.safetensors

# CLIP (Mistral-based text encoder for FLUX2)
huggingface-cli download ... mistral_3_small_flux2_bf16.safetensors \
    --local-dir /mnt/data4/ai-studio/ComfyUI/models/clip

# VAE
huggingface-cli download ... full_encoder_small_decoder.safetensors \
    --local-dir /mnt/data4/ai-studio/ComfyUI/models/vae
```

Actual model HuggingFace paths depend on your license agreements. Check the ComfyUI
wiki for current FLUX.2-dev model sources.

### Launch ComfyUI — Single GPU

```bash
cd /mnt/data4/ai-studio/ComfyUI
python3 main.py --port 8188 --listen 0.0.0.0 &
```

### Launch Two ComfyUI Instances — Dual GPU

```bash
# GPU 0 — port 8188
CUDA_VISIBLE_DEVICES=0 python3 /mnt/data4/ai-studio/ComfyUI/main.py \
    --port 8188 --listen 0.0.0.0 \
    > /tmp/comfyui_gpu0.log 2>&1 &

# GPU 1 — port 8189
CUDA_VISIBLE_DEVICES=1 python3 /mnt/data4/ai-studio/ComfyUI/main.py \
    --port 8189 --listen 0.0.0.0 \
    > /tmp/comfyui_gpu1.log 2>&1 &

# Verify both running
curl -s http://localhost:8188/system_stats | python3 -m json.tool | head -5
curl -s http://localhost:8189/system_stats | python3 -m json.tool | head -5
```

Wait ~30 seconds for models to load before running generation.

### Generate Images

```bash
cd /path/to/WordStick
python3 scripts/generate-images.py --pack=all --only-missing
```

See `docs/04-IMAGES.md` for full usage documentation.

## File Structure

```
WordStick/
├── index.html              # Single-page app entry point
├── app.js                  # All JavaScript (838 lines)
├── styles.css              # All CSS (554 lines)
├── data/
│   ├── categories.js       # 34 categories definition
│   ├── words.js            # A1 words (748)
│   ├── words-a2.js         # A2 words (750)
│   ├── words-b1.js         # B1 words (1,008)
│   ├── words-b2.js         # B2 words (1,500)
│   ├── words-c1.js         # C1 words (4,014)
│   ├── words-c2.js         # C2 words (8,012)
│   ├── phrases.js          # A1 phrases (150)
│   ├── phrases-a2.js       # A2 phrases (150)
│   ├── phrases-b1.js       # B1 phrases (150)
│   ├── phrases-b2.js       # B2 phrases (159)
│   ├── phrases-c1.js       # C1 phrases (150)
│   ├── phrases-c2.js       # C2 phrases (150)
│   ├── image-manifest.json # List of word IDs with generated images
│   └── screenshots/        # Data directory screenshots (legacy)
├── assets/
│   └── images/             # 75 × 256×256 PNG files
├── scripts/
│   └── generate-images.py  # Image generation script
├── tests/
│   └── wordstick.spec.js   # 29 Playwright tests
├── screenshots/            # Responsive screenshots from tests
├── docs/                   # This documentation
├── playwright.config.js
├── package.json
└── README.md
```
