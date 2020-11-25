import '../styles/globals.scss'
import '../node_modules/react-clean-carousel/dist/main.css';
import '../node_modules/react-clean-card/dist/main.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
