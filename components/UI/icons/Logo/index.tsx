import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <span className={styles.logo_text}>D<p>&</p>C Ready</span>
        </div>
    )
}