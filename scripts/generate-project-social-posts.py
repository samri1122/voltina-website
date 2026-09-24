"""Generate ready-to-copy Telegram and Instagram captions for every project."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PORTFOLIO = (ROOT / "data" / "portfolio.ts").read_text(encoding="utf-8")
SHOWCASE = (ROOT / "data" / "project-showcase.ts").read_text(encoding="utf-8")
OUTPUT = ROOT / "content" / "project-social-posts.md"

WHATSAPP = "https://wa.me/989015039653"
TELEGRAM = "https://t.me/VOLTINA_C"
INSTAGRAM = "https://instagram.com/VOLTINA_C"

def old_projects():
    pattern = re.compile(r'key:\s*"([^"]+)".*?tag:\s*"([^"]+)".*?title:\s*"([^"]+)".*?challenge:\s*"([^"]+)"', re.S)
    return [(*project, "نمونه‌کار Voltina") for project in pattern.findall(PORTFOLIO)]

def showcase_projects():
    pattern = re.compile(r'^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",', re.M)
    return [(*project, "نمونه‌پروژه اجرایی") for project in pattern.findall(SHOWCASE)]

def caption(number: int, key: str, tag: str, title: str, summary: str, label: str) -> str:
    hashtags = " ".join(f"#{word}" for word in re.findall(r"[A-Za-z0-9آ-ی]+", tag.replace("·", " "))[:3])
    return f"""## {number:02d}. {title}

### پست تلگرام

⚡ **{label}: {title}**

{summary}

در Voltina مسیر پروژه از تحلیل نیاز و طراحی مدار تا PCB، برنامه‌نویسی و تست نمونه اولیه با مستندسازی قابل پیگیری پیش می‌رود.

برای مشاوره و ثبت سفارش پروژه:
📱 [واتساپ Voltina]({WHATSAPP})
📢 [تلگرام Voltina]({TELEGRAM})
📷 [اینستاگرام Voltina]({INSTAGRAM})

{hashtags} #Voltina #پروژه_الکترونیک

### پست اینستاگرام

{label}: {title} ⚙️

{summary}

اگر برای پروژه دانشجویی، صنعتی یا طراحی PCB به نمونه اولیه، برنامه‌نویسی میکروکنترلر یا طراحی برد نیاز دارید، پیام بدهید تا مسیر فنی پروژه را با هم بررسی کنیم.

ثبت سفارش در واتساپ: {WHATSAPP}
تلگرام: {TELEGRAM}
اینستاگرام: {INSTAGRAM}

{hashtags} #Voltina #طراحی_مدار #طراحی_PCB #پروژه_دانشجویی

---
"""

def main() -> None:
    projects = old_projects() + showcase_projects()
    body = "# پست‌های آمادهٔ شبکه‌های اجتماعی Voltina\n\n"
    body += "هر بخش شامل یک کپشن تلگرام و یک کپشن اینستاگرام برای همان پروژه است. لینک‌های تماس را پیش از انتشار بررسی کنید.\n\n"
    body += "".join(caption(index, *project) for index, project in enumerate(projects, 1))
    OUTPUT.parent.mkdir(exist_ok=True)
    OUTPUT.write_text(body, encoding="utf-8")
    print(f"Created {len(projects)} project post pairs: {OUTPUT}")

if __name__ == "__main__":
    main()
