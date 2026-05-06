import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viktor Lin | Senior Software Engineer",
  description:
    "Portfolio of Viktor Lin, Senior Software Engineer specializing in full-stack engineering, AI platforms, RAG systems, data pipelines, and cloud architecture."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
