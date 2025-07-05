import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="logo.png" height="100" />
      </div>
    ),
  );
}
