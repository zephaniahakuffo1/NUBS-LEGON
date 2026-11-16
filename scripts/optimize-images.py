#!/usr/bin/env python3
"""Shrink a picture before you add it to the site (big pictures make it slow).

For GALLERY photos use scripts/add-photos.py instead: it does everything in one step.
Use this one for other pictures: leader photos, event posters, auxiliary pictures.

Usage:
    pip install pillow
    python3 scripts/optimize-images.py path/to/photo.jpg [more photos...]

For each photo this writes, next to the original:
    <name>-opt.jpg            max 1600px wide, quality 72
    thumbs/<name>-opt.jpg     max 480px wide, quality 60 (not needed outside the gallery)
Rename the -opt.jpg file and move it into the right folder under public/assets/images/.
"""Shrink photos before you add them to the site (big photos make it slow).

Usage:
    pip install pillow
    python3 scripts/optimize-images.py path/to/photo.jpg [more photos...]

For each photo this writes, next to the original:
    <name>.jpg            max 1600px wide, quality 72
    thumbs/<name>.jpg     max 480px wide, quality 60  (for the gallery grid)
Then move the results into assets/images/gallery/ (and thumbs/).
"""Shrink a picture before you add it to the site (big pictures make it slow).

For GALLERY photos use scripts/add-photos.py instead: it does everything in one step.
Use this one for other pictures: leader photos, event posters, auxiliary pictures.

Usage:
    pip install pillow
    python3 scripts/optimize-images.py path/to/photo.jpg [more photos...]

For each photo this writes, next to the original:
    <name>-opt.jpg            max 1600px wide, quality 72
    thumbs/<name>-opt.jpg     max 480px wide, quality 60 (not needed outside the gallery)
Rename the -opt.jpg file and move it into the right folder under public/assets/images/.
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps


def save(img, path, width, quality):
    img = img.copy()
    img.thumbnail((width, width * 4))
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"  {path}  {path.stat().st_size // 1024} KB")


def main(files):
    if not files:
        sys.exit(__doc__)
    for f in map(Path, files):
        img = ImageOps.exif_transpose(Image.open(f))
        out = f.with_name(f.stem + "-opt.jpg")
        save(img, out, 1600, 72)
        save(img, f.parent / "thumbs" / (f.stem + "-opt.jpg"), 480, 60)


if __name__ == "__main__":
    main(sys.argv[1:])
