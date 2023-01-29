import Logo from 'components/UI/icons/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FEEDBACK_PAGE, HOME_PAGE, PORTFOLIO_PAGE } from 'utils'
import styles from './Header.module.scss'

export default function Header() {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={styles.header_links}>
                <Link
                    href={HOME_PAGE}
                    className={
                        router.asPath === HOME_PAGE ?
                            `${styles.header_link} ${styles.header_link_active}`
                            : styles.header_link
                    }
                >
                    Про Нас
                </Link>
                <Link
                    href={PORTFOLIO_PAGE}
                    className={
                        router.asPath === PORTFOLIO_PAGE ?
                            `${styles.header_link} ${styles.header_link_active}`
                            : styles.header_link
                    }
                >
                    Портфоліо
                </Link>
            </div>
            <Logo animation />
            <Link
                href={FEEDBACK_PAGE}
                className={
                    router.asPath === FEEDBACK_PAGE ?
                        `${styles.header_link} ${styles.header_link_active}`
                        : styles.header_link
                }
            >
                Зворотній зв’язок
            </Link>
        </header>
    )
}