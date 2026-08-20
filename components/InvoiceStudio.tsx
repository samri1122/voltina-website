"use client";

import { useMemo, useState } from "react";

type InvoiceKind = "sale" | "repair" | "project";

const kindNames: Record<InvoiceKind, string> = {
  sale: "فروش کالا",
  repair: "خدمات تعمیرات",
  project: "پروژه سفارشی",
};

const kindDescriptions: Record<InvoiceKind, string> = {
  sale: "فروش و تحویل کالای الکترونیکی",
  repair: "عیب‌یابی، تعمیر و تست نهایی دستگاه",
  project: "طراحی، ساخت و تحویل پروژه سفارشی",
};

const money = (value: number) => new Intl.NumberFormat("fa-IR").format(Math.max(0, value));
const date = new Intl.DateTimeFormat("fa-IR", { dateStyle: "long" }).format(new Date());

export function InvoiceStudio() {
  const [kind, setKind] = useState<InvoiceKind>("sale");
  const [customer, setCustomer] = useState("نام مشتری");
  const [phone, setPhone] = useState("۰۹۰۱••••••••");
  const [description, setDescription] = useState("شرح کالا یا خدمات");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [status, setStatus] = useState("در انتظار تسویه");
  const [card, setCard] = useState("شماره کارت را وارد کنید");
  const [holder, setHolder] = useState("نام صاحب کارت");
  const [bank, setBank] = useState("نام بانک");
  const [invoiceNo, setInvoiceNo] = useState(`VLT-${String(Date.now()).slice(-6)}`);

  const subtotal = useMemo(() => quantity * unitPrice, [quantity, unitPrice]);
  const total = Math.max(0, subtotal - discount + shipping);

  return (
    <main className="invoice-studio" dir="rtl">
      <style>{styles}</style>
      <header className="studio-top no-print">
        <a href="/admin" className="back-link">← بازگشت به مدیریت</a>
        <button className="print-button" onClick={() => window.print()}>چاپ / ذخیره PDF</button>
      </header>

      <section className="studio-layout no-print">
        <aside className="editor-card">
          <div className="editor-head"><span className="editor-kicker">VOLTINA BUSINESS</span><h1>ساخت فاکتور</h1><p>اطلاعات را وارد کنید؛ سپس فاکتور را چاپ یا PDF ذخیره کنید.</p></div>
          <label>نوع فاکتور</label>
          <div className="kind-row">
            {(Object.keys(kindNames) as InvoiceKind[]).map((value) => <button key={value} className={kind === value ? "kind active" : "kind"} onClick={() => setKind(value)}>{kindNames[value]}</button>)}
          </div>
          <div className="fields two"><Field label="شماره فاکتور" value={invoiceNo} onChange={setInvoiceNo} /><Field label="نام مشتری" value={customer} onChange={setCustomer} /></div>
          <div className="fields two"><Field label="شماره تماس" value={phone} onChange={setPhone} /><Field label="شرح مورد" value={description} onChange={setDescription} /></div>
          <div className="fields three"><NumberField label="تعداد" value={quantity} onChange={setQuantity} /><NumberField label="مبلغ واحد (تومان)" value={unitPrice} onChange={setUnitPrice} /><NumberField label="تخفیف (تومان)" value={discount} onChange={setDiscount} /></div>
          <div className="fields two"><NumberField label="هزینه ارسال (تومان)" value={shipping} onChange={setShipping} /><label>وضعیت تسویه<select value={status} onChange={(e) => setStatus(e.target.value)}><option>تسویه شده</option><option>بیعانه دریافت شد</option><option>در انتظار تسویه</option></select></label></div>
          <div className="payment-editor"><p>اطلاعات دریافت وجه</p><div className="fields"><Field label="شماره کارت" value={card} onChange={setCard} /><Field label="نام صاحب کارت" value={holder} onChange={setHolder} /><Field label="بانک" value={bank} onChange={setBank} /></div></div>
        </aside>
        <p className="preview-hint">پیش‌نمایش فاکتور</p>
      </section>

      <article className="invoice-paper">
        <div className="invoice-hero">
          <div className="brand-lockup"><img src="/images/voltina-mark.png" alt="Voltina Electronics" /><div><strong>VOLTINA</strong><span>الکترونیک • تعمیرات • پروژه‌های هوشمند</span></div></div>
          <div className="invoice-title"><small>INVOICE / فاکتور رسمی</small><h2>{kindNames[kind]}</h2></div>
        </div>
        <div className="invoice-bar"><span>شماره فاکتور: <b>{invoiceNo}</b></span><span>تاریخ صدور: <b>{date}</b></span><span className={status === "تسویه شده" ? "settled" : status === "بیعانه دریافت شد" ? "partial" : "pending"}>{status}</span></div>
        <section className="customer-box"><div><small>صورتحساب برای</small><h3>{customer}</h3><p>{phone}</p></div><div><small>موضوع فاکتور</small><h3>{kindDescriptions[kind]}</h3><p>واحد پول: تومان</p></div></section>
        <table><thead><tr><th>ردیف</th><th>شرح کالا / خدمت</th><th>تعداد</th><th>مبلغ واحد</th><th>مبلغ کل</th></tr></thead><tbody><tr><td>۱</td><td><strong>{description}</strong><small>{kindDescriptions[kind]}</small></td><td>{money(quantity)}</td><td>{money(unitPrice)} تومان</td><td>{money(subtotal)} تومان</td></tr></tbody></table>
        <section className="invoice-bottom"><div className="terms"><h3>شرایط و نحوهٔ تسویه</h3><p>لطفاً مبلغ فاکتور را به کارت زیر واریز کرده و رسید پرداخت را از طریق واتساپ ارسال کنید. شروع یا تحویل کار پس از تأیید پرداخت انجام می‌شود.</p><div className="card-box"><span>پرداخت کارت‌به‌کارت</span><strong dir="ltr">{card}</strong><b>{holder} — {bank}</b></div></div><div className="totals"><div><span>جمع جزء</span><b>{money(subtotal)} تومان</b></div><div><span>تخفیف</span><b>− {money(discount)} تومان</b></div><div><span>هزینه ارسال</span><b>+ {money(shipping)} تومان</b></div><div className="grand"><span>مبلغ قابل پرداخت</span><b>{money(total)} تومان</b></div></div></section>
        <footer className="invoice-footer"><div><strong>با سپاس از انتخاب Voltina</strong><span>پشتیبانی: ۰۹۰۱۵۰۳۹۶۵۳</span></div><div><span>این فاکتور به‌صورت سیستمی صادر شده است.</span><b>VOLTINA</b></div></footer>
      </article>
    </main>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) { return <label>{label}<input value={value} onChange={(e) => onChange(e.target.value)} /></label>; }
function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) { return <label>{label}<input type="number" min="0" value={value} onChange={(e) => onChange(Number(e.target.value))} /></label>; }

const styles = `
  .brand-lockup img{width:56px;height:56px;object-fit:cover;object-position:center 43%;border-radius:12px;border:1px solid #7db2ff}
  .invoice-studio{min-height:100vh;padding:32px;background:#eef3f8;color:#16253d}.studio-top{max-width:1120px;margin:0 auto 18px;display:flex;justify-content:space-between;align-items:center}.back-link{color:#54657a;text-decoration:none;font-size:.88rem}.print-button{background:#1769e0;color:#fff;border:0;border-radius:10px;padding:11px 18px;font:700 .85rem Vazirmatn,Arial;cursor:pointer;box-shadow:0 7px 16px #1769e044}.studio-layout{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:340px 1fr;gap:24px;align-items:start}.editor-card{background:#fff;border:1px solid #dce5f0;border-radius:18px;padding:23px;box-shadow:0 12px 34px #12355c12}.editor-head{margin-bottom:20px}.editor-kicker{font-size:.68rem;color:#1769e0;font-weight:800;letter-spacing:.12em}.editor-head h1{font-size:1.45rem;margin:4px 0}.editor-head p{font-size:.76rem;line-height:1.8;color:#6b7a8d}.editor-card label{display:block;font-size:.72rem;font-weight:700;color:#42536b;margin-bottom:11px}.editor-card input,.editor-card select{width:100%;margin-top:4px;border:1px solid #d8e1ed;border-radius:8px;background:#f9fbfd;padding:8px 9px;font:inherit;color:#17263f}.fields{display:grid;gap:8px}.fields.two{grid-template-columns:1fr 1fr}.fields.three{grid-template-columns:.55fr 1fr 1fr}.kind-row{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:5px 0 15px}.kind{border:1px solid #d8e1ed;background:#fff;border-radius:8px;padding:7px 4px;font:600 .68rem Vazirmatn;cursor:pointer}.kind.active{background:#eaf2ff;color:#1769e0;border-color:#75a9ff}.payment-editor{background:#f2f7ff;border-radius:10px;padding:10px;margin-top:4px}.payment-editor p{font-size:.76rem;font-weight:800;color:#1c5198;margin-bottom:7px}.preview-hint{text-align:center;color:#8795a7;font-size:.78rem;padding-top:8px}.invoice-paper{max-width:930px;margin:0 auto;background:#fff;box-shadow:0 18px 50px #12355c25;border-radius:4px;overflow:hidden}.invoice-hero{background:linear-gradient(115deg,#091d3b,#123f7c 62%,#1b73e8);color:#fff;padding:31px 40px;display:flex;justify-content:space-between;align-items:center}.brand-lockup{display:flex;align-items:center;gap:13px}.brand-mark{width:45px;height:45px;border:1px solid #7db2ff;border-radius:12px;display:grid;place-items:center;font-size:1.5rem;font-weight:900}.brand-lockup strong{display:block;font:900 1.4rem Arial;letter-spacing:.08em}.brand-lockup span{font-size:.66rem;color:#cbdfff}.invoice-title{text-align:left}.invoice-title small{font:700 .65rem Arial;color:#aaccff;letter-spacing:.13em}.invoice-title h2{font-size:1.18rem;margin-top:5px}.invoice-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:13px 40px;background:#eaf2ff;border-bottom:1px solid #d7e5fa;color:#3c5370;font-size:.76rem}.invoice-bar b{color:#142d50}.settled,.partial,.pending{padding:4px 10px;border-radius:20px;font-weight:800}.settled{background:#dcf6e7;color:#167344}.partial{background:#fff1d2;color:#a46500}.pending{background:#ffebeb;color:#b23434}.customer-box{margin:28px 40px;display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:17px 20px;border:1px solid #e2e9f2;border-radius:12px;background:#fbfcfe}.customer-box small,td small{display:block;color:#76869a;font-size:.7rem}.customer-box h3{font-size:.91rem;margin:4px 0;color:#1b2c43}.customer-box p{font-size:.76rem;color:#607187}table{width:calc(100% - 80px);margin:0 40px;border-collapse:collapse;font-size:.78rem}th{background:#112c55;color:#fff;padding:11px;text-align:right;font-size:.72rem}th:first-child{border-radius:0 7px 7px 0}th:last-child{border-radius:7px 0 0 7px}td{padding:14px 11px;border-bottom:1px solid #e5ebf2;color:#36475f}td strong{font-size:.82rem;color:#1c2d45}.invoice-bottom{margin:28px 40px 32px;display:grid;grid-template-columns:1.25fr .75fr;gap:28px}.terms h3{font-size:.9rem;color:#173458;margin-bottom:7px}.terms>p{font-size:.75rem;color:#5d6d80;line-height:2}.card-box{margin-top:13px;padding:13px 16px;background:linear-gradient(130deg,#0c2448,#174d98);color:#fff;border-radius:12px;display:grid;gap:3px}.card-box span{font-size:.67rem;color:#c9ddff}.card-box strong{font:700 1.08rem Arial;letter-spacing:.08em;direction:ltr;text-align:right}.card-box b{font-size:.73rem}.totals{border:1px solid #dde6f0;border-radius:11px;padding:8px 15px}.totals div{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed #dbe3ed;font-size:.76rem;color:#5b6b80}.totals b{color:#213651}.totals .grand{border:0;margin:7px -15px -8px;padding:15px;background:#e9f2ff;color:#12498c;font-size:.84rem;font-weight:800}.grand b{color:#1260c8;font-size:.94rem}.invoice-footer{padding:19px 40px;background:#f4f7fb;border-top:1px solid #e0e7ef;display:flex;justify-content:space-between;color:#667689;font-size:.67rem}.invoice-footer div{display:grid;gap:2px}.invoice-footer b{font:800 .9rem Arial;letter-spacing:.08em;color:#265fa9;text-align:left}@media(max-width:760px){.invoice-studio{padding:12px}.studio-layout{grid-template-columns:1fr}.preview-hint{display:none}.invoice-hero,.invoice-bar,.invoice-footer{padding-right:18px;padding-left:18px}.invoice-hero{gap:13px}.invoice-bar{align-items:flex-start;flex-direction:column}.customer-box,.invoice-bottom{margin-right:18px;margin-left:18px;grid-template-columns:1fr}table{width:calc(100% - 36px);margin:0 18px}.invoice-paper{overflow-x:auto}.fields.three{grid-template-columns:1fr 1fr}.fields.three label:first-child{grid-column:span 2}}@media print{.no-print{display:none!important}.invoice-studio{padding:0;background:#fff}.invoice-paper{box-shadow:none;max-width:none;width:100%;border-radius:0}@page{size:A4;margin:0}}
`;
