"use client";

import { useState } from "react";
import { useFormSubmit } from "./useFormSubmit";

export default function CustomProjectForm() {
  const { status, errorMsg, handleSubmit } = useFormSubmit("/api/custom-project");
  const [fileName, setFileName] = useState("");

  return (
    <section className="form-section custom-project-section" id="custom-project">
      <div className="glow" />
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="cp-badge">خدمت ویژه Voltina</span>
          <h2 style={{ color: "#fff" }}>پروژه‌ات رو برامون تعریف کن، ما می‌سازیمش</h2>
          <p style={{ color: "#A9B3C7" }}>
            از طراحی PCB و پروژه‌های دانشجویی گرفته تا نمونه‌سازی و اتوماسیون صنعتی — ایده یا نیازت رو شرح بده تا
            تیم فنی Voltina براش برنامه و برآورد قیمت ارائه بده.
          </p>
        </div>
        <div className="form-grid">
          <div className="form-card reveal">
            <div className="form-card-head">
              <div className="form-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.7}>
                  <path d="M12 2l2.9 6.3 6.9.9-5 4.8 1.2 6.9-6-3.3-6 3.3 1.2-6.9-5-4.8 6.9-.9z" />
                </svg>
              </div>
              <div>
                <h3>فرم درخواست ساخت پروژه</h3>
                <p>طراحی، ساخت و توسعه‌ی پروژه‌ی الکترونیکی اختصاصی شما</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="projName">
                    نام و نام خانوادگی <span className="req">*</span>
                  </label>
                  <input type="text" id="projName" name="projName" required autoComplete="name" />
                </div>
                <div className="f-field">
                  <label htmlFor="projPhone">
                    شماره تماس <span className="req">*</span>
                  </label>
                  <input type="tel" id="projPhone" name="projPhone" required autoComplete="tel" placeholder="09xxxxxxxxx" />
                </div>
              </div>

              <div className="f-row">
                <div className="f-field">
                  <label htmlFor="projType">
                    نوع پروژه <span className="req">*</span>
                  </label>
                  <select id="projType" name="projType" required defaultValue="">
                    <option value="" disabled>
                      انتخاب کنید
                    </option>
                    <option>طراحی و ساخت PCB</option>
                    <option>پروژه دانشجویی / آموزشی</option>
                    <option>نمونه‌سازی و پروتوتایپ (Prototype)</option>
                    <option>اتوماسیون صنعتی</option>
                    <option>سیستم‌های کنترل هوشمند / IoT</option>
                    <option>سایر</option>
                  </select>
                </div>
                <div className="f-field">
                  <label htmlFor="projBudget">بودجه تقریبی</label>
                  <select id="projBudget" name="projBudget" defaultValue="">
                    <option value="">ترجیح می‌دهم مشورت بگیرم</option>
                    <option>زیر ۵ میلیون تومان</option>
                    <option>۵ تا ۲۰ میلیون تومان</option>
                    <option>۲۰ تا ۵۰ میلیون تومان</option>
                    <option>بالای ۵۰ میلیون تومان</option>
                  </select>
                </div>
              </div>

              <div className="f-field">
                <label htmlFor="projDesc">
                  شرح کامل پروژه <span className="req">*</span>
                </label>
                <textarea
                  id="projDesc"
                  name="projDesc"
                  required
                  placeholder="هدف پروژه، امکانات موردنیاز، مهلت تحویل و هر جزئیات دیگری که کمک می‌کنه..."
                />
              </div>

              <div className="f-field file-field">
                <label>نقشه، طرح یا مستندات (اختیاری)</label>
                <div className="file-drop">
                  برای انتخاب فایل کلیک کنید یا فایل را بکشید و رها کنید
                  <input
                    type="file"
                    id="projFile"
                    name="projFile"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </div>
                <div className="f-file-name">{fileName}</div>
              </div>

              <button type="submit" className="f-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "در حال ارسال..." : "ثبت درخواست پروژه"}
              </button>
              <p className="f-note">تیم فنی Voltina پس از بررسی، برای مشاوره و برآورد قیمت با شما تماس می‌گیرد.</p>

              {status === "error" && <div className="f-error">{errorMsg}</div>}
              <div className={`f-success ${status === "success" ? "show" : ""}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1E7A3D" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                <span>درخواست پروژه شما ثبت شد. به‌زودی برای مشاوره با شما تماس می‌گیریم.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
