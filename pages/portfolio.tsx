import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'

const Portfolio: NextPageWithLayout = () => {
    return (
        <div id='page-content'>
            <p style={{fontSize: '1.5vw'}}>Портфоліо</p>
        </div>
    )
}

Portfolio.getLayout = (page: ReactElement) => {
    return (
        <Layout
            meta={{
                title: 'D&C Ready Portfolio',
                description: 'D&C Ready Portfolio Page'
            }}
        >
            {page}
        </Layout>
    )
}

export default Portfolio