import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Review Pro",
  description: "100% Free Google Review Capture for Home Service Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
