import React from "react";
import "../styles/styles.css";
import { AppProps } from "next/app";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${josefin.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;