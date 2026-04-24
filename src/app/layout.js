import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/Component/Shared/Navbar";
import FooterPage from "@/Component/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drag_Newspaper",
  description: "Find the latest news and articles on various topics with our newspaper app.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <NavbarPage />
        </header>
        <main >{children}</main>
        <footer>
          <FooterPage />
        </footer>
      </body>
    </html>
  );
}
