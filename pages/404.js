/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'

export default function Custom404() {
  return (
    <error>
      <p>404 - Page Not Found 🤔</p>
      <br />
      <Link href="/">
        <button>&#8592; Go Home</button>
      </Link>
    </error>
  )
}
