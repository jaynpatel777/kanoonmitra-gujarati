import { LeadForm } from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold text-brand-900">સંપર્ક કરો</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">તમારી જરૂરિયાત મોકલો. અમારી ટીમ તમને આગળની પ્રક્રિયા, અંદાજિત સમય અને જરૂરી દસ્તાવેજો વિશે માર્ગદર્શન આપશે.</p>
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <p><strong>ઈમેલ:</strong> hello@kanoonmitra.example</p>
            <p className="mt-3"><strong>સમય:</strong> સોમવારથી શનિવાર, સવારે 10 થી સાંજે 6</p>
          </div>
        </div>
        <LeadForm />
      </div>
    </main>
  );
}
