import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MyoMentia",
  description: "Movement. Pelvic Health. Neuroscience.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#000000", margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
