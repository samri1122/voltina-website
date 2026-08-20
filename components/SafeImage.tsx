"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = { src: string; alt: string; width: number; height: number; className?: string };

export default function SafeImage({ src, alt, width, height, className }: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  return <Image src={imageSrc} alt={alt} width={width} height={height} className={className} onError={() => setImageSrc("/images/blog/cover-1.jpg")} />;
}
