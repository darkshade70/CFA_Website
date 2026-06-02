import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Canadian Fencing Academy — Oakville",
    template: "%s | Canadian Fencing Academy",
  },
  description:
    "Oakville's home for Olympic-style fencing. Foil, Épée, Sabre, and Historical fencing for youth and adults. All levels welcome.",
  openGraph: {
    siteName: "Canadian Fencing Academy",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
