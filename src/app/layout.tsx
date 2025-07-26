import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Merriweather, Lato } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Writing & Poetry School",
  description:
    "Unleash your imagination through words — courses, workshops, and a poetic community await.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`}>
      <body className="bg-[#0d1325] text-white">
        {/* ✅ Navbar Always on Top */}
        <Navbar />

        {/* ✅ Give padding so content doesn't hide under Navbar */}
        <main className="pt-20">{children}</main>

        {/* ✅ Footer on all pages */}
         <Footer />
      </body>
    </html>
  );
}
