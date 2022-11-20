import Logo from 'components/UI/icons/Logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from './Header.module.scss'

export default function Header() {

    const router = useRouter()

    useEffect(() => {
        console.log('Header mounted...')
        return () => console.log('Header unmounted...')
    }, [])

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
                <Logo />
            </div>
            <span className={styles.header_link}>Зворотній зв’язок</span>
        </header>
    )
}