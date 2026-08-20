"use client";

import { useEffect, useRef } from "react";
import { useFormSubmit } from "./useFormSubmit";
import { useModal } from "./ModalProvider";
import { products } from "@/data/products";

export default function OrderForm() {
  const { status, errorMsg, handleSubmit } = useFormSubmit("/api/order");
  const { prefillOrderProduct, setPrefillOrderProduct } = useModal();
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (prefillOrderProduct && selectRef.current) {
      selectRef.current.value = prefillOrderProduct;
      setPrefillOrderProduct(null);
    }
  }, [prefillOrderProduct, setPrefillOrderProduct]);

  return (
    <section className="light form-section" id="order-form">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-eyebrow">ثبت سفارش</div>
          <h2>ثبت سفارش و خرید</h2>
          <p>
            محصول موردنظرتون رو انتخاب کنید و اطلاعات تماس رو وارد کنید، همکاران ما برای هماهنگی نهایی و پرداخت
            باهاتون تماس می‌گیرن.
          </p>
        </div>
        <div className="form-grid">
          <div className="form-card reveal">
            <div className="form-card-head">
              <div className="form-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.7}>
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.5 3h2l2.3 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6" />
                </svg>
              </div>
              <div>
                <h3>فرم ثبت سفارش خرید</h3>
                <p>تکمیل خرید قطعات و ماژول‌های فروشگاه</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="orderName">
                    نام و نام خانوادگی <span className="req">*</span>
                  </label>
                  <input type="text" id="orderName" name="orderName" required autoComplete="name" />
                </div>
                <div className="f-field">
                  <label htmlFor="orderPhone">
                    شماره تماس <span className="req">*</span>
                  </label>
                  <input type="tel" id="orderPhone" name="orderPhone" required autoComplete="tel" placeholder="09xxxxxxxxx" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-field"><label htmlFor="orderContactWay">راه ارتباطی ترجیحی <span className="req">*</span></label><select id="orderContactWay" name="orderContactWay" required defaultValue=""><option value="" disabled>انتخاب کنید</option><option>تماس تلفنی</option><option>واتساپ</option><option>تلگرام</option><option>ایمیل</option></select></div>
                <div className="f-field"><label htmlFor="orderContactId">آیدی تلگرام / ایمیل (در صورت انتخاب)</label><input type="text" id="orderContactId" name="orderContactId" placeholder="مثلاً @username یا email@example.com" /></div>
              </div>

              <div className="f-field">
                <label htmlFor="orderProduct">
                  محصول موردنظر <span className="req">*</span>
                </label>
                <select id="orderProduct" name="orderProduct" required ref={selectRef} defaultValue="">
                  <option value="" disabled>
                    یک محصول را انتخاب کنید
                  </option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option>سایر / سفارش عمده</option>
                </select>
              </div>

              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="orderQty">تعداد</label>
                  <input type="text" id="orderQty" name="orderQty" placeholder="مثلاً ۱" inputMode="numeric" />
                </div>
                <div className="f-field">
                  <label htmlFor="orderCity">شهر</label>
                  <input type="text" id="orderCity" name="orderCity" autoComplete="address-level2" />
                </div>
              </div>

              <div className="f-field">
                <label htmlFor="orderAddress">
                  آدرس کامل پستی <span className="req">*</span>
                </label>
                <input type="text" id="orderAddress" name="orderAddress" required autoComplete="street-address" />
              </div>

              <div className="f-field">
                <label>روش پرداخت</label>
                <div className="f-radio-row">
                  <div className="f-radio-opt">
                    <input type="radio" id="payCod" name="orderPayment" value="پرداخت درب منزل" defaultChecked />
                    <label htmlFor="payCod">پرداخت درب منزل</label>
                  </div>
                  <div className="f-radio-opt">
                    <input type="radio" id="payOnline" name="orderPayment" value="واریز / کارت به کارت" />
                    <label htmlFor="payOnline">واریز / کارت به کارت</label>
                  </div>
                </div>
              </div>

              <div className="f-field">
                <label htmlFor="orderNote">توضیحات تکمیلی</label>
                <textarea id="orderNote" name="orderNote" placeholder="در صورت نیاز به توضیح بیشتر درباره‌ی سفارش..." />
              </div>

              <button type="submit" className="f-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "در حال ارسال..." : "ثبت سفارش"}
              </button>
              <p className="f-note">همکاران ما پس از ثبت، جهت تایید نهایی و هماهنگی ارسال با شما تماس خواهند گرفت.</p>

              {status === "error" && <div className="f-error">{errorMsg}</div>}
              <div className={`f-success ${status === "success" ? "show" : ""}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1E7A3D" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                <span>سفارش شما با موفقیت ثبت شد. به‌زودی با شما تماس می‌گیریم.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
