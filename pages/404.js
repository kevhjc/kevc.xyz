/* eslint-disable @next/next/link-passhref */
import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 – Kevin H. Chung</title>
      </Head>
      <error>{`404 - Not found`}</error>
    </div>
  )
}
