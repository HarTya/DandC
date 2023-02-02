import { ReactElement } from 'react'
import Layout from 'components/Layout'
import type { NextPageWithLayout } from 'pages/_app'
import styles from 'styles/Home.module.scss'
import Video from 'components/UI/Video'
import LeftArrow from 'components/UI/icons/LeftArrow'
import RightArrow from 'components/UI/icons/RightArrow'
import { FEEDBACK_PAGE, way, portfolioBackgroundBlocks, PORTFOLIO_PAGE, previewScreen, questions, skills, skillsHeading, tools, toolsHeading } from 'state'
import Link from 'next/link'
import WayLine from 'components/UI/icons/WayLine'

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
                    <div className={styles.home_info_way}>
                        <div className={styles.home_info_way_background}>
                            <WayLine />
                        </div>
                        {way.map(({
                            id,
                            Icon,
                            IconSize,
                            subheading,
                            text
                        }) =>
                            <div className={styles.home_info_way_step} key={id}>
                                <div id={'way-icon'}>
                                    <Icon size={IconSize} />
                                </div>
                                <pre className={styles.home_info_way_step_subheading}>{subheading}</pre>
                                <pre className={styles.home_info_way_step_text}>{text}</pre>
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
                    <div className={styles.home_info_questions}>
                        {questions.map(({
                            id,
                            Icon,
                            IconSize,
                            subheading,
                            text
                        }) =>
                            <div className={styles.home_info_questions_question} key={id}>
                                <div id={'question-icon'}>
                                    <Icon size={IconSize} />
                                </div>
                                <div className={styles.home_info_questions_question_subheading}>{subheading}</div>
                                <pre className={styles.home_info_questions_question_text}>{text}</pre>
                            </div>
                        )}
                    </div>
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