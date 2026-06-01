/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import { pick } from "@/lib/localized";

export const alt = "Eduardo Dadalt — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  try {
    const { locale } = await params;
    const t = getMessages(locale);

    const [profilePic, montserrat] = await Promise.all([
      fetch(new URL("../../../public/images/profile.png", import.meta.url))
        .then((res) => res.arrayBuffer())
        .then((res) => Buffer.from(res).toString("base64")),
      fetch(
        new URL("../../../public/font/Montserrat-Regular.ttf", import.meta.url),
      ).then((res) => res.arrayBuffer()),
    ]);

    const dot = (color: string) => ({
      width: 16,
      height: 16,
      borderRadius: 999,
      background: color,
    });

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: size.width,
            height: size.height,
            padding: 56,
            background: "#0d1117",
            fontFamily: "Montserrat",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              borderRadius: 24,
              border: "1px solid #2a313c",
              background: "#161b22",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                height: 64,
                padding: "0 28",
                background: "#21262d",
              }}
            >
              <div style={dot("#ff5f57")} />
              <div style={dot("#febc2e")} />
              <div style={dot("#28c840")} />
              <span style={{ marginLeft: 16, color: "#8b949e", fontSize: 26 }}>
                eduardo@portfolio: ~
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
                padding: 56,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#3fb950", fontSize: 30 }}>$ whoami</span>
                <span style={{ marginTop: 16, color: "#8b949e", fontSize: 30 }}>
                  {t.hero.greeting}
                </span>
                <span
                  style={{ color: "#e6edf3", fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}
                >
                  {profile.name}
                </span>
                <span style={{ marginTop: 8, color: "#818cf8", fontSize: 40 }}>
                  &gt; {pick(profile.role, locale)}
                </span>
                <span style={{ marginTop: 28, color: "#8b949e", fontSize: 28 }}>
                  {profile.site}
                </span>
              </div>

              <img
                src={`data:image/png;base64,${profilePic}`}
                alt={profile.name}
                width={260}
                height={260}
                style={{
                  borderRadius: 28,
                  border: "2px solid #2a313c",
                }}
              />
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Montserrat",
            data: montserrat,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (error) {
    return new Response(`Failed to generate image: ${String(error)}`, {
      status: 500,
    });
  }
}
