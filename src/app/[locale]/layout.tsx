import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/main.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D-qt Music",
  description: "Musician, Producer, Session Guitarist",
};

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode
  params: {locale: string}
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
