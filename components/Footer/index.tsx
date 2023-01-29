import Logo from 'components/UI/icons/Logo'
import RightArrow from 'components/UI/icons/RightArrow'
import Link from 'next/link'
import { FEEDBACK_PAGE } from 'utils'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_info}>
                <Logo />
                <p>+380 8 800 555 3535<br />support.dcready@gmail.com</p>
                <p>2022 D&C Ready. All rights reserved</p>
            </div>
            <div className={styles.footer_links}>
                <span>Сторінки</span>
                <div>
                    <Link href={'/portfolio'}><p>Портфоліо</p></Link>
                </div>
                <div>
                    <Link href={'/feedback'}><p>Зворотній зв’язок</p></Link>
                </div>
            </div>
            <Link href={FEEDBACK_PAGE} className={styles.footer_link}>
                <div className={styles.footer_link_title}>Зворотній зв’язок</div>
                <div className={styles.footer_link_arrow}>
                    <RightArrow size={'8vw'} />
                </div>
            </Link>
        </footer>
    )
}