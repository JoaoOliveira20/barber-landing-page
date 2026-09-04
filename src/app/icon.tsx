import { ImageResponse } from "next/og";

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
          backgroundColor: "#14293F",
          color: "#C0342B",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        BK
      </div>
    ),
    {
      ...size,
    },
  );
}
