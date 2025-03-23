import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Splash from "./components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Summer Collection | Trendy & Cool Essentials",
  description: "Shop the latest summer essentials, from stylish outfits to must-have accessories. Stay cool and trendy this summer with our exclusive collection!",
  openGraph: {
    title: "Summer Collection | Trendy & Cool Essentials",
    description: "Discover stylish summer outfits, beachwear, and accessories. Get ready for the season with our latest collection!",
    type: "website",
    images: [
      {
        url: "https://next-gsap-chi.vercel.app/OG-Image.jpg",
        width: 1200,
        height: 630,
        alt: "Trendy summer fashion and accessories",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico", // For regular favicon
    shortcut: "/favicon.ico", // Shortcut icon (optional)
    apple: "/apple-touch-icon.png", // Apple devices icon (optional)
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Splash/>
       <div className="opacity-0 animate-fade-in">{children}</div>
       <Analytics />
      </body>
    </html>
  );
}
