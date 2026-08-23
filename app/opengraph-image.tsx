import { ImageResponse } from "next/og";
import { BUSINESS_NAME, TAGLINE } from "@/lib/business";

export const alt = `${BUSINESS_NAME} - ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #fff8f3 0%, #f9ecde 100%)",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: 14,
            color: "#735c00",
          }}
        >
          SHALALA
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 10,
            color: "#4d4635",
            marginTop: 8,
          }}
        >
          NAIL BAR
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#71585b",
            marginTop: 44,
          }}
        >
          {TAGLINE}
        </div>
      </div>
    ),
    { ...size },
  );
}
