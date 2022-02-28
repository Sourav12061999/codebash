import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Context from '../Components/Context/context'
import Navbar from '../Components/Navbar/navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return(
  <Context>
  <Navbar/>
  <Component {...pageProps} />
  </Context>
  )
}

export default MyApp
