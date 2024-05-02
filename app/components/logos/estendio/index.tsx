import { STOP_COLOR_PRIMARY, STOP_COLOR_SECONDARY } from '@configs';

export default function EstendioLogo({
    style = 'fill-primary',
    stopColorPrimary = STOP_COLOR_PRIMARY,
    stopColorSecondary = STOP_COLOR_SECONDARY,
    gradient = false,
    size = 100,
}: {
    style?: string;
    stopColorPrimary?: string;
    stopColorSecondary?: string;
    gradient?: boolean;
    size?: number;
}) {
    return (
        <svg
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            preserveAspectRatio='xMidYMid meet'
            width={size}
            height={size}
        >
            <defs>
                <linearGradient id='grad1' x1='0%' y1='100%' x2='100%' y2='0%'>
                    <stop offset='0%' style={{ stopColor: stopColorPrimary }} />
                    <stop
                        offset='100%'
                        style={{ stopColor: stopColorSecondary }}
                    />
                </linearGradient>
            </defs>
            <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
            ></g>

            <g id='SVGRepo_iconCarrier' className={style}>
                <path
                    d='M42.3 22.6H26.9v6.2H41v5H26.9v7.5H43v5.2H21v-29h21.3v5.1z'
                    fill={gradient ? 'url(#grad1)' : ''}
                />
            </g>
        </svg>
    );
}
