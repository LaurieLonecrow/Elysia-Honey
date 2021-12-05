//components
import Layout from '../layouts/LayoutMain'

//styles
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
  <Layout>
  <Component {...pageProps} />
  </Layout>
    </>
  )
}

export default MyApp


  //npm run dev