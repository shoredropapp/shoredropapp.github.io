import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "ShoreDrop — Beach Day Delivery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #083b6c 0%, #1e7eb6 50%, #bbefff 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.02em" }}>
          ShoreDrop
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            marginTop: 16,
            opacity: 0.95,
          }}
        >
          Beach Day Delivery
        </div>
      </div>
    ),
    { ...size },
  );
}
