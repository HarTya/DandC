import { WayIconsProps } from 'types'

export default function Idea({
    size
}: WayIconsProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 86 106'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M61.6291 84.6715L61.6667 83.1351C61.6667 79.3513 62.5556 76.3063 64.3333 74C76.7778 63.1552 83 52.7837 83 42.8855C83 20.8574 65.0914 3 43 3C20.9086 3 3 20.8574 3 42.8855C3 52.7216 9.22222 63.0931 21.6667 74C23.2469 76.05 24.1248 78.6838 24.3004 81.9012L24.3489 84.1265L24.4046 85.2457L24.5137 86.4711C24.537 86.683 24.5632 86.8984 24.5924 87.1169L24.8067 88.4613C25.9988 94.8741 30.027 103 43 103C55.973 103 60.0012 94.8741 61.1933 88.4613L61.4076 87.1169L61.5484 85.8465L61.6291 84.6715Z'
                stroke='#7731DB'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M24.6675 80.8096C30.4313 82.9729 36.5421 84.0545 42.9998 84.0545C49.4575 84.0545 55.5686 82.9729 61.3331 80.8096'
                stroke='#7731DB'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <rect
                opacity='0.5'
                x='46'
                y='25'
                width='20'
                height='6'
                rx='3'
                transform='rotate(90 46 25)'
                fill='#7731DB'
            />
            <rect
                opacity='0.5'
                x='67.5981'
                y='33.8397'
                width='20'
                height='6'
                rx='3'
                transform='rotate(120 67.5981 33.8397)'
                fill='#7731DB'
            />
            <rect
                opacity='0.5'
                x='23.5981'
                y='30.8398'
                width='20'
                height='6'
                rx='3'
                transform='rotate(60 23.5981 30.8398)'
                fill='#7731DB'
            />
        </svg>
    )
}