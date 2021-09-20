import Head from "next/head";
import { Globals } from "../styles/Globals.styles";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Adis Learning Platform</title>
    </Head>
    <Globals />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
};

export default MyApp;

