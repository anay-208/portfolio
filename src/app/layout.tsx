import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] } );





const oswald = Oswald({ subsets: ["latin"], variable: "--font-default"  });
// For variable font
const fonts = [oswald]





export const metadata: Metadata = {
  title: "Anay",
  description: "Anay's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts.map(font => font.variable)} ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
