import React from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <React.Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </div>
  );
}
export default MyApp;
