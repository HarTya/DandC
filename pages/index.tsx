import { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Video from 'components/UI/Video'
import LeftArrow from 'components/UI/icons/LeftArrow'
import RightArrow from 'components/UI/icons/RightArrow'
import Card from 'components/UI/Card'
import variables from 'styles/variables.module.scss'
import Lines from 'components/UI/icons/Lines'
import { useAppSelector } from 'store/hook'
import { selectToolsState } from 'store/toolsSlice'
import REIBIKE from 'public/images/reibike.png'

const Home: NextPageWithLayout = () => {

    const toolsState = useAppSelector(selectToolsState)
    const backgroundBlocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

    return (
        <div className={styles.home}>
            <Video />
            <div id='page-content'>
                <div className={styles.home_previewScreen}>
                    <div className={styles.home_previewScreen_arrow}>
                        <div className={styles.home_previewScreen_arrow_title}>Наші проекти</div>
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
                <div className={styles.home_info}>
                    <Lines />
                    <div className={styles.home_info_row}>
                        <Card
                            title={'Що для нас\nважливо?'}
                            text={'Для нас найважливіше це клієнти, ми прикладаємо всі можливі сили для того, щоб задовольнити запити та вибудувати довгострокові відносини.'}
                            color={variables.fifthColor}
                        />
                        <Card
                            title={`Яка наша\nмета?`}
                            text={'Наша мета полягає в тому, щоб доставляти нашим клієнтам якісний продукт вчасно, ми завжди ретельно ставимося до кожного проекту.'}
                            color={variables.secondColor}
                        />
                        <Card
                            title={'Яка наша\nкоманда?'}
                            text={'Наші співробітники є професіоналами своєї справи, ми завжди сприяємо розвитку наших співробітників та заохочуємо їх за це.'}
                            color={variables.fourthColor}
                        />
                    </div>
                    <div className={styles.home_info_row}>
                        <Card
                            title={'Що вміє наша\nкоманда?'}
                            text={
                                toolsState.map(({ name, Icon }) =>
                                    <span>
                                        <Icon />
                                        <p>{name}</p>
                                    </span>
                                )
                            }
                            color={variables.sixthColor}
                            bigSize
                        />
                        <div className={styles.home_info_whatWeUse}>
                            <div className={styles.home_info_whatWeUse_text}>Що ми<br />використовуємо:</div>
                            <div className={styles.home_info_whatWeUse_icons}>
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                                <img src='https://logos-world.net/wp-content/uploads/2021/10/Pornhub-Symbol.png' />
                            </div>
                        </div>
                    </div>
                    <Card
                        caption={'Зроблено командою D&C Ready\n14.09.2022'}
                        title={'REIBIKE\nBest for bravest'}
                        text={'Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів'}
                        color={variables.secondColor}
                        imageSrc={REIBIKE}
                        wideBorder
                    />
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