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
                src='https://res.cloudinary.com/dcready/video/upload/v1668954492/dcready/main-background-video.mp4' 
                type='video/mp4' 
            />
        </video> 
    )
}