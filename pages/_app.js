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
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
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