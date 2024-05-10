import { Inter } from "next/font/google";
import Head from 'next/head';
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Head>
        <title>Online-Duka-Store</title>
        <meta name="description" content="Next.js 14 Online Duka Ecommerce store" />
      </Head>
      <div className={inter.className}>{children}</div>
    </ClerkProvider>
  );
}