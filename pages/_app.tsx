import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Layout>
        <>
          <Loader />
          <Component {...pageProps} />
        </>
      </Layout>
    </>
  );
}
