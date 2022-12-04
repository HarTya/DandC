import { CardProps } from 'interfaces'
import Image from 'next/legacy/image'
import styles from './Card.module.scss'

export default function Card({ caption, title, text, color, bigSize = false, wideBorder = false, imageSrc }: CardProps) {
    return (
        <div className={styles.card} id='card'>
            <style jsx>{`
                #card {
                    background: ${color};
                    padding: ${bigSize ? '4vw 3vw' : '3vw 1.5vw'};
                }
                #card:after {
                    top: ${wideBorder ? '1.2em' : '1em'};
                    left: ${wideBorder ? '1.2em' : '1em'};
                    border-right: ${wideBorder ? '0.5em' : '0.4em'} solid ${color};
                    border-bottom: ${wideBorder ? '0.5em' : '0.4em'} solid ${color};
                }
                #content {
                    width: ${imageSrc ? '42%' : '100%'};
                }
                #text {
                    font-size: ${bigSize ? '1.9vw' : '1.5vw'};
                }
            `}</style>
            <div id='content'>
                {caption ? <pre className={styles.card_caption}>{caption}</pre> : <></>}
                <pre className={styles.card_title}>{title}</pre>
                <pre className={styles.card_text} id='text'>{text}</pre>
            </div>
            {imageSrc ? <Image alt='Картинка' width={920} height={500} src={imageSrc} /> : <></>}
        </div>
    )
}