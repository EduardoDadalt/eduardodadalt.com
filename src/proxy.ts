import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./constants/locales";

function getLocale(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? undefined,
  };
  const languages = new Negotiator({ headers }).languages([...LOCALES]);
  return match(languages, LOCALES, DEFAULT_LOCALE);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Ignora rotas internas e arquivos estáticos (qualquer caminho com extensão).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
