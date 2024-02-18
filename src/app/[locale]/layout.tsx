import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { LOCALES } from "@/constants/locales";
import { Analytics } from "@vercel/analytics/react";

const FontDisplay = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
});

const FontBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
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
