import Monitor from 'components/UI/icons/Monitor'
import Pen from 'components/UI/icons/Pen'
import FrontEnd from 'components/UI/icons/FrontEnd'
import BackEnd from 'components/UI/icons/BackEnd'
import Jira from 'components/UI/icons/Jira'
import NodeJS from 'components/UI/icons/NodeJS'
import GitHub from 'components/UI/icons/GitHub'
import WebStorm from 'components/UI/icons/WebStorm'
import Figma from 'components/UI/icons/Figma'
import Sketch from 'components/UI/icons/Sketch'
import TypeScript from 'components/UI/icons/TypeScript'
import React from 'components/UI/icons/React'
import Illustrator from 'components/UI/icons/Illustrator'
import Photoshop from 'components/UI/icons/Photoshop'
import NextJS from 'components/UI/icons/NextJS'
import PostgreSQL from 'components/UI/icons/PostgreSQL'
import Idea from 'components/UI/icons/Idea'
import Settings from 'components/UI/icons/Settings'
import UploadCloud from 'components/UI/icons/UploadCloud'
import Logo from 'components/UI/Logo'
import Bot from 'components/UI/icons/Bot'

export const HOME_PAGE = '/'
export const PORTFOLIO_PAGE = '/portfolio'
export const FEEDBACK_PAGE = '/feedback'

export const header = {
    subheadingHome: 'Про нас',
    subheadingPortfolio: 'Портфоліо',
    subheadingFeedback: 'Зворотній зв’язок',
    Logo,
    LogoWidth: '8vw',
    LogoHeight: '4vw',
    LogoAnimation: true
}

export const previewScreen = {
    heading: 'Ми зробимо саме те\nщо ви завжди хотіли',
    text: 'Зібрались якось надзвичайний дізайнер й\nталановитий кодер та вирішили вони що з\nцього моменту вони напрямують свої сили\nна боротьбу зі злими силами поганих\nсайтів',
    subheadingLeft: 'Подивитись роботи',
    subheadingRight: 'Отримати консультацію'
}

export const guideline = [
    {
        id: 1,
        Icon: Idea,
        IconWidth: '4vw',
        IconHeight: '4vw',
        subheading: 'Створюємо ідею\nмайбутнього проекту',
        text: 'На основі отриманої від Вас\nінформації продумуємо майбутню\nструктуру сайту та наповнення'
    },
    {
        id: 2,
        Icon: Settings,
        IconWidth: '4vw',
        IconHeight: '4vw',
        subheading: 'Впроваджуємо технічні\nрішення',
        text: 'Використовуємо найпередовіші\nтехнології та налаштовуємо\nефективну рекламу'
    },
    {
        id: 3,
        Icon: UploadCloud,
        IconWidth: '4vw',
        IconHeight: '4vw',
        subheading: 'Запускаємо ваш\nпроект',
        text: 'Ми завжди націлені на\nдовгострокову співпрацю\nта супровід проекту'
    }
]

export const skillsHeading = 'Що вміє\nнаша команда?'
export const skills = [
    {
        id: 1,
        text: 'UI/UX Design',
        Icon: Monitor,
        IconSize: '1.5vw'
    },
    {
        id: 2,
        text: 'Graphic Design',
        Icon: Pen,
        IconSize: '1.5vw'
    },
    {
        id: 3,
        text: 'Front-End Development',
        Icon: FrontEnd,
        IconSize: '1.5vw'
    },
    {
        id: 4,
        text: 'Back-End Development',
        Icon: BackEnd,
        IconSize: '1.5vw'
    },
    {
        id: 5,
        text: 'Telegram Bot Development',
        Icon: Bot,
        IconSize: '1.5vw'
    }
]

export const toolsHeading = 'Що ми\nвикористовуємо:'
export const tools = [
    {
        id: 1,
        url: 'https://www.atlassian.com/software/jira',
        Icon: Jira,
        IconWidth: '4vw',
        IconHeight: '4vw'
    },
    {
        id: 2,
        url: 'https://www.figma.com/',
        Icon: Figma,
        IconWidth: '3.5vw',
        IconHeight: '3.5vw'
    },
    {
        id: 3,
        url: 'https://www.sketch.com/',
        Icon: Sketch,
        IconWidth: '6.5vw',
        IconHeight: '4vw'
    },
    {
        id: 4,
        url: 'https://www.adobe.com/products/illustrator.html',
        Icon: Illustrator,
        IconWidth: '6.5vw',
        IconHeight: '4vw'
    },
    {
        id: 5,
        url: 'https://www.adobe.com/products/photoshop.html',
        Icon: Photoshop,
        IconWidth: '6.5vw',
        IconHeight: '4vw'
    },
    {
        id: 6,
        url: 'https://www.jetbrains.com/webstorm/',
        Icon: WebStorm,
        IconWidth: '3.5vw',
        IconHeight: '4vw'
    },
    {
        id: 7,
        url: 'https://github.com/',
        Icon: GitHub,
        IconWidth: '4vw',
        IconHeight: '4vw'
    },
    {
        id: 8,
        url: 'https://www.typescriptlang.org/',
        Icon: TypeScript,
        IconWidth: '7vw',
        IconHeight: '4vw'
    },
    {
        id: 9,
        url: 'https://reactjs.org/',
        Icon: React,
        IconWidth: '7vw',
        IconHeight: '4vw'
    },
    {
        id: 10,
        url: 'https://nextjs.org/',
        Icon: NextJS,
        IconWidth: '3.25vw',
        IconHeight: '4vw'
    },
    {
        id: 11,
        url: 'https://nodejs.org/en/',
        Icon: NodeJS,
        IconWidth: '5vw',
        IconHeight: '4vw'
    },
    {
        id: 12,
        url: 'https://www.postgresql.org/',
        Icon: PostgreSQL,
        IconWidth: '3.5vw',
        IconHeight: '4vw'
    }
]

export const portfolioBackgroundBlocks = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35
]