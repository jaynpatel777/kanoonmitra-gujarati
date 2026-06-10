import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { services, pricing } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-brand-50 to-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-brand-700">ગુજરાતી કાનૂની સેવાઓ</p>
            <h1 className="text-4xl font-extrabold leading-tight text-brand-900 md:text-6xl">તમારી કાનૂની જરૂરિયાતો માટે એક સરળ ઓનલાઈન પ્લેટફોર્મ</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">કંપની નોંધણી, ટ્રેડમાર્ક, કરાર, વસિયતનામું અને વકીલની સલાહ — હવે બધું સરળ ગુજરાતી ભાષામાં.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-brand-600 px-7 py-3 font-semibold text-white hover:bg-brand-700">સેવા શરૂ કરો</Link>
              <Link href="/services" className="rounded-full border border-brand-600 px-7 py-3 font-semibold text-brand-700">સેવાઓ જુઓ</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            {["સરળ ગુજરાતી પ્રક્રિયા", "પારદર્શક કિંમત", "દસ્તાવેજ ચેકલિસ્ટ", "નિષ્ણાત માર્ગદર્શન"].map((item) => (
              <div key={item} className="mb-5 flex items-center gap-3 text-gray-700"><CheckCircle2 className="text-brand-600" /> {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-brand-900">લોકપ્રિય સેવાઓ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-brand-900">કિંમત યોજના</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div key={plan.name} className="rounded-3xl border bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-4xl font-extrabold text-brand-700">{plan.price}</p>
                <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-gray-700">{plan.features.map((f) => <li key={f}>• {f}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
