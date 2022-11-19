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
            document.body.style.setProperty('--scroll-toFirstMember', `${window.scrollY / (window.innerHeight / 2)}`)
            document.body.style.setProperty('--scroll-toSecondMember', `${window.scrollY / window.innerHeight}`)
        }, false)
    }, [])

  const backgroundBlocks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]

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
            <div className={`${styles.home_teamMember} ${styles.home_teamMember_reverse}`}>
                <div className={styles.home_teamMember_arrow}>
                    <LeftArrow size={'8vw'} />
                    <div className={`${styles.home_teamMember_arrow_title} ${styles.home_teamMember_reverse_arrow_title}`}>Дивитись<br />портфоліо</div>
                </div>
                <div className={styles.home_teamMember_content}>
                    <div className={styles.home_teamMember_content_role}>Full-Stack Розробник</div>
                    <div className={styles.home_teamMember_content_name}>Артемій</div>
                    <div className={styles.home_teamMember_content_about}>Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів</div>
                </div>
                <div className={styles.home_teamMember_image}></div>
            </div>
            <div className={styles.home_portfolioScreen}>
                <div className={styles.home_portfolioScreen_background}>
                    {backgroundBlocks.map(id => <div key={id} id={`${id}`}></div>)}
                </div>
                <div className={styles.home_portfolioScreen_title}>Портфоліо</div>
                <div className={styles.home_portfolioScreen_subtitle}>Сумістні роботи</div>
                <div className={styles.home_portfolioScreen_text}>Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів</div>
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
                description: 'D&C Ready Main Page'
            }}
        >
            {page}
        </Layout>
    )
}

export default Home