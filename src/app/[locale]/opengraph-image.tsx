/* eslint-disable @next/next/no-img-element */
import { isLocale, DEFAULT_LOCALE } from "@/constants/locales";
import { getDictionary } from "@/dictionaries";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Eduardo Dadalt — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (path: string) => readFile(join(process.cwd(), "public", path));

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const [dictionary, picture, regular, extraBold] = await Promise.all([
    getDictionary(locale),
    asset("images/profile.png"),
    asset("font/JetBrainsMono-Regular.ttf"),
    asset("font/JetBrainsMono-ExtraBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#090c0a",
          color: "#cfdcd2",
          fontFamily: "JetBrains Mono",
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            border: "2px solid #1a241d",
            borderRadius: 20,
            background: "#0b0f0c",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              height: 64,
              padding: "0 28px",
              background: "#0d120f",
              borderBottom: "2px solid #1a241d",
              fontSize: 22,
              color: "#5f7366",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#f87171" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#fbbf24" }} />
            <div style={{ width: 16, height: 16, borderRadius: 8, background: "#4ade80" }} />
            <div style={{ marginLeft: 20, color: "#67e8f9" }}>M↓</div>
            <div style={{ color: "#f2fff5" }}>README.md</div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 48, padding: "0 64px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, color: "#4ade80" }}>{`// ${dictionary.readme.greeting}`}</div>
              <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#f2fff5", letterSpacing: -2, marginTop: 12 }}>
                Eduardo&nbsp;<span style={{ color: "#4ade80" }}>Dadalt</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 36, marginTop: 8 }}>
                {dictionary.profile.role}
                <div style={{ width: 18, height: 38, marginLeft: 14, background: "#4ade80" }} />
              </div>
            </div>
            <img
              src={`data:image/png;base64,${picture.toString("base64")}`}
              alt=""
              width={240}
              height={240}
              style={{ borderRadius: 24, border: "2px solid #1a241d", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: regular, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: extraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
