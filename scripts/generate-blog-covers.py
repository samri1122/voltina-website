"""Create durable, topic-styled local covers for every Voltina blog post."""
from __future__ import annotations

import hashlib
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "images" / "about.png"
OUTPUT = ROOT / "public" / "images" / "blog" / "posts"
DATA_FILES = [ROOT / "data" / "blog.ts", ROOT / "data" / "blog-extra.ts", ROOT / "data" / "blog-trends.ts"]

THEMES = {
    "medical": ((20, 98, 137), (45, 185, 190)),
    "instrument": ((32, 85, 156), (100, 191, 238)),
    "industrial": ((28, 56, 100), (58, 129, 198)),
    "energy": ((17, 105, 106), (128, 205, 101)),
    "ai": ((75, 48, 151), (46, 171, 235)),
    "pcb": ((12, 100, 103), (41, 184, 174)),
    "iot": ((21, 87, 157), (69, 160, 253)),
    "appliance": ((46, 82, 138), (111, 160, 230)),
}

def topic_for(slug: str) -> str:
    s = slug.lower()
    if any(k in s for k in ("medical", "patient", "health", "wearable")): return "medical"
    if any(k in s for k in ("sensor", "temperature", "pressure", "oscilloscope", "multimeter", "calibration", "dht")): return "instrument"
    if any(k in s for k in ("solar", "battery", "energy", "charger", "power", "ev", "surge")): return "energy"
    if any(k in s for k in ("ai", "tinyml", "vision", "twin", "robot")): return "ai"
    if any(k in s for k in ("esp32", "arduino", "wifi", "iot", "lorawan", "wireless", "relay")): return "iot"
    if any(k in s for k in ("fridge", "freezer", "refrigerator", "appliance")): return "appliance"
    if any(k in s for k in ("industrial", "plc", "vfd", "motor", "automation", "maintenance", "controller")): return "industrial"
    return "pcb"

def slugs() -> list[str]:
    found: list[str] = []
    for file in DATA_FILES:
        text = file.read_text(encoding="utf-8")
        found.extend(re.findall(r'(?:slug:\s*|\[\s*)["\']([a-z0-9-]+)["\']', text))
    return list(dict.fromkeys(found))

def make_cover(base: Image.Image, slug: str) -> Image.Image:
    digest = hashlib.sha256(slug.encode()).digest()
    theme = topic_for(slug)
    c1, c2 = THEMES[theme]
    width, height = base.size
    crop_w = int(width * .52)
    crop_h = int(crop_w / 1.6)
    # The right side of the source is the text-free engineering workbench.
    x = max(0, width - crop_w)
    y = digest[1] % max(1, height - crop_h)
    image = base.crop((x, y, x + crop_w, y + crop_h)).resize((1200, 750), Image.Resampling.LANCZOS)
    image = ImageEnhance.Contrast(image).enhance(1.08)
    image = ImageEnhance.Color(image).enhance(1.12)
    image = image.filter(ImageFilter.GaussianBlur(radius=.2))
    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for row in range(0, 750, 32):
        alpha = int(142 * (1 - row / 900))
        color = c1 if row < 350 else c2
        draw.rectangle((0, row, 1200, row + 34), fill=(*color, alpha))
    draw.rectangle((0, 0, 1200, 750), fill=(5, 15, 33, 72))
    # Circuit-path decoration; location is deterministic but differs per article.
    for n in range(14):
        px = 35 + ((digest[(n + 2) % len(digest)] * 4 + n * 67) % 1100)
        py = 50 + ((digest[(n + 7) % len(digest)] * 3 + n * 43) % 640)
        length = 38 + digest[(n + 13) % len(digest)] % 112
        direction = -1 if n % 2 else 1
        color = (*c2, 120)
        draw.line((px, py, px + direction * length, py, px + direction * length, py + 24), fill=color, width=3)
        draw.ellipse((px - 5, py - 5, px + 5, py + 5), fill=(*c2, 210))
    # A subject mark, intentionally without text.
    cx, cy = 1030, 600
    if theme == "medical":
        draw.rounded_rectangle((cx - 34, cy - 10, cx + 34, cy + 10), radius=5, fill=(*c2, 220))
        draw.rounded_rectangle((cx - 10, cy - 34, cx + 10, cy + 34), radius=5, fill=(*c2, 220))
    elif theme == "energy":
        draw.ellipse((cx - 30, cy - 30, cx + 30, cy + 30), outline=(*c2, 235), width=6)
        for dx, dy in ((0, -48), (0, 48), (-48, 0), (48, 0), (-34, -34), (34, 34), (-34, 34), (34, -34)):
            draw.line((cx + dx * .7, cy + dy * .7, cx + dx, cy + dy), fill=(*c2, 210), width=5)
    elif theme == "ai":
        draw.rounded_rectangle((cx - 33, cy - 33, cx + 33, cy + 33), radius=9, outline=(*c2, 235), width=5)
        for dx, dy in ((-50, 0), (50, 0), (0, -50), (0, 50)):
            draw.line((cx, cy, cx + dx, cy + dy), fill=(*c2, 200), width=4)
            draw.ellipse((cx + dx - 6, cy + dy - 6, cx + dx + 6, cy + dy + 6), fill=(*c2, 235))
    else:
        draw.rounded_rectangle((cx - 36, cy - 28, cx + 36, cy + 28), radius=6, outline=(*c2, 230), width=5)
        for offset in (-20, 0, 20):
            draw.line((cx - 52, cy + offset, cx - 36, cy + offset), fill=(*c2, 220), width=4)
            draw.line((cx + 36, cy + offset, cx + 52, cy + offset), fill=(*c2, 220), width=4)
    return Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")

def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    base = Image.open(SOURCE).convert("RGB")
    for slug in slugs():
        make_cover(base, slug).save(OUTPUT / f"{slug}.jpg", quality=88, optimize=True)
    print(f"Created {len(slugs())} covers in {OUTPUT}")

if __name__ == "__main__":
    main()
