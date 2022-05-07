import type { AppProps } from 'next/app'
import { BreweriesProvider } from '../context/BreweriesContext'
import { GlobalStyle } from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BreweriesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </BreweriesProvider>
  )
}

export default MyApp
