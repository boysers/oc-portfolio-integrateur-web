import { Layout } from "@/components/Layout";
import { PortfolioProvider } from "@/context/PortfolioContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioProvider>
  );
}
