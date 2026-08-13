"use client";

import { useState } from "react";
import SafeImage from "./SafeImage";
import { products } from "@/data/products";
import { useModal } from "./ModalProvider";
import { Product } from "@/types";

const FILTERS: { key: Product["cat"] | "all"; label: string }[] = [
  { key: "all", label: "همه محصولات" }, { key: "module", label: "ماژول‌ها" }, { key: "board", label: "برد کنترل" }, { key: "psu", label: "منبع تغذیه" }, { key: "tool", label: "ابزار و تجهیزات" },
];

const STAR = <svg viewBox="0 0 20 20"><path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9 4.4 18l1.4-6.2L1 7.5l6.4-.6z" /></svg>;

export default function ShopSection() {
  const [filter, setFilter] = useState<Product["cat"] | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const { openProductModal } = useModal();
  const filtered = filter === "all" ? products : products.filter((product) => product.cat === filter);
  const visible = showAll ? filtered : filtered.slice(0, 8);

  return <section className="light" id="shop"><div className="wrap">
    <div className="sec-head reveal"><div className="sec-eyebrow">فروشگاه</div><h2>قطعات پرکاربرد، انتخاب سریع‌تر</h2><p>محصول مناسب را از دسته‌بندی‌ها پیدا کنید، جزئیات را ببینید و برای سفارش یا استعلام با ما در ارتباط باشید.</p></div>
    <div className="shop-filters">{FILTERS.map((item) => <button key={item.key} className={`filter-pill ${filter === item.key ? "active" : ""}`} onClick={() => { setFilter(item.key); setShowAll(false); }}>{item.label}</button>)}</div>
    <div className="shop-grid">{visible.map((product) => <article className="shop-card" key={product.slug} data-cat={product.cat}>
      <div className="shop-thumb"><span className="shop-badge">{product.stock === "in" ? "موجود" : "کمیاب"}</span><SafeImage src={product.images[0]} alt={product.name} width={640} height={430} /></div>
      <div className="shop-body"><span className="shop-cat">{product.catLabel}</span><h4 className="shop-view-details" onClick={() => openProductModal(product)}>{product.name}</h4><div className="shop-rating">{STAR}{STAR}{STAR}{STAR}{STAR}<span>({product.reviews})</span></div><span className={`stock-status ${product.stock === "in" ? "in-stock" : "low-stock"}`}>{product.stockText}</span><div className="shop-foot"><div className="shop-price-wrap"><span className="shop-price">{product.price}<span>تومان</span></span></div><a href="#order-form" className="add-cart-btn">افزودن</a></div></div>
    </article>)}</div>
    <div className="shop-more">{filtered.length > 8 && !showAll ? <button className="shop-more-btn" onClick={() => setShowAll(true)}>مشاهده همه محصولات ({filtered.length})</button> : <a href="#order-form" className="shop-more-btn">سفارش عمده یا قطعهٔ موردنظر</a>}</div>
  </div></section>;
}
