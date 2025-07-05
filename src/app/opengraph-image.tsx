import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "logo.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc} height="100" />
      </div>
    ),
  );
}
