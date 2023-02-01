import { ToolsIconsProps } from 'types'

export default function WebStorm({
    width, height
}: ToolsIconsProps) {
    return (
        <svg
            width={width}
            height={height}
            enableBackground='new 0 0 70 70'
            version='1.1'
            viewBox='0 0 70 70'
            xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'
        >
            <linearGradient
                id='c'
                x1='25.068'
                x2='43.183'
                y1='1.4599'
                y2='66.675'
                gradientUnits='userSpaceOnUse'
            >
                <stop
                    stopColor='#00CDD7'
                    offset='.2849'
                />
                <stop
                    stopColor='#2086D7'
                    offset='.9409'
                />
            </linearGradient>
            <polygon
                points='9.4 63.3 0 7.3 17.5 0.1 28.6 6.7 38.8 1.2 60.1 9.4 48.1 70'
                fill='url(#c)'
            />
            <linearGradient
                id='b'
                x1='30.72'
                x2='61.365'
                y1='9.7343'
                y2='54.671'
                gradientUnits='userSpaceOnUse'
            >
                <stop
                    stopColor='#FFF045'
                    offset='.1398'
                />
                <stop
                    stopColor='#00CDD7'
                    offset='.3656'
                />
            </linearGradient>
            <polygon
                points='70 23.7 61 1.4 44.6 0 19.3 24.3 26.1 55.6 38.8 64.6 70 46 62.3 31.7'
                fill='url(#b)'
            />
            <linearGradient
                id='a'
                x1='61.082'
                x2='65.106'
                y1='15.29'
                y2='29.544'
                gradientUnits='userSpaceOnUse'
            >
                <stop
                    stopColor='#00CDD7'
                    offset='.2849'
                />
                <stop
                    stopColor='#2086D7'
                    offset='.9409'
                />
            </linearGradient>
            <polygon
                points='56 20.4 62.3 31.7 70 23.7 64.4 9.8'
                fill='url(#a)'
            />
            <rect
                x='13.4'
                y='13.4'
                width='43.2'
                height='43.2'
            />
            <rect
                x='17.5'
                y='48.5'
                width='16.2'
                height='2.7'
                fill='#fff'
            />
            <path
                d='m38.7 34.3 2.3-2.8c1.6 1.3 3.3 2.2 5.3 2.2 1.6 0 2.5-0.6 2.5-1.7v-0.1c0-1-0.6-1.5-3.6-2.3-3.6-0.9-5.8-1.9-5.8-5.5v-0.1c0-3.3 2.6-5.4 6.2-5.4 2.6 0 4.8 0.8 6.6 2.3l-2 3c-1.6-1.1-3.1-1.8-4.6-1.8s-2.3 0.7-2.3 1.6v0.1c0 1.2 0.8 1.6 3.8 2.4 3.6 1 5.6 2.3 5.6 5.4v0.1c0 3.6-2.7 5.6-6.5 5.6-2.7-0.1-5.4-1.1-7.5-3'
                fill='#fff'
            />
            <polygon
                points='35.2 19 32.5 29.4 29.5 19 26.5 19 23.4 29.4 20.7 19 16.6 19 21.7 36.9 25 36.9 28 26.5 30.9 36.9 34.3 36.9 39.4 19'
                fill='#fff'
            />
        </svg>
    )
}