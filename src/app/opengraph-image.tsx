import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Afzalxon \u2014 Software Engineer & CS Student";
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
          backgroundColor: "#0b0e10",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(198,138,70,0.28), transparent 55%), radial-gradient(circle at 10% 85%, rgba(111,156,135,0.18), transparent 55%)",
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
              backgroundColor: "#f2efe9",
              color: "#0b0e10",
              fontSize: 24,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            AZ
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#78878a" }}>
            afzal.dev
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#f2efe9",
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
            color: "#a7b1b0",
          }}
        >
          Afzalxon — Software Engineer &amp; CS Student
        </div>
      </div>
    ),
    { ...size }
  );
}
