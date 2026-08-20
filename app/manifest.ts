import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Voltina Electronics",
    short_name: "Voltina",
    description: "تعمیر برد، طراحی پروژه الکترونیک و فروش قطعات در مشهد.",
    start_url: "/",
    display: "standalone",
    lang: "fa",
    dir: "rtl",
    theme_color: "#0b132b",
    background_color: "#0b132b",
  };
}
