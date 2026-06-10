import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-extrabold text-brand-900">અમારી સેવાઓ</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">તમારી વ્યવસાયિક અને વ્યક્તિગત કાનૂની જરૂરિયાતો માટે સરળ, પારદર્શક અને ગુજરાતી ભાષામાં માર્ગદર્શન.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </div>
    </main>
  );
}
