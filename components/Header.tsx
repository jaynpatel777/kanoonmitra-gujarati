import Link from "next/link";

const nav = [
  ["સેવાઓ", "/services"],
  ["કિંમત", "/pricing"],
  ["સંપર્ક", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-brand-900">કાનૂનમિત્ર</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-gray-700 hover:text-brand-700">{label}</Link>)}
        </nav>
        <Link href="/contact" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">શરૂઆત કરો</Link>
      </div>
    </header>
  );
}
