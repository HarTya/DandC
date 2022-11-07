import { useEffect } from 'react'
import styles from './Header.module.scss';

export default function Header() {

    useEffect(() => {
        console.log('Header mounted')
        return () => (
            console.log('Header unmounted')
        )
    }, [])

    return (
        <header className={styles.header}>Header</header>
    )
}