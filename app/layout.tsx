import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "台客在清邁｜房產・美食・旅遊・生活",
  description: "台客分享清邁房產、美食、旅遊與在地生活資訊。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
