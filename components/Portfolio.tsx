"use client";

import SafeImage from "./SafeImage";
import { portfolioProjects } from "@/data/portfolio";
import { useModal } from "./ModalProvider";

export default function Portfolio() {
  const { openProjectModal } = useModal();

  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-eyebrow">نمونه کارها</div>
          <h2>پروژه‌های موفق انجام‌شده</h2>
          <p>بخشی از پروژه‌هایی که تیم فنی Voltina طراحی، تعمیر یا پیاده‌سازی کرده است.</p>
        </div>

        <div className="portfolio-grid">
          {portfolioProjects.map((proj) => (
            <div className="pf-card" key={proj.key}>
              <div className="pf-thumb">
                <span className="pf-tag">{proj.tag}</span>
                <SafeImage src={proj.image} alt={proj.title} width={720} height={460} />
              </div>
              <div className="pf-body">
                <h4>{proj.title}</h4>
                <p>{proj.challenge}</p>
                <a href="#portfolio" className="pf-link" onClick={() => openProjectModal(proj)}>
                  مشاهده پروژه ←
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
