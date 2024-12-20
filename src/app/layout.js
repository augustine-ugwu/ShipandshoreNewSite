import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google"; // Import for Bebas Neue
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Your App Name",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-gray-50 text-gray-800`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
