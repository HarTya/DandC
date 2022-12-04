import styles from './Video.module.scss'

export default function Video() {

    return (
        <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload='metadata' 
            poster='https://res.cloudinary.com/dcready/video/upload/q_100/v1668954492/dcready/main-background-video.jpg'
            className={styles.video}
        >
            <source 
                src='https://res.cloudinary.com/dcready/video/upload/q_100/v1668954492/dcready/main-background-video.mp4' 
                type='video/mp4' 
            />
        </video> 
    )
}