import "bootstrap/dist/css/bootstrap.css"; // import bootstrap.css
import "@/styles/wavehand.css";
import "@/styles/global.scss";
import "@/styles/_nav.scss";
import "@/styles/_gemhome.scss";
import "../styles/firstlanding.css";

// import * as React from "react";
import { useState, useEffect } from "react";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //#### import bootstrap-js-libs below for _app.js   ####
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");  // on error TypeScript.
  // }, []);
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
  }, []);

  //#### localStorage & language   ####
  storeLanguageInLocalStorage("Chinese");
  let storedLanguage = "";
  useEffect(() => {
    // Perform localStorage action
    //const item = localStorage.getItem("key");
    storedLanguage = localStorage.getItem("gem-language") || "";
  }, []);

  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(
    storedLanguage ? storedLanguage : "English"
  );

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-125864873-1"
        strategy="afterInteractive"
      ></Script>
      {/* <ThemeProvider attribute="class"> */}
      {/* <Layout></Layout> on each page file!!!*/}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

function storeLanguageInLocalStorage(language: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("gem-language", language);
  }
}

export default MyApp;
