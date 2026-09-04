import { ImageResponse } from "next/og";

import { heroContent } from "@/config/content";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          backgroundColor: "#14293F",
          color: "#EDE6D6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              border: "3px solid #C0342B",
              color: "#C0342B",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            BK
          </div>
          <div
            style={{
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: "980px",
          }}
        >
          {heroContent.titleLines.join(" ")}
        </div>

        <div
          style={{
            marginTop: "32px",
            fontSize: "26px",
            color: "#c2c0b9",
            maxWidth: "820px",
            lineHeight: 1.5,
          }}
        >
          {heroContent.subtitle}
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#C0342B",
          }}
        >
          <div
            style={{ width: "48px", height: "3px", backgroundColor: "#C0342B" }}
          />
          {heroContent.primaryCtaLabel}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
