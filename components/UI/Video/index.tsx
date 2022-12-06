import styles from './Video.module.scss'

export default function Video() {

    return (
        <video 
            autoPlay 
            loop 
            playsInline 
            preload='metadata' 
            poster=''
            className={styles.video}
        >
            <source 
                src='https://res.cloudinary.com/demo/video/upload/leul3z9pz6rykz4lu6lo.mp4' 
                type='video/mp4' 
            />
        </video> 
    )
}