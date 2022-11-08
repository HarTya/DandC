import Logo from 'components/UI/icons/Logo'
import { useEffect } from 'react'
import styles from './Header.module.scss'

export default function Header() {

    useEffect(() => {
        console.log('Header mounted')
        return () => (
            console.log('Header unmounted')
        )
    }, [])

    return (
        <header className={styles.header}>
            <div className={styles.header_links}>
                <span className={styles.header_link}>Про Нас</span>
                <span className={styles.header_link}>Портфоліо</span>
            </div>
            <Logo />
            <span className={styles.header_link}>Зворотній зв’язок</span>
        </header>
    )
}