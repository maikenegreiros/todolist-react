import Layout from "../components/Layout/Layout";
import "../sass/global.sass";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
