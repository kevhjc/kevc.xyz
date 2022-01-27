import React from 'react'
import Head from 'next/head'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kevin H. Chung</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
