import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { LOCALES } from "@/constants/locales";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const FontDisplay = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

const FontBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduardodadalt.com"),
};

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          FontBody.variable,
          FontDisplay.variable,
          FontBody.className,
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
