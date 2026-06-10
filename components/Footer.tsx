import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-brand-900">કાનૂનમિત્ર</h3>
          <p className="mt-3 text-sm text-gray-600">ગુજરાતી ભાષામાં સરળ અને પારદર્શક કાનૂની સેવાઓ.</p>
        </div>
        <div>
          <h4 className="font-semibold">લિંક્સ</h4>
          <div className="mt-3 grid gap-2 text-sm text-gray-600">
            <Link href="/services">સેવાઓ</Link><Link href="/pricing">કિંમત</Link><Link href="/contact">સંપર્ક</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">નોંધ</h4>
          <p className="mt-3 text-sm text-gray-600">આ વેબસાઇટ માત્ર માહિતી અને સેવા વિનંતી માટે છે. અંતિમ કાનૂની સલાહ માટે લાઇસન્સપ્રાપ્ત વકીલની સલાહ લો.</p>
        </div>
      </div>
    </footer>
  );
}
