import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "MJ's Portfolio",
  description: "문종민(MJ)의 포트폴리오"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full mx-auto">
        <header className="sticky top-0">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
