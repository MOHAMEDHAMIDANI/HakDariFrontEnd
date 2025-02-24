import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "@/layouts/layout";
import type { AppProps } from "next/app";
import { Poppins, Unbounded, Urbanist } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["400", "600"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "600"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${poppins.className} ${unbounded.className} ${urbanist.className}`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
