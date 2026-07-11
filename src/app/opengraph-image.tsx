import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Afzal \u2014 Software Engineer & CS Student";
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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(124,108,240,0.35), transparent 55%), radial-gradient(circle at 10% 85%, rgba(79,127,255,0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 999,
              backgroundColor: "#f3f3f6",
              color: "#08080b",
              fontSize: 24,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            AZ
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#8b8b96" }}>
            afzal.dev
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#f3f3f6",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Building software that helps people become more disciplined.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "#b5b5bf",
          }}
        >
          Afzal — Software Engineer &amp; CS Student
        </div>
      </div>
    ),
    { ...size }
  );
}
