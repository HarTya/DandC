import styles from './Video.module.scss'

export default function Video() {

    return (
        <video 
            autoPlay 
            loop 
            playsInline 
            preload='metadata' 
            muted
            poster='https://res.cloudinary.com/dcready/video/upload/v1668954492/dcready/main-background-video.jpg'
            className={styles.video}
        >
            <source 
                src='https://res.cloudinary.com/dcready/video/upload/v1668954492/dcready/main-background-video.mp4' 
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' 
            />
            <source 
                src='https://res.cloudinary.com/dcready/video/upload/v1668954492/dcready/main-background-video.webm' 
                type='video/webm; codecs="vp8, vorbis"'
            />
            <source 
                src='https://res.cloudinary.com/dcready/video/upload/v1668954492/dcready/main-background-video.ogv' 
                type='video/ogg; codecs="theora, vorbis"'
            />
        </video> 
    )
}