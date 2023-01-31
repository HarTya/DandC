import Link from 'next/link'
import { useRouter } from 'next/router'
import { FEEDBACK_PAGE, header, HOME_PAGE, PORTFOLIO_PAGE } from 'state'
import styles from './Header.module.scss'

export default function Header() {

    const router = useRouter()
    const Logo = header.Logo

    return (
        <header className={styles.header}>
            <div className={styles.header_links}>
                <div className={styles.header_link}>
                    <Link 
                        href={HOME_PAGE}
                        className={styles.header_link_subheading}
                        id={
                            router.asPath === HOME_PAGE ? 'header-link-active' 
                            : 'header-link-disable'
                        }
                    >
                        {header.subheadingHome}
                    </Link>
                </div>
                <div className={styles.header_link}>
                    <Link 
                        href={PORTFOLIO_PAGE}
                        className={styles.header_link_subheading}
                        id={
                            router.asPath === PORTFOLIO_PAGE ? 'header-link-active' 
                            : 'header-link-disable'
                        }
                    >
                        {header.subheadingPortfolio}
                    </Link>
                </div>
            </div>
            <Logo 
                width={header.LogoWidth} 
                height={header.LogoHeight} 
                animation={header.LogoAnimation} 
            />
            <div className={styles.header_link}>
                <Link 
                    href={FEEDBACK_PAGE}
                    className={styles.header_link_subheading}
                    id={
                        router.asPath === FEEDBACK_PAGE ? 'header-link-active' 
                        : 'header-link-disable'
                    }
                >
                    {header.subheadingFeedback}
                </Link>
            </div>
        </header>
    )
}