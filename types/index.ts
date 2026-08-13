export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  cat: "module" | "board" | "psu" | "tool";
  catLabel: string;
  price: string;
  reviews: string;
  stock: "in" | "low";
  stockText: string;
  desc: string;
  specs: [string, string][];
  images: string[];
  badge?: "best" | "new";
}

export interface PortfolioProject {
  key: string;
  tag: string;
  title: string;
  challenge: string;
  action: string;
  result: string;
  image: string;
}

export interface Service {
  key: string;
  title: string;
  desc: string;
  list: string[];
  ctaText: string;
  ctaHref: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  context: string;
  quote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  bodyHtml: string;
}
