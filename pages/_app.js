import '../styles/globals.css'
import Header from './src/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
