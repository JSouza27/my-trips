import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shotcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manisfest" href="/manifest.json" />

        <meta name="theme-color" content="#232946" />
        <meta
          name="description"
          content="A simple study project using NextJS"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
