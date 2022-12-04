import styles from './Video.module.scss'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectVideoState, setVideoState } from 'store/videoSlice'
import { useEffect } from 'react'

export default function Video() {

    const videoState = useAppSelector(selectVideoState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const Debounce = setTimeout(() => {
            dispatch(setVideoState(true))
        }, 4000)

        return () => clearTimeout(Debounce)
    }, [])

    return (
        <>
            {videoState ? <div className={styles.video_background}></div> : <></>}
            {videoState ? 
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload='metadata' 
                    className={styles.video}
                >
                    <source 
                        src='https://res.cloudinary.com/dcready/video/upload/q_100/v1668954492/main-background-video.mp4' 
                        type='video/mp4' 
                    />
                </video> 
            : <></>}
        </>
    )
}