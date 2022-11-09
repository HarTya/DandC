import { ReactElement, useEffect, useState } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Image from 'next/legacy/image'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectVideoState, setVideoState } from 'store/videoSlice'

const Home: NextPageWithLayout = () => {

  const videoState = useAppSelector(selectVideoState);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const Debounce = setTimeout(() => {
      dispatch(setVideoState(true))
    }, 4000)

    return () => clearTimeout(Debounce)
  }, [])

  return (
    <div className={styles.home}>
      {videoState ? <video autoPlay muted loop playsInline preload='metadata' poster='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.jpg' className={styles.home_video}>
        <source src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.mp4' type='video/mp4' />
      </video> : <></>}
      <Image
        alt='background'
        src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.jpg'
        layout='fill'
        quality={100}
        className={styles.home_image}
      />
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