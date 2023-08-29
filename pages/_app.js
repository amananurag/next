import  './global.scss';
import Head from 'next/head';

function App({ Component, pageProps }) {
   const getLayout = Component.getLayout || ((page) => page)
  return (
     <>
        <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </>
     )
}

export default App;