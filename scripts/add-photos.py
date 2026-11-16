#!/usr/bin/env python3
"""Add photos to the website gallery in one step.

Usage (run from the project folder):
    python3 scripts/add-photos.py "Album name" photo1.jpg photo2.jpg ...

Example:
    python3 scripts/add-photos.py "Carols Night 2026" ~/Downloads/carols/*.jpg

For every photo this:
    1. saves a web-sized copy in  public/assets/images/gallery/         (max 1600 px wide)
    2. saves a small copy in      public/assets/images/gallery/thumbs/  (max 480 px wide)
    3. adds a line for it at the top of  public/content/gallery.js

Your original photos are not changed. Use an album name that already exists to add
to that album, or a new name to start a new album (it gets its own filter button).
Needs Pillow once:  pip install pillow
"""
import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("Pillow is not installed. Run this once, then try again:\n    pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "public" / "assets" / "images" / "gallery"
CONTENT = ROOT / "public" / "content" / "gallery.js"
OPEN_LINE = "NUBS_DATA.gallery = ["
ENTRY = re.compile(r'\{\s*file:\s*"([^"]+)",\s*album:\s*"([^"]*)"')


def save(img, path, width, quality):
    img = img.copy()
    img.thumbnail((width, width * 4))
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    return path.stat().st_size // 1024


def main(args):
    if len(args) < 2:
        sys.exit(__doc__)
    album, files = args[0].strip(), [Path(a).expanduser() for a in args[1:]]
    if Path(album).suffix.lower() in (".jpg", ".jpeg", ".png", ".webp", ".heic"):
        sys.exit('The first word must be the album name in quotes, for example "Carols Night 2026".')
    missing = [str(f) for f in files if not f.is_file()]
    if missing:
        sys.exit("These files were not found:\n  " + "\n  ".join(missing))

    text = CONTENT.read_text(encoding="utf-8")
    if OPEN_LINE not in text:
        sys.exit(f"Could not find the line '{OPEN_LINE}' in {CONTENT}. Nothing was changed.")

    # Reuse the album's existing file-name prefix (e.g. "congress") or make one from the album name.
    existing = [name for name, alb in ENTRY.findall(text) if alb == album]
    if existing:
        prefix = re.sub(r"-\d+\.\w+$", "", existing[0])
    else:
        prefix = re.sub(r"[^a-z0-9]+", "-", album.lower()).strip("-") or "photo"
    taken = [int(m.group(1)) for f in GALLERY.glob(f"{prefix}-*.jpg") if (m := re.search(r"-(\d+)\.jpg$", f.name))]
    number = max(taken, default=0)

    lines = []
    for f in files:
        try:
            img = ImageOps.exif_transpose(Image.open(f))
        except Exception as err:  # not a picture, or a format Pillow cannot read
            print(f"  SKIPPED {f.name}: could not open it as a picture ({err})")
            continue
        number += 1
        name = f"{prefix}-{number:02d}.jpg"
        big = save(img, GALLERY / name, 1600, 72)
        small = save(img, GALLERY / "thumbs" / name, 480, 60)
        album_js = album.replace("\\", "\\\\").replace('"', '\\"')
        lines.append(f'  {{ file: "{name}", album: "{album_js}" }},')
        print(f"  added {name}  ({big} KB, thumb {small} KB)  from {f.name}")

    if not lines:
        sys.exit("No photos were added.")
    CONTENT.write_text(text.replace(OPEN_LINE, OPEN_LINE + "\n" + "\n".join(lines), 1), encoding="utf-8")
    print(f'\n{len(lines)} photo(s) added to the album "{album}", at the top of the gallery.')
    print("Next:  npm run check   then   npm start   to look at the page.")


if __name__ == "__main__":
    main(sys.argv[1:])
