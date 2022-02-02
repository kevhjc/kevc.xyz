/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <error>
      <Head>
        <title>404 – Kevin H. Chung</title>
      </Head>
      <p>
        <h2>{`404 - Not found`}</h2>
      </p>
      <p>{'Nothing to see here'}</p>
      <br />
      <Link href="/">
        <button>Go home</button>
      </Link>
    </error>
  )
}
