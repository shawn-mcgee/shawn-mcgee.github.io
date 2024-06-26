import type { Metadata } from "next";
import { Inter, Noto_Sans, Jacquard_24, Special_Elite, Courier_Prime} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const fontFamily = Courier_Prime({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Shawn McGee",
  description: "Full-Time Dad, Part-Time DM, Some-Time Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={fontFamily.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          { children }
        </ThemeProvider>
      </body>
    </html>
  );
}
 