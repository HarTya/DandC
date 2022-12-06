import styles from './Video.module.scss'

export default function Video() {

    return (
        <video 
            autoPlay 
            loop 
            playsInline 
            preload='metadata' 
            poster='https://res.cloudinary.com/dcready/video/upload/q_100/v1670364158/rlss73attpxj5qnquai4.jpg'
            className={styles.video}
        >
            <source 
                src='https://res.cloudinary.com/dcready/video/upload/q_100/v1670364158/rlss73attpxj5qnquai4.mp4' 
                type='video/mp4' 
            />
        </video> 
    )
}