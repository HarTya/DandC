import { useEffect } from 'react'

export default function Footer() {

    useEffect(() => {
        console.log('Footer mounted...')
        return () => console.log('Footer unmounted...')
    }, [])

    return (
        <footer></footer>
    )
}