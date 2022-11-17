import styles from './Background.module.scss'
import Image from 'next/legacy/image'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectVideoState, setVideoState } from 'store/videoSlice'
import { useEffect } from 'react'

export default function Background() {

    const videoState = useAppSelector(selectVideoState);
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
                    poster='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.jpg' 
                    className={styles.video}
                >
                    <source 
                        src='https://res.cloudinary.com/dandcready/video/upload/q_100/v1667904954/dandcreadywebsite/fj7x0cqmojwe8jfvnr3l.mp4' 
                        type='video/mp4' 
                    />
                </video> 
            : <></>}
        </>
    )
}
