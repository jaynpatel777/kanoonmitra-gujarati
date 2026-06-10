export function LeadForm() {
  return (
    <form className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-brand-900">મફત પ્રાથમિક માર્ગદર્શન મેળવો</h2>
      <div className="mt-6 grid gap-4">
        <input className="rounded-xl border px-4 py-3" placeholder="તમારું નામ" />
        <input className="rounded-xl border px-4 py-3" placeholder="મોબાઇલ નંબર" />
        <input className="rounded-xl border px-4 py-3" placeholder="ઈમેલ" />
        <select className="rounded-xl border px-4 py-3" defaultValue="">
          <option value="" disabled>સેવા પસંદ કરો</option>
          <option>વ્યવસાય નોંધણી</option>
          <option>ટ્રેડમાર્ક નોંધણી</option>
          <option>કાનૂની દસ્તાવેજો</option>
          <option>વકીલની સલાહ</option>
        </select>
        <textarea className="min-h-28 rounded-xl border px-4 py-3" placeholder="તમારી જરૂરિયાત વિશે લખો" />
        <button type="button" className="rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white hover:bg-brand-700">વિનંતી મોકલો</button>
      </div>
    </form>
  );
}
