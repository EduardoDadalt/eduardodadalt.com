import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "./constants/locales";

/**
 * Picks the best supported locale from the request's `Accept-Language`
 * header, falling back to {@link DEFAULT_LOCALE}. Small hand-rolled parser
 * so we don't pull in `negotiator` + `intl-localematcher` just for this.
 */
function getLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return {
        base: tag.split("-")[0].toLowerCase(),
        quality: q ? Number.parseFloat(q.slice(2)) || 0 : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  const match = ranked.find((lang) =>
    (LOCALES as readonly string[]).includes(lang.base),
  );

  return (match?.base as Locale) ?? DEFAULT_LOCALE;
}

/** Next 16 proxy (formerly `middleware`): locale-prefix redirect. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|icons|images|font|favicon.ico).*)"],
};
