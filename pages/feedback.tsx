import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'

const Feedback: NextPageWithLayout = () => {
    return (
        <div id='page-content'>
            <p style={{fontSize: '1vw'}}>Зворотній зв’язок</p>
        </div>
    )
}

Feedback.getLayout = (page: ReactElement) => {
    return (
        <Layout
            meta={{
                title: 'D&C Ready Feedback',
                description: 'D&C Ready Feedback Page'
            }}
        >
            {page}
        </Layout>
    )
}

export default Feedback