/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <error>
      <Head>
        <title>404</title>
      </Head>
      <p>404 - Page Not Found 🤔</p>
      <br />
      <Link href="/">
        <button>Go home</button>
      </Link>
    </error>
  )
}
