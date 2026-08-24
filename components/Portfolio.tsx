"use client";

import { useState } from "react";
import SafeImage from "./SafeImage";
import { portfolioProjects } from "@/data/portfolio";
import { projectShowcase } from "@/data/project-showcase";
import { useModal } from "./ModalProvider";

export default function Portfolio() {
  const { openProjectModal } = useModal();
  const [shown, setShown] = useState(6);
  const projects = [...portfolioProjects, ...projectShowcase];

  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-eyebrow">نمونه کارها</div>
          <h2>نمونه‌پروژه‌های طراحی و اجرا</h2>
          <p>پروژه‌های منتخب و نمونه‌های اجرایی برای STM32، ESP32، اتوماسیون صنعتی، تجهیزات پزشکی و طراحی PCB.</p>
        </div>

        <div className="portfolio-grid">
          {projects.slice(0, shown).map((proj) => (
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
        {shown < projects.length && <div className="portfolio-more"><button type="button" onClick={() => setShown((value) => Math.min(value + 6, projects.length))}>نمایش پروژه‌های بیشتر <span>←</span></button><small>{shown} از {projects.length} پروژه</small></div>}
      </div>
    </section>
  );
}
