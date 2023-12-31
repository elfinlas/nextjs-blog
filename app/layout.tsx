import "./styles/globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Next.Js Blog",
    description: "Blog",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ko">
            <body className="bg-emerald-50/25">{children}</body>
        </html>
    );
}
