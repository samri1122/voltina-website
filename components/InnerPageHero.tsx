import Link from "next/link";

type InnerPageHeroProps = { eyebrow: string; title: string; description: string; action?: { href: string; label: string } };

export default function InnerPageHero({ eyebrow, title, description, action }: InnerPageHeroProps) {
  return <section className="inner-page-hero"><div className="wrap"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p>{action && <Link href={action.href} className="btn-primary">{action.label} ←</Link>}</div></section>;
}
