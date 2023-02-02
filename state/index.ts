import Monitor from 'components/UI/icons/Monitor'
import Pen from 'components/UI/icons/Pen'
import FrontEnd from 'components/UI/icons/FrontEnd'
import BackEnd from 'components/UI/icons/BackEnd'
import NodeJS from 'components/UI/icons/NodeJS'
import GitHub from 'components/UI/icons/GitHub'
import WebStorm from 'components/UI/icons/WebStorm'
import Figma from 'components/UI/icons/Figma'
import Sketch from 'components/UI/icons/Sketch'
import TypeScript from 'components/UI/icons/TypeScript'
import Illustrator from 'components/UI/icons/Illustrator'
import Photoshop from 'components/UI/icons/Photoshop'
import NextJS from 'components/UI/icons/NextJS'
import PostgreSQL from 'components/UI/icons/PostgreSQL'
import Idea from 'components/UI/icons/Idea'
import Settings from 'components/UI/icons/Settings'
import UploadCloud from 'components/UI/icons/UploadCloud'
import Logo from 'components/UI/Logo'
import Bot from 'components/UI/icons/Bot'
import Alert from 'components/UI/icons/Alert'
import Target from 'components/UI/icons/Target'
import Team from 'components/UI/icons/Team'
import AfterEffects from 'components/UI/icons/AfterEffects'
import GoogleFonts from 'components/UI/icons/GoogleFonts'

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

export const way = [
    {
        id: 1,
        Icon: Idea,
        IconSize: '4vw',
        subheading: 'Створюємо ідею\nмайбутнього проекту',
        text: 'На основі отриманої від Вас\nінформації продумуємо майбутню\nструктуру сайту та наповнення'
    },
    {
        id: 2,
        Icon: Settings,
        IconSize: '4vw',
        subheading: 'Впроваджуємо технічні\nрішення',
        text: 'Використовуємо найпередовіші\nтехнології та налаштовуємо\nефективну рекламу'
    },
    {
        id: 3,
        Icon: UploadCloud,
        IconSize: '4vw',
        subheading: 'Запускаємо Ваш\nпроект',
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
        url: 'https://www.figma.com/',
        Icon: Figma,
        IconWidth: '3.5vw',
        IconHeight: '3.5vw'
    },
    {
        id: 2,
        url: 'https://www.sketch.com/',
        Icon: Sketch,
        IconWidth: '6.5vw',
        IconHeight: '4vw'
    },
    {
        id: 3,
        url: 'https://www.adobe.com/products/aftereffects.html',
        Icon: AfterEffects,
        IconWidth: '3.1vw',
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
        url: 'https://fonts.google.com/',
        Icon: GoogleFonts,
        IconWidth: '3.5vw',
        IconHeight: '4vw'
    },
    {
        id: 7,
        url: 'https://www.jetbrains.com/webstorm/',
        Icon: WebStorm,
        IconWidth: '3.5vw',
        IconHeight: '4vw'
    },
    {
        id: 8,
        url: 'https://github.com/',
        Icon: GitHub,
        IconWidth: '4vw',
        IconHeight: '4vw'
    },
    {
        id: 9,
        url: 'https://www.typescriptlang.org/',
        Icon: TypeScript,
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

export const questions = [
    {
        id: 1,
        Icon: Alert,
        IconSize: '4vw',
        subheading: 'Що для нас важливо?',
        text: 'Наша мета полягає в тому, щоб\nдоставляти нашим клієнтам якісний\nпродукт вчасно, ми завжди ретельно\nставимося до кожного проекту'
    },
    {
        id: 2,
        Icon: Target,
        IconSize: '4vw',
        subheading: 'Яка наша мета?',
        text: 'Наша мета полягає в тому, щоб\nдоставляти нашим клієнтам якісний\nпродукт вчасно, ми завжди ретельно\nставимося до кожного проекту'
    },
    {
        id: 3,
        Icon: Team,
        IconSize: '4vw',
        subheading: 'Яка наша команда?',
        text: 'Наша мета полягає в тому, щоб\nдоставляти нашим клієнтам якісний\nпродукт вчасно, ми завжди ретельно\nставимося до кожного проекту'
    },
]

export const portfolioBackgroundBlocks = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35
]