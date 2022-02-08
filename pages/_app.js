import React from 'react'
import FadeIn from 'react-fade-in'

import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <FadeIn transitionDuration={800}>
      <Component {...pageProps} />
    </FadeIn>
  )
}
