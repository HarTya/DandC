import { ReactElement, useEffect } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Background from 'components/UI/Background'
import LeftArrow from 'components/UI/icons/LeftArrow'
import RightArrow from 'components/UI/icons/RightArrow'

const Home: NextPageWithLayout = () => {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll', `${window.scrollY / (document.body.offsetHeight - window.innerHeight)}`)
    }, false)
  }, [])

  return (
    <div className={styles.home}>
      <Background />
      <div id='page-content'>
        <div className={styles.home_previewScreen}>
          <div className={styles.home_previewScreen_arrow}>
            <div className={styles.home_previewScreen_arrow_title}>Сумістне Портфоліо</div>
            <LeftArrow size={'8vw'} />
          </div>
          <div className={styles.home_previewScreen_content}>
            <div className={styles.home_previewScreen_content_title}>Казка про<br />майстерню магіі</div>
            <div className={styles.home_previewScreen_content_subtitle}>Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів</div>
          </div>
          <div className={styles.home_previewScreen_arrow}>
            <div className={styles.home_previewScreen_arrow_title}>Зворотній зв’язок</div>
            <RightArrow size={'8vw'} />
          </div>
        </div>
        <div className={styles.home_teamMember}>
          <div className={styles.home_teamMember_image}></div>
          <div className={styles.home_teamMember_content}>
            <div className={styles.home_teamMember_content_role}>UI/UX Дізайнер</div>
            <div className={styles.home_teamMember_content_name}>Андрій</div>
            <div className={styles.home_teamMember_content_about}>Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів</div>
          </div>
          <div className={styles.home_teamMember_arrow}>
            <div className={styles.home_teamMember_arrow_title}>Дивитись<br />портфоліо</div>
            <RightArrow size={'8vw'} />
          </div>
        </div>
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