import { Geist, Geist_Mono, Old_Standard_TT, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],     
  weight: ["400", "500", "600", "700"],
});
export const oldEnglish = Old_Standard_TT({
  variable: "--font-old-english",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Drag_Newspaper",
  description:
    "Find the latest news and articles on various topics with our newspaper app.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${oldEnglish.variable} h-full antialiased`}
    >
      <body className={`${poppins.className}  min-h-full flex flex-col`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
