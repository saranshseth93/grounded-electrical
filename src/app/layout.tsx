import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Grounded Electrical — Melbourne Northern Suburbs Electrician | No Call-Out Fee",
  description:
    "Licensed electrician servicing Wollert, Epping, South Morang & Craigieburn. Powerpoints, switchboard upgrades, LED lighting, safety inspections. Same-day service. No call-out fee.",
  openGraph: {
    title: "Grounded Electrical — Your Local Sparkie",
    description:
      "Licensed electrical work for Melbourne's northern suburbs. No call-out fee. Same-day service available.",
    type: "website",
  },
  metadataBase: new URL("https://groundedelectrical.com.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
