import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { title: string; href: string; description: string; items?: string[] };

export function ServiceCard({ title, href, description, items = [] }: Props) {
  return (
    <Link href={href} className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-brand-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      {items.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {items.slice(0, 3).map((item) => <li key={item}>• {item}</li>)}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">વધુ જાણો <ArrowRight size={16} /></span>
    </Link>
  );
}
