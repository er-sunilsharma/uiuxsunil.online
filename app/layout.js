import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/comps/common";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sunil Sharma | UI/UX DESIGNER PROJECT PORTFOLIO SHOWCASE",
  description:
    "Sr. UI/UX Designer, Next JS, Docker, UI Developer, Product Designer, Mockup, Wireframe, UX Research, Project Management,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={dm_sans.className}>
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  );
}
