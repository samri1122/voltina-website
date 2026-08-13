import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "esp32-dual-core",
    name: "ماژول ESP32 دو هسته‌ای",
    cat: "module",
    catLabel: "ماژول / وای‌فای",
    price: "۳۸۵٬۰۰۰",
    reviews: "۱۲۴",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول توسعه دو هسته‌ای با پشتیبانی از وای‌فای و بلوتوث، مناسب برای پروژه‌های IoT، اتوماسیون خانگی و کنترل از راه دور.",
    specs: [
      ["پردازنده", "Dual-core Xtensa LX6"],
      ["ولتاژ ورودی", "5V (USB) / 3.3V"],
      ["ارتباطات", "Wi-Fi 802.11 b/g/n، Bluetooth 4.2"],
      ["تعداد پین", "۳۸ پین"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604263-5d803038b389?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631378961385-21bee7eb41ad?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604269-6f42b26fa9b7?auto=format&fit=crop&w=700&h=560&q=68"
    ],
    badge: "best",
  },
  {
    slug: "relay-module-4ch",
    name: "ماژول رله ۴ کاناله ۵ ولت",
    cat: "module",
    catLabel: "ماژول / کنترل",
    price: "۱۶۵٬۰۰۰",
    reviews: "۶۸",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول رله ۴ کاناله برای کنترل تجهیزات با ولتاژ بالا از طریق میکروکنترلر، دارای ایزوله اپتیکال برای ایمنی بیشتر.",
    specs: [
      ["تعداد کانال", "۴"],
      ["ولتاژ کنترل", "5V DC"],
      ["حداکثر جریان سوئیچ", "۱۰A @ 250VAC"],
      ["نوع ایزولاسیون", "اپتوکوپلر"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "fridge-control-board",
    name: "برد کنترل یخچال ساید‌بای‌ساید",
    cat: "board",
    catLabel: "برد کنترل / یخچال",
    price: "۱٬۲۵۰٬۰۰۰",
    reviews: "۴۱",
    stock: "low",
    stockText: "⚠ فقط ۳ عدد باقی‌مانده",
    desc: "برد کنترل اصلی یخچال‌های ساید‌بای‌ساید، سازگار با اکثر برندهای رایج بازار، تست‌شده و آماده نصب.",
    specs: [
      ["نوع دستگاه", "یخچال ساید‌بای‌ساید"],
      ["ولتاژ کاری", "220V AC"],
      ["سازگاری", "اکثر برندهای رایج بازار"],
      ["وضعیت", "تست‌شده و آماده نصب"],
      ["گارانتی", "۶ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1634452015397-ad0686a2ae2d?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1761496847215-46592435aab0?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "freezer-control-board",
    name: "برد کنترل فریزر دیجیتال",
    cat: "board",
    catLabel: "برد کنترل / فریزر",
    price: "۹۸۰٬۰۰۰",
    reviews: "۱۹",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "برد کنترل دیجیتال فریزر با نمایشگر و کنترل دقیق دما، مناسب برای فریزرهای خانگی و نیمه‌صنعتی.",
    specs: [
      ["نوع دستگاه", "فریزر خانگی/نیمه‌صنعتی"],
      ["ولتاژ کاری", "220V AC"],
      ["نمایشگر", "دیجیتال ۷ سگمنت"],
      ["دقت کنترل دما", "±۱ درجه"],
      ["گارانتی", "۶ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1761496847215-46592435aab0?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1634452015397-ad0686a2ae2d?auto=format&fit=crop&w=700&h=560&q=68"
    ],
    badge: "new",
  },
  {
    slug: "psu-12v-5a",
    name: "منبع تغذیه سوئیچینگ ۱۲ ولت ۵ آمپر",
    cat: "psu",
    catLabel: "منبع تغذیه",
    price: "۴۸۰٬۰۰۰",
    reviews: "۹۵",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "منبع تغذیه سوئیچینگ باکیفیت با راندمان بالا و حفاظت در برابر اتصال کوتاه و اضافه‌بار، مناسب پروژه‌های صنعتی و خانگی.",
    specs: [
      ["ولتاژ خروجی", "12V DC"],
      ["جریان خروجی", "5A"],
      ["توان", "60W"],
      ["حفاظت", "اتصال کوتاه، اضافه‌بار، اضافه‌ولتاژ"],
      ["گارانتی", "۶ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1649559295229-961cbad5d13f?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1543617080-0db79d35e926?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "adapter-24v-3a",
    name: "آداپتور سوئیچینگ ۲۴ ولت ۳ آمپر",
    cat: "psu",
    catLabel: "منبع تغذیه",
    price: "۶۲۰٬۰۰۰",
    reviews: "۵۲",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "آداپتور سوئیچینگ فشرده و باکیفیت برای تجهیزات صنعتی و اتوماسیون با نویز خروجی پایین.",
    specs: [
      ["ولتاژ خروجی", "24V DC"],
      ["جریان خروجی", "3A"],
      ["توان", "72W"],
      ["نویز خروجی", "پایین (مناسب مدارات حساس)"],
      ["گارانتی", "۶ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1727377255383-fb304fb08262?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1518228684816-9135c15ab4ea?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "multimeter-true-rms",
    name: "مولتی‌متر دیجیتال True RMS",
    cat: "tool",
    catLabel: "ابزار اندازه‌گیری",
    price: "۹۲۰٬۰۰۰",
    reviews: "۸۷",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "مولتی‌متر دیجیتال True RMS با دقت بالا برای اندازه‌گیری ولتاژ، جریان، مقاومت و تست دیود/پیوستگی.",
    specs: [
      ["نوع اندازه‌گیری", "True RMS"],
      ["محدوده ولتاژ AC/DC", "تا 750V/1000V"],
      ["دقت", "±۰.۵٪"],
      ["امکانات جانبی", "تست دیود، پیوستگی، خازن‌سنج"],
      ["گارانتی", "۱۲ ماه"]
    ],
    images: [
      "https://images.unsplash.com/photo-1562877773-a37120131ec4?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1554021279-722f30a555be?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1777153184385-cff867582a1c?auto=format&fit=crop&w=700&h=560&q=68"
    ],
    badge: "best",
  },
  {
    slug: "soldering-iron-60w",
    name: "هویه تنظیم‌دما ۶۰ وات",
    cat: "tool",
    catLabel: "ابزار تعمیرات",
    price: "۵۴۰٬۰۰۰",
    reviews: "۳۳",
    stock: "low",
    stockText: "⚠ فقط ۲ عدد باقی‌مانده",
    desc: "هویه‌ی تنظیم‌دمای حرفه‌ای با گرمایش سریع، مناسب برای لحیم‌کاری دقیق قطعات SMD و کارهای تعمیراتی.",
    specs: [
      ["توان", "۶۰ وات"],
      ["محدوده دما", "۲۰۰ تا ۴۸۰ درجه سانتی‌گراد"],
      ["زمان گرمایش", "کمتر از ۳۰ ثانیه"],
      ["نوع نوک", "قابل تعویض"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1560846389-8c7e1d88eca8?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1521798604188-0d6595d6d6ae?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1777153184385-cff867582a1c?auto=format&fit=crop&w=700&h=560&q=68"
    ],
    badge: "new",
  },
  {
    slug: "bluetooth-hc05",
    name: "ماژول بلوتوث HC-05",
    cat: "module",
    catLabel: "ماژول / بلوتوث",
    price: "۱۹۵٬۰۰۰",
    reviews: "۵۶",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول بلوتوث سریال برای برقراری ارتباط بی‌سیم بین میکروکنترلر و موبایل یا کامپیوتر، ساده و پرکاربرد در پروژه‌های آموزشی.",
    specs: [
      ["پروتکل", "Bluetooth 2.0 Serial"],
      ["ولتاژ کاری", "3.3V–5V"],
      ["برد ارتباطی", "تا ۱۰ متر"],
      ["حالت", "Master/Slave"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604269-6f42b26fa9b7?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "pir-motion-sensor",
    name: "سنسور تشخیص حرکت PIR",
    cat: "module",
    catLabel: "ماژول / سنسور",
    price: "۱۱۵٬۰۰۰",
    reviews: "۴۴",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "سنسور تشخیص حرکت مادون‌قرمز، مناسب برای پروژه‌های امنیتی، روشنایی خودکار و اتوماسیون خانگی.",
    specs: [
      ["برد تشخیص", "تا ۷ متر"],
      ["زاویه تشخیص", "۱۲۰ درجه"],
      ["ولتاژ کاری", "5V–20V"],
      ["خروجی", "دیجیتال"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1761496847215-46592435aab0?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "oled-display-096",
    name: "نمایشگر OLED آبی ۰.۹۶ اینچ",
    cat: "module",
    catLabel: "ماژول / نمایشگر",
    price: "۲۴۰٬۰۰۰",
    reviews: "۳۸",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "نمایشگر OLED کوچک و پرکنتراست، مناسب برای نمایش اطلاعات در پروژه‌های میکروکنترلری با مصرف انرژی پایین.",
    specs: [
      ["سایز", "۰.۹۶ اینچ"],
      ["رزولوشن", "128×64"],
      ["رابط", "I2C"],
      ["ولتاژ کاری", "3.3V–5V"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604269-6f42b26fa9b7?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "pwm-motor-driver",
    name: "ماژول کنترل دور موتور PWM",
    cat: "module",
    catLabel: "ماژول / کنترل موتور",
    price: "۱۷۵٬۰۰۰",
    reviews: "۲۷",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول کنترل سرعت موتورهای DC با روش PWM، مناسب برای پروژه‌های رباتیک و اتوماسیون کوچک.",
    specs: [
      ["روش کنترل", "PWM"],
      ["حداکثر جریان", "۱۵A"],
      ["ولتاژ ورودی", "6V–90V"],
      ["فرکانس PWM", "قابل تنظیم"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "stepper-driver-a4988",
    name: "برد درایور موتور استپر A4988",
    cat: "board",
    catLabel: "برد کنترل / موتور",
    price: "۱۴۵٬۰۰۰",
    reviews: "۳۱",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "درایور موتور استپر برای پروژه‌های CNC و پرینتر سه‌بعدی، با قابلیت میکرواستپ برای حرکت نرم‌تر.",
    specs: [
      ["حداکثر جریان خروجی", "2A"],
      ["ولتاژ موتور", "8V–35V"],
      ["میکرواستپ", "تا 1/16"],
      ["حفاظت حرارتی", "دارد"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604269-6f42b26fa9b7?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1634452015397-ad0686a2ae2d?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "voltage-regulator-lm2596",
    name: "رگولاتور ولتاژ LM2596 قابل‌تنظیم",
    cat: "psu",
    catLabel: "منبع تغذیه",
    price: "۹۸٬۰۰۰",
    reviews: "۶۱",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول کاهنده‌ی ولتاژ (Step-down) با قابلیت تنظیم دقیق خروجی، مناسب برای تغذیه‌ی مدارات با ولتاژهای مختلف.",
    specs: [
      ["نوع", "Step-down (Buck)"],
      ["ولتاژ ورودی", "3V–40V"],
      ["ولتاژ خروجی", "1.5V–35V قابل تنظیم"],
      ["حداکثر جریان", "3A"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1649559295229-961cbad5d13f?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1518228684816-9135c15ab4ea?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "battery-charger-tp4056",
    name: "ماژول شارژر باتری لیتیومی TP4056",
    cat: "psu",
    catLabel: "منبع تغذیه / شارژر",
    price: "۶۵٬۰۰۰",
    reviews: "۷۲",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ماژول شارژ باتری‌های لیتیوم-یون با محافظت در برابر اتصال کوتاه، اضافه‌شارژ و تخلیه‌ی کامل.",
    specs: [
      ["ورودی شارژ", "Micro-USB / Type-C"],
      ["جریان شارژ", "تا 1A"],
      ["حفاظت", "اتصال کوتاه، اضافه‌شارژ، دشارژ"],
      ["نوع باتری", "لیتیوم-یون تک‌سل"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "isolation-transformer",
    name: "ترانسفورماتور ایزوله ۲۲۰ به ۱۲ ولت",
    cat: "psu",
    catLabel: "منبع تغذیه / ترانس",
    price: "۳۸۰٬۰۰۰",
    reviews: "۲۴",
    stock: "low",
    stockText: "⚠ فقط ۴ عدد باقی‌مانده",
    desc: "ترانسفورماتور ایزوله برای تبدیل ایمن ولتاژ برق شهری، مناسب برای پروژه‌هایی که نیاز به جداسازی گالوانیکی دارن.",
    specs: [
      ["ولتاژ ورودی", "220V AC"],
      ["ولتاژ خروجی", "12V AC"],
      ["توان", "۵۰ وات"],
      ["نوع ایزولاسیون", "گالوانیکی کامل"],
      ["گارانتی", "۶ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1543617080-0db79d35e926?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1686710278078-26f028c6dad8?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1518228684816-9135c15ab4ea?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "soldering-kit",
    name: "کیت لحیم‌کاری همراه",
    cat: "tool",
    catLabel: "ابزار تعمیرات",
    price: "۷۲۰٬۰۰۰",
    reviews: "۴۹",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "کیت کامل لحیم‌کاری شامل هویه، پایه نگهدارنده، سیم لحیم و ابزار کمکی، مناسب برای تعمیرات در محل.",
    specs: [
      ["اقلام کیت", "هویه، پایه، سیم لحیم، پنس"],
      ["توان هویه", "۴۰ وات"],
      ["قابلیت حمل", "کیف مخصوص همراه"],
      ["مناسب برای", "تعمیرات در محل"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1560846389-8c7e1d88eca8?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1521798604188-0d6595d6d6ae?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1777153184385-cff867582a1c?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
  {
    slug: "solder-sucker",
    name: "پمپ هوای لحیم‌کش (Solder Sucker)",
    cat: "tool",
    catLabel: "ابزار تعمیرات",
    price: "۱۸۰٬۰۰۰",
    reviews: "۲۹",
    stock: "in",
    stockText: "✓ موجود — ارسال امروز",
    desc: "ابزار مکش لحیم برای برداشتن قطعات از روی برد بدون آسیب به پد و مسیرهای مسی.",
    specs: [
      ["نوع", "پمپ مکشی دستی"],
      ["جنس نوک", "تفلون مقاوم به حرارت"],
      ["کاربرد", "برداشتن قطعه از برد"],
      ["قابلیت تمیزکاری", "نوک قابل شستشو"],
      ["گارانتی", "۳ ماه تعویض"]
    ],
    images: [
      "https://images.unsplash.com/photo-1521798604188-0d6595d6d6ae?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1777153184385-cff867582a1c?auto=format&fit=crop&w=700&h=560&q=68",
      "https://images.unsplash.com/photo-1655165312008-5feda4a1e989?auto=format&fit=crop&w=700&h=560&q=68"
    ],
  },
];