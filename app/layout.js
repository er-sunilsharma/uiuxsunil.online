import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer, Header, DisableInspect } from "@/comps/common";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfits = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Sunil Sharma | Senior UI/UX Designer & UI Developer",
  description:
    "Senior UI/UX Designer with 8+ years of experience crafting intuitive web, mobile apps, and dashboard experiences. Specialized in user research, Figma prototyping, design systems, and frontend UI development using Webflow, HTML, CSS, and JavaScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="favicon.png" sizes="any" />
      </head>
      <body className={outfits.className}>
        <DisableInspect />
        <SpeedInsights />
        <Header />
        <div className="pt-[64.45px] sm:pt-[72px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
