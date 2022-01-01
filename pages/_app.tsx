import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { Layout } from '../components/Layout/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
