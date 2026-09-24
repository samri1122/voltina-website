import { PortfolioProject } from "@/types";

type Blueprint = [string, string, string, string, string];

const projectImagePool = [
  "https://images.unsplash.com/photo-1631378961385-21bee7eb41ad?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1631376604269-6f42b26fa9b7?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1631376604914-572212a3ede5?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1562877773-a37120131ec4?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1560846389-8c7e1d88eca8?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1634452015397-ad0686a2ae2d?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1631376604944-ddb97deb9839?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1649559295229-961cbad5d13f?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1768633647910-7e6fb53e5b0f?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1777153184385-cff867582a1c?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1521798604188-0d6595d6d6ae?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1676630444903-163fe485c5d1?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1563456019560-2b37aa7ad890?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1685720543547-cc4873188c75?auto=format&fit=crop&w=1000&h=680&q=82",
  "https://images.unsplash.com/photo-1543617080-0db79d35e926?auto=format&fit=crop&w=1000&h=680&q=82",
];

const blueprints: Blueprint[] = [
  ["stm32-lab-controller", "STM32 · پروژه دانشجویی", "کنترلر آزمایشگاهی چندکاناله با STM32", "کنترل سنسورها و نمایش داده برای یک پروژه قابل ارائه.", "/images/blog/posts/microcontroller-project-idea.jpg"],
  ["stm32-data-logger", "STM32 · ابزار دقیق", "دیتالاگر دما و فشار با حافظه داخلی", "ثبت پایدار داده و خروجی قابل تحلیل برای کارگاه یا آزمایشگاه.", "/images/blog/posts/precision-temperature-measurement.jpg"],
  ["stm32-motor-driver", "STM32 · کنترل موتور", "درایور موتور DC با کنترل سرعت PWM", "کنترل سرعت، حفاظت جریان و بازخورد سنسور در یک نمونه اولیه.", "/images/blog/posts/motor-controller-repair-guide.jpg"],
  ["stm32-hmi-panel", "STM32 · HMI", "پنل کاربری لمسی برای دستگاه صنعتی", "نمایش وضعیت، تنظیم پارامتر و ثبت هشدارهای اصلی دستگاه.", "/images/blog/posts/industrial-pcb-repair.jpg"],
  ["stm32-can-monitor", "STM32 · ارتباطات", "مانیتور شبکه CAN برای تست تجهیزات", "خواندن پیام‌ها، ثبت خطا و نمایش وضعیت ارتباط روی نمایشگر.", "/images/blog/posts/industrial-cybersecurity-basics.jpg"],
  ["esp32-greenhouse", "ESP32 · IoT", "کنترل هوشمند گلخانه با ESP32", "پایش دما و رطوبت، کنترل آبیاری و گزارش وضعیت از راه دور.", "/images/blog/posts/iot-prototype-roadmap.jpg"],
  ["esp32-energy-monitor", "ESP32 · انرژی", "پایش مصرف برق تک‌فاز با داشبورد آنلاین", "اندازه‌گیری توان، هشدار مصرف غیرعادی و ارسال داده از طریق Wi‑Fi.", "/images/blog/posts/smart-energy-meter-design.jpg"],
  ["esp32-access-control", "ESP32 · امنیت", "کنترل دسترسی RFID و ثبت ورود", "ثبت رخدادها، تعریف کاربر و اتصال امن به پنل مدیریتی.", "/images/blog/posts/esp32-iot-security.jpg"],
  ["esp32-water-quality", "ESP32 · سنسور", "سامانه پایش کیفیت آب با سنسورهای دیجیتال", "جمع‌آوری سنسورها، نمایش وضعیت و ارسال هشدار دوره‌ای.", "/images/blog/posts/sensor-selection.jpg"],
  ["esp32-cold-room", "ESP32 · سردخانه", "هشدار دمای سردخانه و ثبت آنلاین داده", "هشدار دما، ثبت تاریخچه و پیشگیری از آسیب کالاهای حساس.", "/images/blog/posts/fridge-board-diagnosis.jpg"],
  ["industrial-plc-retrofit", "اتوماسیون صنعتی", "بازطراحی تابلو کنترل ماشین قدیمی", "جایگزینی منطق فرسوده با کنترل قابل سرویس و مستندسازی‌شده.", "/images/blog/posts/plc-power-supply-selection.jpg"],
  ["industrial-vfd-monitor", "اتوماسیون صنعتی", "پایش وضعیت اینورتر و موتور سه‌فاز", "خواندن خطاها، ثبت دما و ارائه هشدار تعمیرات پیشگیرانه.", "/images/blog/posts/vfd-fault-checklist.jpg"],
  ["industrial-conveyor", "اتوماسیون صنعتی", "برد کنترل نوار نقاله با سنسور شمارش", "کنترل سرعت، شمارش محصول و توقف ایمن خط.", "/images/blog/posts/industrial-automation-controller.jpg"],
  ["industrial-pump-station", "اتوماسیون صنعتی", "کنترلر ایستگاه پمپ با حفاظت سطح", "کنترل چند پمپ، سنجش سطح و جلوگیری از خشک‌کارکردن.", "/images/blog/posts/smart-building-energy-control.jpg"],
  ["industrial-predictive", "صنعت هوشمند", "پایش لرزش برای نگهداری پیشگویانه", "ثبت روند لرزش و هشدار زودهنگام پیش از خرابی مکانیکی.", "/images/blog/posts/predictive-maintenance-sensors.jpg"],
  ["medical-infusion-monitor", "تجهیزات پزشکی", "ماژول پایش وضعیت پمپ تزریق", "نمایش هشدارهای سرویس و ثبت وضعیت برای بررسی فنی.", "/images/blog/posts/patient-monitor-board-maintenance.jpg"],
  ["medical-sensor-calibrator", "تجهیزات پزشکی", "کالیبراتور قابل حمل سنسورهای پزشکی", "تولید مرجع اندازه‌گیری و ثبت گزارش کالیبراسیون.", "/images/blog/posts/medical-sensor-calibration.jpg"],
  ["medical-power-board", "تجهیزات پزشکی", "بازطراحی برد تغذیه ایزوله دستگاه پزشکی", "تمرکز بر پایداری ولتاژ، حفاظت و قابلیت تست ماژولار.", "/images/blog/posts/medical-power-supply-diagnosis.jpg"],
  ["medical-asset-tracker", "تجهیزات پزشکی · IoT", "ردیاب وضعیت تجهیزات کلینیکی", "ثبت موقعیت، وضعیت باتری و زمان سرویس تجهیزات قابل حمل.", "/images/blog/posts/wearable-health-electronics.jpg"],
  ["medical-vitals-display", "تجهیزات پزشکی", "نمایشگر کم‌مصرف برای داده‌های حیاتی", "رابط کاربری خوانا، آلارم و کنترل روشنایی نمایشگر.", "/images/blog/posts/medical-device-pcb-safety.jpg"],
  ["pcb-four-layer", "طراحی PCB", "طراحی PCB چهارلایه برای برد پردازشی", "کنترل نویز، مسیرکشی سیگنال و آماده‌سازی فایل‌های تولید.", "/images/blog/posts/high-speed-pcb-routing.jpg"],
  ["pcb-power-module", "طراحی PCB · قدرت", "برد مبدل DC-DC با مدیریت حرارت", "جانمایی قطعات قدرت، مسیرهای جریان بالا و حفاظت ورودی.", "/images/blog/posts/power-electronics-efficiency.jpg"],
  ["pcb-sensor-board", "طراحی PCB · سنسور", "برد سنسور چندگانه برای ابزار دقیق", "تغذیه کم‌نویز، کانکتور استاندارد و کالیبراسیون آسان.", "/images/blog/posts/industrial-sensor-noise.jpg"],
  ["pcb-production-ready", "طراحی PCB · تولید", "آماده‌سازی برد برای مونتاژ تیراژ پایین", "BOM، فایل‌های Gerber و بازبینی DFM پیش از تولید.", "/images/blog/posts/pcb-design-for-manufacturing.jpg"],
  ["pcb-thermal-camera", "طراحی PCB · حرارت", "برد کنترل حرارتی برای محفظه صنعتی", "پایش دما و پخش مناسب گرما در برد و بدنه.", "/images/blog/posts/pcb-thermal-design.jpg"],
  ["student-line-follower", "پروژه دانشجویی", "ربات مسیر‌یاب با سنسور مادون‌قرمز", "پروژه آموزشی با کد قابل‌فهم، شماتیک و گزارش قابل ارائه.", "/images/blog/posts/robotics-electronics-platform.jpg"],
  ["student-smart-parking", "پروژه دانشجویی · IoT", "پارکینگ هوشمند با نمایش ظرفیت", "تشخیص جای خالی، نمایشگر و پنل مدیریتی ساده.", "/images/blog/posts/wireless-sensor-network.jpg"],
  ["student-home-automation", "پروژه دانشجویی · ESP32", "کنترل خانه هوشمند با ESP32", "کنترل روشنایی، سنسور حضور و رابط وب محلی.", "/images/blog/posts/esp32-programming-guide.jpg"],
  ["student-weather-station", "پروژه دانشجویی · سنسور", "ایستگاه هواشناسی دیجیتال", "ثبت دما، رطوبت و فشار با نمایشگر و کارت حافظه.", "/images/blog/posts/dht22-sensor-module.jpg"],
  ["student-ai-sorter", "پروژه دانشجویی · AI", "نمونه تشخیص قطعه با بینایی ماشین", "طبقه‌بندی تصویری اولیه با دوربین و پردازش لبه‌ای.", "/images/blog/posts/edge-ai-industrial-vision.jpg"],
  ["clean-energy-bms", "انرژی پاک", "سیستم مدیریت باتری لیتیومی", "پایش ولتاژ سلول‌ها، دما و حفاظت در برابر شارژ بیش‌ازحد.", "/images/blog/posts/battery-management-system-basics.jpg"],
  ["clean-energy-solar", "انرژی خورشیدی", "پایشگر پنل خورشیدی با ارتباط بی‌سیم", "نمایش تولید انرژی، دما و هشدار افت عملکرد پنل.", "/images/blog/posts/solar-system-monitoring.jpg"],
  ["clean-energy-ev", "انرژی پاک · خودرو", "کنترلر نمونه شارژر خودرو برقی", "مدیریت توان، حفاظت و ثبت داده‌های شارژ برای نمونه‌سازی.", "/images/blog/posts/ev-charger-electronics.jpg"],
  ["ai-vision-inspection", "هوش مصنوعی صنعتی", "بازرسی ظاهری محصول با دوربین", "تشخیص خطای ظاهری در نمونه‌های آزمایشی با پردازش لبه‌ای.", "/images/blog/posts/ai-predictive-maintenance.jpg"],
  ["ai-sound-classifier", "هوش مصنوعی · TinyML", "تشخیص صدای خطا روی میکروکنترلر", "نمونه اولیه برای طبقه‌بندی صدا با مصرف توان پایین.", "/images/blog/posts/embedded-ai-microcontrollers.jpg"],
  ["ai-data-acquisition", "هوش مصنوعی · داده", "جمع‌آوری داده سنسورها برای مدل پیش‌بینی", "ساخت مسیر داده قابل اتکا برای تحلیل وضعیت دستگاه.", "/images/blog/posts/digital-twin-electronics.jpg"],
  ["instrument-pressure-tester", "ابزار دقیق", "تستر فشار قابل حمل با نمایشگر", "اندازه‌گیری، ثبت و کالیبراسیون اولیه فشار در محل.", "/images/blog/posts/pressure-transmitter-basics.jpg"],
  ["instrument-oscilloscope", "ابزار دقیق", "ماژول آموزشی تحلیل سیگنال", "نمونه آموزش اندازه‌گیری سیگنال و انتخاب پراب مناسب.", "/images/blog/posts/oscilloscope-buying-guide.jpg"],
  ["robot-arm-controller", "رباتیک", "کنترلر بازوی رباتیک سبک", "کنترل موتور، محدودکننده حرکت و پنل تنظیمات.", "/images/blog/posts/autonomous-mobile-robot-sensors.jpg"],
  ["smart-building-hvac", "ساختمان هوشمند", "کنترلر هوشمند تهویه و روشنایی", "تنظیم انرژی بر اساس حضور، دما و برنامه زمانی.", "/images/blog/posts/smart-building-energy-control.jpg"],
];

function projectDetails(tag: string, title: string) {
  const base = `برای «${title}» ابتدا نیازمندی‌ها، محدوده ولتاژ، ورودی‌ و خروجی‌ها و شرایط محیطی مشخص می‌شود.`;
  if (/STM32|ESP32|دانشجویی|IoT/.test(tag)) return {
    action: `${base} سپس شماتیک، برنامه‌نویسی ماژول‌ها، تست ارتباطات و مستندات کد به‌صورت مرحله‌ای آماده می‌شود تا توسعه و ارائه پروژه قابل پیگیری باشد.`,
    result: "خروجی مورد انتظار شامل نمونه اولیه قابل نمایش، سورس کد ساختاریافته، شماتیک و راهنمای راه‌اندازی برای ارائه یا توسعه بعدی است.",
  };
  if (/پزشکی/.test(tag)) return {
    action: `${base} معماری تغذیه، ایزولاسیون، رفتار خطا، ثبت وضعیت و قابلیت سرویس‌پذیری با حساسیت تجهیزات پزشکی در نظر گرفته می‌شود.`,
    result: "خروجی مورد انتظار یک طرح قابل آزمون با نقاط تست مشخص، گزارش بررسی عملکرد و مسیر روشن برای ارزیابی تخصصی ایمنی است.",
  };
  if (/PCB|قدرت|انرژی/.test(tag)) return {
    action: `${base} انتخاب قطعه، جانمایی، مسیرهای جریان، مدیریت حرارت و بازبینی DFM پیش از آماده‌سازی فایل‌های تولید انجام می‌شود.`,
    result: "خروجی مورد انتظار شامل شماتیک، BOM، فایل‌های ساخت PCB، نسخه‌بندی طراحی و چک‌لیست تست نمونه اولیه است.",
  };
  if (/صنعتی|اتوماسیون|ساختمان/.test(tag)) return {
    action: `${base} منطق کنترل، حفاظت‌های ورودی/خروجی، سیم‌کشی قابل سرویس، ثبت خطا و سناریوهای توقف ایمن در طراحی لحاظ می‌شود.`,
    result: "خروجی مورد انتظار یک طرح ماژولار با نقشه اتصالات، جدول I/O، سناریوی تست و مسیر نگهداری قابل برنامه‌ریزی است.",
  };
  return {
    action: `${base} معماری سخت‌افزار، انتخاب قطعه، نمونه‌سازی و تست مرحله‌ای برای رسیدن به خروجی قابل ارائه تعریف می‌شود.`,
    result: "خروجی مورد انتظار شامل نمونه اولیه، مستندات فنی و برنامه روشن برای تست و توسعه نسخه بعدی است.",
  };
}

export const projectShowcase: PortfolioProject[] = blueprints.map(([key, tag, title, challenge], index) => ({
  key, tag, title, challenge,
  image: projectImagePool[index % projectImagePool.length],
  ...projectDetails(tag, title),
}));
