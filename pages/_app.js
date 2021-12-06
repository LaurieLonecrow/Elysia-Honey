//components
import Layout from '../layouts/LayoutMain'
import Head from 'next/head'

//styles
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link
            rel="preload"
            href="/public/Bratsy.ttf"
            as="font"
            crossOrigin=""
          />
    <link
      href="https://fonts.googleapis.com/css2?family=Chango&family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
  </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
    </>
  )
}

export default MyApp


  //npm run dev