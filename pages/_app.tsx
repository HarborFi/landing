import React from "react";
import "../styles/global.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </div>
  );
}
export default MyApp;
