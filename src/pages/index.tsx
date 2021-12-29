import { i18n } from "@lingui/core"; //<== i18n
import { I18nProvider } from "@lingui/react"; //<== i18n
import { t, Trans } from "@lingui/macro";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import Layout from "../layouts/GemLayout";
import Homepage from "@/containers/GemHomePage";
import { loadTranslation } from "@/utils/TranslationUtils";
import LangSwitcher from "@/components/bases/LangSwitcher";

export const getStaticProps: GetStaticProps = async ctx => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      translation
    }
  };
};

export default function Home() {
  return (
    <>
      <Layout>
        {/*  */}
        <Head>
          <I18nProvider i18n={i18n}>
            <Trans id="site-title">
              <title>🎯 Gem Cloud, Next.js, TypeScript, BootStrip5, Scss</title>
            </Trans>
          </I18nProvider>
        </Head>
        <div style={{ marginTop: "7rem" }}></div>
        <h1>
          <Trans>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Trans>
          <LangSwitcher />
        </h1>
        <Homepage />
      </Layout>
    </>
  );
}
