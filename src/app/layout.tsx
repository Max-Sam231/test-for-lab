import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/global.scss";
import MainLayout from "@/components/MainLayout/MainLayout";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Test for Labs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
