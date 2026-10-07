import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://taike-chiangmai.vercel.app"),
  title: "台客在清邁｜房產・美食・旅遊・生活",
  description: "台客分享清邁房產、美食、旅遊與在地生活資訊。",
  openGraph: { siteName: "台客在清邁", locale: "zh_TW", type: "website", images: ["/images/hero/hero-v1.jpg"] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
