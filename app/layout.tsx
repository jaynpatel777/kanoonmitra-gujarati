import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "કાનૂનમિત્ર - ગુજરાતી કાનૂની સેવાઓ",
  description: "વ્યવસાય નોંધણી, ટ્રેડમાર્ક, કાનૂની દસ્તાવેજો અને વકીલ સલાહ માટે ગુજરાતી પ્લેટફોર્મ."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="gu">
      <body className="font-sans text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
