import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
        />
      </head>
      <body>
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
