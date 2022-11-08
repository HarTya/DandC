import type { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Image from 'next/image'

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.home}>
      <video autoPlay muted loop playsInline preload='metadata' poster='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.jpg' className={styles.home_video}>
        <source src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.mp4' type='video/mp4' />
      </video>
      <Image
        alt='home-bg'
        src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.jpg'
        layout='fill'
        quality={100}
        className={styles.home_image}
      />
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