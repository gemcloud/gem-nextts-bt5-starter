import Head from "next/head";

import Layout from "../layouts/GemLayout";
import Homepage from "@/containers/GemHomePage";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>🎯 Gem Cloud, Next.js, TypeScript, BootStrip5, Scss</title>
        </Head>
        <div style={{ marginTop: "7rem" }}></div>
        <Homepage />
      </Layout>
    </>
  );
}
