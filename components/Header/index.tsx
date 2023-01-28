import Logo from 'components/UI/icons/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

export default function Header() {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={styles.header_links}>
                <Link
                    href={'/'}
                    className={
                        router.asPath === '/' ?
                            `${styles.header_link} ${styles.header_link_active}`
                            : styles.header_link
                    }
                >
                    Про Нас
                </Link>
                <Link
                    href={'/portfolio'}
                    className={
                        router.asPath === '/portfolio' ?
                            `${styles.header_link} ${styles.header_link_active}`
                            : styles.header_link
                    }
                >
                    Портфоліо
                </Link>
            </div>
            <Logo animation />
            <Link
                href={'/feedback'}
                className={
                    router.asPath === '/feedback' ?
                        `${styles.header_link} ${styles.header_link_active}`
                        : styles.header_link
                }
            >
                Зворотній зв’язок
            </Link>
        </header>
    )
}