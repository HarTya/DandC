import { ReactElement } from 'react'

export interface LayoutProps {
    children: ReactElement,
    meta: {
        title: string,
        description: string,
        icon?: string
    }
}

export interface LogoProps {
    width?: string,
    height?: string,
    animation: boolean
}

export interface WayIconsProps {
    size: string
}

export interface ArrowIconsProps {
    size: string
}

export interface SkillsIconsProps {
    size: string
}

export interface ToolsIconsProps {
    width: string,
    height: string
}

export interface QuestionsIconsProps {
    size: string
}