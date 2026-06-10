import { pricing } from "@/lib/data";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-brand-900">કિંમત</h1>
      <p className="mt-4 text-lg text-gray-600">તમારી જરૂરિયાત મુજબ યોજના પસંદ કરો.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <div key={plan.name} className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <p className="mt-4 text-4xl font-extrabold text-brand-700">{plan.price}</p>
            <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
          </div>
        ))}
      </div>
    </main>
  );
}
