import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3A2A21",
          color: "#C08A2E",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        {siteConfig.initials}
      </div>
    ),
    {
      ...size,
    },
  );
}
