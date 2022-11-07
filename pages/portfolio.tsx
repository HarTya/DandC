import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'

const Portfolio: NextPageWithLayout = () => {
  return (
    <div>
        <div>Portfolio</div>
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