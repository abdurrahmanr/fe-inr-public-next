import type { Metadata } from "next";
import "./globals.css";
import Nav from "./_components/navigation";
import Providers from "./providers";
import { Poppins } from "next/font/google";
import Footer from "./_components/footer";
import "react-quill-new/dist/quill.snow.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: { template: "%s | Inready Workgroup", default: "Inready Workgroup" },
    description: "Study Club IT UIN Alauddin Makassar",
    openGraph: {
        siteName: "Inready Workgroup",
        title: {
            template: "%s | Inready Workgroup",
            default: "Inready Workgroup",
        },
        description: "Study Club IT UIN Alauddin Makassar",
        type: "website",
        locale: "id_ID",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.className}>
            <body className="min-h-dvh flex flex-col">
                <Nav />
                <Providers>
                    <div className="pt-[80px] flex-1">{children}</div>
                </Providers>
                <Footer />
            </body>
        </html>
    );
}
