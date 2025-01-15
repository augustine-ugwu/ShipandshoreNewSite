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
  description:
    "Step into the world of seamless logistics and efficient transportation with our comprehensive range of maritime services. We provide and charter vessels for the coastal transportation of petroleum products, crude oil, and its derivatives, ensuring timely and reliable delivery of your cargo.",
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
