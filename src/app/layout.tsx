import Navbar from "@/components/Navbar";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"]
});

export const metadata = {
  title: "MJ's Portfolio",
  description: "문종민(MJ)의 포트폴리오"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full mx-auto">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
