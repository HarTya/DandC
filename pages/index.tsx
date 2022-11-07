import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <video autoPlay muted loop playsInline preload='metadata' className={styles.home_video}>
        <source src='video/video-bg.mp4' type='video/mp4' />
      </video>
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