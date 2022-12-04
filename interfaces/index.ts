import { ReactElement } from 'react'

export interface LayoutProps {
    children: ReactElement,
    meta: {
        title: string,
        description: string,
        icon?: string
    }
}

export interface CardProps {
    caption?: string,
    title: string,
    text: string | Array<any>,
    color: string,
    bigSize?: boolean,
    wideBorder?: boolean,
    imageSrc?: any
}