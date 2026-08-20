"use client";

import { useState } from "react";
import { useFormSubmit } from "./useFormSubmit";

export default function RepairRequestForm() {
  const { status, errorMsg, handleSubmit } = useFormSubmit("/api/repair-request");
  const [fileName, setFileName] = useState("");

  return (
    <section
      className="form-section"
      id="repair-request"
      style={{ background: "var(--navy)", padding: "90px 0", position: "relative", overflow: "hidden" }}
    >
      <div
        className="glow"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          opacity: 0.5,
          width: 360,
          height: 360,
          top: -140,
          left: -100,
          background: "radial-gradient(circle,rgba(47,111,235,.5),transparent 70%)",
        }}
      />
      <div className="wrap" style={{ position: "relative" }}>
        <div className="sec-head reveal">
          <div className="sec-eyebrow" style={{ color: "var(--blue-light)" }}>
            ثبت درخواست
          </div>
          <h2 style={{ color: "#fff" }}>ثبت درخواست تعمیرات</h2>
          <p style={{ color: "#A9B3C7" }}>
            مشخصات دستگاه و مشکلی که باهاش مواجه هستید رو براتون بفرستید تا کارشناسان ما در کوتاه‌ترین زمان
            باهاتون تماس بگیرن.
          </p>
        </div>
        <div className="form-grid">
          <div className="form-card reveal">
            <div className="form-card-head">
              <div className="form-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.7}>
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                  <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                </svg>
              </div>
              <div>
                <h3>فرم ثبت درخواست تعمیر</h3>
                <p>برد صنعتی، منبع تغذیه، تجهیزات پزشکی و ...</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="repName">
                    نام و نام خانوادگی <span className="req">*</span>
                  </label>
                  <input type="text" id="repName" name="repName" required autoComplete="name" />
                </div>
                <div className="f-field">
                  <label htmlFor="repPhone">
                    شماره تماس <span className="req">*</span>
                  </label>
                  <input type="tel" id="repPhone" name="repPhone" required autoComplete="tel" placeholder="09xxxxxxxxx" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="repDeviceType">
                    نوع دستگاه <span className="req">*</span>
                  </label>
                  <select id="repDeviceType" name="repDeviceType" required defaultValue="">
                    <option value="" disabled>
                      انتخاب کنید
                    </option>
                    <option>برد کنترل یخچال / فریزر</option>
                    <option>منبع تغذیه سوئیچینگ</option>
                    <option>تجهیزات پزشکی</option>
                    <option>برد صنعتی / اتوماسیون</option>
                    <option>سیستم‌های کنترل روشنایی</option>
                    <option>سایر</option>
                  </select>
                </div>
                <div className="f-field">
                  <label htmlFor="repBrand">برند / مدل دستگاه</label>
                  <input type="text" id="repBrand" name="repBrand" placeholder="در صورت اطلاع" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-field"><label htmlFor="repContactWay">راه ارتباطی ترجیحی <span className="req">*</span></label><select id="repContactWay" name="repContactWay" required defaultValue=""><option value="" disabled>انتخاب کنید</option><option>تماس تلفنی</option><option>واتساپ</option><option>تلگرام</option><option>ایمیل</option></select></div>
                <div className="f-field"><label htmlFor="repContactId">آیدی تلگرام / ایمیل (در صورت انتخاب)</label><input type="text" id="repContactId" name="repContactId" placeholder="مثلاً @username یا email@example.com" /></div>
              </div>

              <div className="f-field">
                <label htmlFor="repDesc">
                  شرح مشکل <span className="req">*</span>
                </label>
                <textarea id="repDesc" name="repDesc" required placeholder="مشکل دستگاه رو با جزئیات توضیح بدید..." />
              </div>

              <div className="f-field file-field">
                <label>تصویر دستگاه یا برد (اختیاری)</label>
                <div className="file-drop">
                  برای انتخاب عکس کلیک کنید یا فایل را بکشید و رها کنید
                  <input
                    type="file"
                    id="repImage"
                    name="repImage"
                    accept="image/*"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </div>
                <div className="f-file-name">{fileName}</div>
              </div>

              <div className="f-field">
                <label htmlFor="repTime">بهترین زمان برای تماس</label>
                <select id="repTime" name="repTime" defaultValue="">
                  <option value="">فرقی نمی‌کند</option>
                  <option>صبح (۹ تا ۱۲)</option>
                  <option>ظهر (۱۲ تا ۱۵)</option>
                  <option>عصر (۱۵ تا ۱۸)</option>
                </select>
              </div>

              <button type="submit" className="f-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "در حال ارسال..." : "ثبت درخواست تعمیر"}
              </button>
              <p className="f-note">پس از ثبت، کارشناسان Voltina درخواست شما را بررسی و در اسرع وقت تماس می‌گیرند.</p>

              {status === "error" && <div className="f-error">{errorMsg}</div>}
              <div className={`f-success ${status === "success" ? "show" : ""}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1E7A3D" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                <span>درخواست تعمیر شما ثبت شد. به‌زودی با شما تماس می‌گیریم.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
