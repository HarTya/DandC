import { ArrowIconsProps } from 'types'

export default function RightArrow({
    size
}: ArrowIconsProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 158 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M117 4L154 45.7247L117 87.4493'
                stroke='#F3DED5'
                strokeWidth='8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M4 46.281L154 46.281'
                stroke='#F3DED5'
                strokeWidth='8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}