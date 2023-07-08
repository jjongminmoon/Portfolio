import "./globals.css";
import Navbar from "@/components/Navbar";
import { Noto_Sans_KR } from "next/font/google";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"]
});

export const metadata = {
  title: "@ MJ's Portfolio",
  description: "문종민(MJ)의 포트폴리오"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full mx-auto overflow-auto min-w-[1280px]">{children}</body>
    </html>
  );
}
