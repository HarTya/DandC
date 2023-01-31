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
    text: string | Array<ReactElement>,
    color: string,
    bigSize?: boolean,
    wideBorder?: boolean,
    height?: string | boolean
}

export interface LogoProps {
    width?: string,
    height?: string,
    animation: boolean
}

export interface GuidelineIconsProps {
    width: string,
    height: string
}

export interface ArrowIconsProps {
    size: string
}

export interface WhatWeUseIconsProps {
    size: string
}

export interface ToolsWeUseIconsProps {
    width: string,
    height: string
}