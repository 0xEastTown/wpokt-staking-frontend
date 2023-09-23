"use client"
import Provider from "./provider";
import Head from "next/head";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <title>wPOKT Staking</title>
        <meta name="description" content="wPokt Staking Rewards App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
