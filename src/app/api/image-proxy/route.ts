import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    // Extract the target image URL from the request query parameters
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
        // Return an error if no URL was provided
        return new NextResponse("Missing image URL", { status: 400 });
    }

    try {
        // Fetch the image from the external source
        // 'arraybuffer' ensures we get the raw binary data instead of text
        const response = await axios.get(url, {
            responseType: "arraybuffer",
            headers: {
                // Adding a user agent helps prevent being blocked by some servers
                "User-Agent":
                    "Mozilla/5.0 (compatible; MyApp/1.0; +https://myapp.com)",
            },
        });

        // Get the content type (image/jpeg, image/png, etc.) from the response
        // Default to JPEG if content-type header is missing
        const contentType = response.headers["content-type"] || "image/jpeg";

        // Return the image data with appropriate headers
        return new NextResponse(response.data, {
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "public, max-age=86400", // Cache for 24 hours (86400 seconds)
            },
        });
    } catch (error) {
        // Log the error server-side and return a simple error to the client
        console.error("Image proxy error:", error as AxiosError);
        return new NextResponse("Failed to fetch image", { status: 500 });
    }
}
