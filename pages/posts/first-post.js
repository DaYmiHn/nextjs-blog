import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
  return <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <Link href="/posts/second-post">
            <a>second page!</a>
          </Link>
           <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </Layout>
}
