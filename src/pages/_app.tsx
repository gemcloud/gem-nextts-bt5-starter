import { i18n } from "@lingui/core"; //<== i18n
import { I18nProvider } from "@lingui/react"; //<== i18n

import "bootstrap/dist/css/bootstrap.css"; // import bootstrap.css
import "animate.css/animate.min.css";
import "@/styles/wavehand.css";
import "@/styles/global.scss";
import "@/styles/_nav.scss";
import "@/styles/_gemhome.scss";
// import "../styles/firstlanding.css";

// import * as React from "react";
import { initTranslation } from "@/utils/TranslationUtils"; //<== i18n
import Head from "next/head";
import { useRouter } from "next/router"; //<== i18n
import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import type { AppProps } from "next/app";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";

//initialization function
initTranslation(i18n); //<== i18n

function MyApp({ Component, pageProps }: AppProps) {
  //#### Start i18n  ####
  const router = useRouter();
  const locale = router.locale || router.defaultLocale!;
  const firstRender = useRef(true);

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
    firstRender.current = false;
  }

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation);
      i18n.activate(locale);
    }
  }, [locale, pageProps.translation]);
  //#### End i18n  ####

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

  //#### Initialize AOS with your page   ####
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100
    });
  }, []);

  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>(
    storedLanguage ? storedLanguage : "English"
  );

  return (
    <>
      <Head>
        {router.locales!.concat("x-default").map((locale: string) => {
          const localePath = locale === "x-default" ? "" : `${locale}`;
          const href = `https://linguijs-translation-demo.vercel.app/${localePath}${router.asPath}`;
          return locale === "pseudo" ? null : (
            <link key={locale} rel="alternate" hrefLang={locale} href={href} />
          );
        })}
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-125864873-1"
        strategy="afterInteractive"
      ></Script>
      {/* <ThemeProvider attribute="class"> */}
      {/* <Layout></Layout> on each page file!!!*/}
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
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
