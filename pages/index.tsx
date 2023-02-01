import { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Video from 'components/UI/Video'
import LeftArrow from 'components/UI/icons/LeftArrow'
import RightArrow from 'components/UI/icons/RightArrow'
import { FEEDBACK_PAGE, guideline, portfolioBackgroundBlocks, PORTFOLIO_PAGE, previewScreen, skills, skillsHeading, tools, toolsHeading } from 'state'
import Link from 'next/link'
import GuidelineLine from 'components/UI/icons/GuidelineLine'

const Home: NextPageWithLayout = () => {
    return (
        <div className={styles.home}>
            <Video />
            <div id='page-content'>
                <div className={styles.home_previewScreen}>
                    <Link href={PORTFOLIO_PAGE} className={styles.home_previewScreen_link}>
                        <div className={styles.home_previewScreen_link_subheading}>{previewScreen.subheadingLeft}</div>
                        <div className={styles.home_previewScreen_link_arrow} id={'preview-screen-left-arrow'}>
                            <LeftArrow size={'4vw'} />
                        </div>
                    </Link>
                    <div className={styles.home_previewScreen_content}>
                        <pre className={styles.home_previewScreen_content_heading}>{previewScreen.heading}</pre>
                        <pre className={styles.home_previewScreen_content_text}>{previewScreen.text}</pre>
                    </div>
                    <Link href={FEEDBACK_PAGE} className={styles.home_previewScreen_link}>
                        <div className={styles.home_previewScreen_link_subheading}>{previewScreen.subheadingRight}</div>
                        <div className={styles.home_previewScreen_link_arrow} id={'preview-screen-right-arrow'}>
                            <RightArrow size={'4vw'} />
                        </div>
                    </Link>
                </div>
                <div className={styles.home_info}>
                    <div className={styles.home_info_background} />
                    <div className={styles.home_info_guideline}>
                        <div className={styles.home_info_guideline_line}>
                            <GuidelineLine />
                        </div>
                        {guideline.map(({
                            id, 
                            Icon, 
                            IconWidth, 
                            IconHeight, 
                            subheading,
                            text
                        }) => 
                            <div className={styles.home_info_guideline_step} key={id}>
                                <div id={'guideline-icon'}>
                                    <Icon 
                                        width={IconWidth} 
                                        height={IconHeight} 
                                    />
                                </div>
                                <pre className={styles.home_info_guideline_step_subheading}>{subheading}</pre>
                                <pre className={styles.home_info_guideline_step_text}>{text}</pre>
                            </div>
                        )}
                    </div>
                    <div className={styles.home_info_weUse}>
                        <div className={styles.home_info_weUse_skills}>
                            <pre className={styles.home_info_weUse_skills_heading}>{skillsHeading}</pre>
                            <div className={styles.home_info_weUse_skills_list}>
                                {skills.map(({
                                   id,
                                   text,
                                   Icon,
                                   IconSize
                                }) => 
                                    <div className={styles.home_info_weUse_skills_list_item} key={id}>
                                        <Icon size={IconSize} />
                                        <div className={styles.home_info_weUse_skills_list_item_text}>{text}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.home_info_weUse_tools}>
                            <pre className={styles.home_info_weUse_tools_heading}>{toolsHeading}</pre>
                            <div className={styles.home_info_weUse_tools_icons}>
                                {tools.map(({
                                    id,
                                    url,
                                    Icon,
                                    IconWidth,
                                    IconHeight
                                }) =>
                                    <Link 
                                        href={url} 
                                        target={'_blank'} 
                                        key={id}
                                    >
                                        <Icon 
                                            width={IconWidth} 
                                            height={IconHeight} 
                                        />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <Card
                        caption={'Зроблено командою D&C Ready\n14.09.2022'}
                        title={'REIBIKE\nBest for bravest'}
                        text={'Зібрались якось надзвичайний дізайнер й талановитий кодер та вирішили вони що с цього моменту вони напрямують свої сили на боротьбу з злими силами поганих сайтів'}
                        color={variables.secondColor}
                        wideBorder
                    /> */}
                </div>
                <div className={styles.home_portfolioScreen}>
                    <div className={styles.home_portfolioScreen_background}>
                        {portfolioBackgroundBlocks.map(id =>
                            <div key={id}>
                                <span 
                                    id={`${id}`} 
                                    className={styles.home_portfolioScreen_background_block} 
                                />
                            </div>
                        )}
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