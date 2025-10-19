import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quidhive - Payment Link for freelancers with Onchain escrow (Hive)",
  description:
    "Easily request payments from your clients and receive USDC—the most trusted and regulation-compliant stablecoin—directly on Base, a fast, low-cost, and scalable blockchain network. This gives you quick access to secure digital dollars without delays, high fees, or cross-border complications.",
  alternates: {
    canonical: "https://quidhive.com",
  },
  openGraph: {
    title: "Quidhive - Payment Link for freelancers with Onchain escrow (Hive)",
    description:
      "Easily request payments from your clients and receive USDC—the most trusted and regulation-compliant stablecoin—directly on Base, a fast, low-cost, and scalable blockchain network. This gives you quick access to secure digital dollars without delays, high fees, or cross-border complications.",
    url: "https://quidhive.com",
    siteName: "Quidhive",
    images: [
      {
        url: "https://res.cloudinary.com/dnmvjjnbl/image/upload/v1760833465/opengraphh_r1cek7.png",
        alt: "Quidhive - Payment Link for freelancer with Onchain escrow (Hive)",
      },
    ],
  },
  twitter: {
    title: "Quidhive - Payment Link for freelancers with Onchain escrow (Hive)",
    description:
      "Easily request payments from your clients and receive USDC—the most trusted and regulation-compliant stablecoin—directly on Base, a fast, low-cost, and scalable blockchain network. This gives you quick access to secure digital dollars without delays, high fees, or cross-border complications.",
    card: "summary_large_image",
    images: [
      {
        url: "https://res.cloudinary.com/dnmvjjnbl/image/upload/v1760833465/og_qpbq6l.png",
        alt: "Quidhive - Payment Link for freelancer with Onchain escrow (Hive)",
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
