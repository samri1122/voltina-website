"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useModal } from "./ModalProvider";

export default function ModalRoot() {
  const { modal, closeModal, setPrefillOrderProduct } = useModal();
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  useEffect(() => {
    setActiveImgIdx(0);
  }, [modal]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = modal ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modal, closeModal]);

  if (!modal) return null;

  const overlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // ---- Product modal ----
  if (modal.type === "product") {
    const p = modal.data;
    return (
      <div className="product-modal-overlay show" onClick={overlayClick}>
        <div className="product-modal">
          <button className="product-modal-close" onClick={closeModal} aria-label="بستن">
            &times;
          </button>
          <div className="product-modal-body">
            <div className="product-modal-img">
              <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 280 }}>
                <Image
                  src={p.images[activeImgIdx]}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 700px) 100vw, 400px"
                />
              </div>
              {p.images.length > 1 && (
                <div className="pm-gallery-thumbs">
                  {p.images.map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`تصویر ${i + 1}`}
                      width={56}
                      height={56}
                      className={i === activeImgIdx ? "active" : ""}
                      onClick={() => setActiveImgIdx(i)}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="product-modal-info">
              <span className="shop-cat">{p.catLabel}</span>
              <h3>{p.name}</h3>
              <div className="product-modal-price">
                {p.price}
                <span>تومان</span>
              </div>
              <p className="product-modal-desc">{p.desc}</p>
              <table className="product-modal-specs">
                <tbody>
                  {p.specs.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="product-modal-note">
                مشخصات فوق نمونه است — پیش از تحویل، مشخصات دقیق را با کارشناسان Voltina یا از طریق چت واتساپ تأیید کنید.
              </p>
              <a
                href="/shop#order-form"
                className="f-submit"
                style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}
                onClick={() => {
                  setPrefillOrderProduct(p.name);
                  closeModal();
                }}
              >
                ثبت سفارش این محصول
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---- Service modal ----
  if (modal.type === "service") {
    const s = modal.data;
    const isExternal = s.ctaHref.startsWith("http");
    return (
      <div className="product-modal-overlay show" onClick={overlayClick}>
        <div className="product-modal service-modal">
          <button className="product-modal-close" onClick={closeModal} aria-label="بستن">
            &times;
          </button>
          <div className="service-modal-body">
            <div className="service-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
                <path d={s.icon} />
              </svg>
            </div>
            <h3>{s.title}</h3>
            <p className="product-modal-desc">{s.desc}</p>
            <h4 className="service-modal-subhead">شامل چه مواردی می‌شود</h4>
            <ul className="service-modal-list">
              {s.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={s.ctaHref}
              className="f-submit"
              style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener" : undefined}
              onClick={closeModal}
            >
              {s.ctaText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ---- Project case-study modal ----
  const proj = modal.data;
  return (
    <div className="product-modal-overlay show" onClick={overlayClick}>
      <div className="product-modal">
        <button className="product-modal-close" onClick={closeModal} aria-label="بستن">
          &times;
        </button>
        <div className="product-modal-body">
          <div className="product-modal-img">
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 280 }}>
              <Image src={proj.image} alt={proj.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 700px) 100vw, 400px" />
            </div>
          </div>
          <div className="product-modal-info">
            <span className="shop-cat">{proj.tag}</span>
            <h3>{proj.title}</h3>
            <h4 className="service-modal-subhead">چالش</h4>
            <p className="product-modal-desc">{proj.challenge}</p>
            <h4 className="service-modal-subhead">اقدام ما</h4>
            <p className="product-modal-desc">{proj.action}</p>
            <h4 className="service-modal-subhead">نتیجه</h4>
            <p className="product-modal-desc">{proj.result}</p>
            <a
              href="#custom-project"
              className="f-submit"
              style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}
              onClick={closeModal}
            >
              درخواست ساخت پروژه مشابه
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
