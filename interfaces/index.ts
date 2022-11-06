import { ReactElement } from 'react'

export interface LayoutProps {
    children: ReactElement,
    meta: {
        title: string,
        description: string,
        icon?: string
    }
}