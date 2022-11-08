import { ReactElement, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Image from 'next/legacy/image'
import poster from 'public/images/poster.jpg'

const Home: NextPageWithLayout = () => {

  const [video, setVideo] = useState(false);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      setVideo(true)
    }, 4000);

    return () => clearTimeout(Debounce)
  }, [])

  return (
    <div className={styles.home}>
      {video ? <video autoPlay muted loop playsInline preload='metadata' className={styles.home_video}>
        <source src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.mp4' type='video/mp4' />
      </video> : <></>}
      <Image
        alt='background'
        src={poster}
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