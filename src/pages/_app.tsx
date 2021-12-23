import "bootstrap/dist/css/bootstrap.css"; // import bootstrap.css
import "@styles/global.scss";

// import "font-awesome/css/font-awesome.min.css";
import "../styles/wavehand.css";
import "../styles/firstlanding.css";

// import * as React from "react";
import { useEffect } from "react";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // import bootstrap-js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-125864873-1"
        strategy="afterInteractive"
      ></Script>
      {/* <ThemeProvider attribute="class"> */}
      {/* <Layout> on each page file!!!*/}
      <Component {...pageProps} />
      {/* </Layout> */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
