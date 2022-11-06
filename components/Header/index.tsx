import { useEffect } from 'react'

export default function Header() {

    useEffect(() => {
        console.log('Header mount')
        return () => (
            console.log('Header unmount')
        )
    }, [])

    return (
        <header>Header</header>
    )
}