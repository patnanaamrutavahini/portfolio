import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import TranslateBar from "@/components/TranslateBar";

export const metadata: Metadata = {
  title: "Jami Eswar Anil Kumar | Entrepreneur Portfolio",
  description: "Building human-centered organizations by marrying HR intelligence with AI-driven growth.",
  icons: {
    icon: "/Profile.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@700;900&family=Plus+Jakarta+Sans:wght@700;800&family=Space+Grotesk:wght@700&family=Syne:wght@800&family=Unbounded:wght@900&family=Noto+Sans:wght@400;500&family=Noto+Sans+Devanagari:wght@400;500&family=Noto+Sans+Telugu:wght@400;500&family=Noto+Sans+Tamil:wght@400;500&family=Noto+Sans+Bengali:wght@400;500&family=Noto+Sans+Kannada:wght@400;500&family=Noto+Sans+Malayalam:wght@400;500&family=Noto+Sans+Gujarati:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
        />
        <link rel="icon" href="/Profile.webp" type="image/webp" />
        <link rel="shortcut icon" href="/Profile.webp" />
      </head>
      <body>
        <CustomCursor />
        <TranslateBar />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
