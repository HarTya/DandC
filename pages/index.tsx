import { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Background from 'components/UI/Background'

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <Background />
      <div id='page-content'>
        Main
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout
      meta={{
        title: 'D&C Ready!',
        description: 'D&C Ready'
      }}
    >
      {page}
    </Layout>
  )
}

export default Home