import React from 'react'
import FadeIn from 'react-fade-in'

import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <FadeIn delay={75}>
      <Component {...pageProps} />
    </FadeIn>
  )
}
