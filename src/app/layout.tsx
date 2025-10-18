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
  title: "Quidhive - Payment Link for freelancer",
  description: "Request fund from your client and get USDC",
  alternates: {
    canonical: "https://quidhive.com",
  },
  // openGraph: {
  //   title: "Quidhive - Payment Link for freelancer",
  //   description: "Request fund from your client and get USDC",
  //   url: "https://quidhive.com",
  //   siteName: "Quidhive",
  //   images: [
  //     {
  //       url: "https://app.swifo.co/opengraph/opengraph.png",
  //       alt: "Swifo – Making Freelancers lives eaiser",
  //     },
  //   ],
  //   locale: "en_NG",
  //   type: "website",
  // },
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
