import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import Link from 'next/link'

const Portfolio: NextPageWithLayout = () => {
  return (
    <div>
        <Link href={'/'}>Homepage</Link>
    </div>
  )
}

Portfolio.getLayout = (page: ReactElement) => {
  return (
    <Layout
      meta={{
        title: 'D&C Ready Portfolio',
        description: 'D&C Ready Portfolio'
      }}
    >
      {page}
    </Layout>
  )
}

export default Portfolio