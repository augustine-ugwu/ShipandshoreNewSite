import { Roboto } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "../styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "SHIPANDSHORE",
  description: "Your App Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bebasNeue.variable} antialiased bg-gray-50 text-gray-800`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
