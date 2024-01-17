import Head from "next/head";
import Footer from "../components/Components/ui/Footer";
import Header from "../components/Components/ui/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>To You Design</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/bb61864944.js"
          crossOrigin="anonymous"
        ></script>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
