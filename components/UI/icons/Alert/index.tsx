import { QuestionsIconsProps } from 'types'

export default function Alert({
    size
}: QuestionsIconsProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                opacity='0.5'
                d='M49.9999 91.6666C73.0118 91.6666 91.6666 73.0118 91.6666 49.9999C91.6666 26.9881 73.0118 8.33325 49.9999 8.33325C26.9881 8.33325 8.33325 26.9881 8.33325 49.9999C8.33325 73.0118 26.9881 91.6666 49.9999 91.6666Z'
                stroke='#7731DB'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M50 33.3333V49.9999'
                stroke='#7731DB'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M50 66.6667H50.0417'
                stroke='#7731DB'
                strokeWidth='6'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    )
}