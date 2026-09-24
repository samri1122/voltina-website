"use client";

import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import { projectShowcase } from "@/data/project-showcase";

const projects = projectShowcase.slice(0, 8);

export default function HeroProjectTicker() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => setCurrent((value) => (value + 1) % projects.length), 3600);
    return () => window.clearInterval(interval);
  }, []);
  const project = projects[current];
  return <a href="/projects" className="hero-project-ticker" aria-label={`مشاهده ${project.title}`}>
    <SafeImage key={project.key} src={project.image} alt={project.title} width={300} height={168} />
    <span><small>نمونه‌پروژه‌های Voltina</small><b>{project.title}</b><em>{project.tag} ←</em></span>
  </a>;
}
