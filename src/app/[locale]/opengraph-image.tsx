/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/dictionaries/dictionaries";
import { ImageResponse } from "next/og";
export const alt = "Hello, I'm Eduardo Dadalt 👋🏻";
export const size = {
  width: 1200,
  height: 630,
};
export const runtime = "edge";

export const contentType = "image/png";

export default async function OpenGraphImage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dictionary = await getDictionary(locale);

  const [profilePic, montserratNormal, montserratBlack] = await Promise.all([
    fetch(new URL("../../../public/images/profile.png", import.meta.url))
      .then((res) => res.arrayBuffer())
      .then((res) => Buffer.from(res).toString("base64").toString()),
    fetch(
      new URL("../../../public/font/Montserrat-Regular.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL("../../../public/font/Montserrat-Black.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
          width: size.width,
          height: size.height,
          background:
            "linear-gradient(to bottom right, #4338ca 0%, #3b82f6 100%)",
          fontSize: "2rem",
          color: "white",
          textShadow: "1px 1px 10px black",
          fontWeight: 400,
        }}
      >
        <img
          src={`data:image/png;base64,${profilePic}`}
          alt="Minha imagem"
          width={300}
          height={300}
          style={{
            borderRadius: "50%",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{dictionary.homepage.myInfo.hiMyNameIs} </span>
          <span
            style={{
              fontWeight: 900,
              fontSize: "5rem",
            }}
          >
            Eduardo Dadalt 👋🏻
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: montserratNormal,
          style: "normal",
          weight: 400,
        },
        {
          name: "Montserrat",
          data: montserratBlack,
          style: "normal",
          weight: 900,
        },
      ],
    },
  );
}
