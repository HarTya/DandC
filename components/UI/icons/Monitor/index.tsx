import { WhatWeUseIconsProps } from 'types'

export default function Monitor({
    size
}: WhatWeUseIconsProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g opacity='0.9'>
                <path
                    d='M33.3333 5H6.66659C4.82564 5 3.33325 6.49238 3.33325 8.33333V25C3.33325 26.841 4.82564 28.3333 6.66659 28.3333H33.3333C35.1742 28.3333 36.6666 26.841 36.6666 25V8.33333C36.6666 6.49238 35.1742 5 33.3333 5Z'
                    stroke='#F3DED5'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M13.3333 35H26.6666'
                    stroke='#F3DED5'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M20 28.3334V35'
                    stroke='#F3DED5'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    )
}