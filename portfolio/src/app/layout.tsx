import { Navbar } from "@/widget/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.className} min-h-screen bg-linear-bg bg-no-repeat dark:bg-dark-linear-bg dark:bg-dark-background text-text dark:text-dark-text transition-all`}
      >
        <Navbar className='bg-navbar dark:bg-dark-navbar' />
        {children}
      </body>
    </html>
  );
}
