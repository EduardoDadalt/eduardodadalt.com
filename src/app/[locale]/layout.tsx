import "@/app/globals.css";
import ActivityBar from "@/components/ide/activity-bar";
import EditorTabs from "@/components/ide/editor-tabs";
import Explorer from "@/components/ide/explorer";
import StatusBar from "@/components/ide/status-bar";
import TerminalPanel from "@/components/ide/terminal-panel";
import { isLocale, LOCALES } from "@/constants/locales";
import { SITE_URL } from "@/content/links";
import { getDictionary } from "@/dictionaries";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#090c0a",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dictionary = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dictionary.metadata.title,
      template: `%s · Eduardo Dadalt`,
    },
    description: dictionary.metadata.description,
    openGraph: { siteName: "Eduardo Dadalt", type: "website", locale },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);
  const { ui, profile, files } = dictionary;

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"} className={jetbrainsMono.variable}>
      <body>
        <div className="grid h-dvh grid-cols-1 grid-rows-[1fr_24px] md:grid-cols-[50px_250px_1fr]">
          <ActivityBar locale={locale} switchLabel={ui.switchLanguage} />
          <Explorer
            locale={locale}
            fileNames={files}
            title={ui.explorer}
            role={profile.role}
            location={profile.location}
            available={ui.available}
          />
          <div className="grid min-h-0 min-w-0 grid-rows-[38px_1fr] bg-editor md:grid-rows-[38px_1fr_170px]">
            <EditorTabs locale={locale} fileNames={files} closeLabel={ui.closeTab} />
            <main className="min-h-0 overflow-auto">{children}</main>
            <TerminalPanel dictionary={dictionary} />
          </div>
          <StatusBar available={ui.available} localeLabel={locale === "pt" ? "pt-BR" : "en"} />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
