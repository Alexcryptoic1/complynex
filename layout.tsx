import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complynex",
  description: "AI workforce certification and compliance system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
