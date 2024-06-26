import { STOP_COLOR_PRIMARY, STOP_COLOR_SECONDARY } from '@configs';

export default function MoneyDashboardLogo({
    style = 'fill-primary',
    stopColorPrimary = STOP_COLOR_PRIMARY,
    stopColorSecondary = STOP_COLOR_SECONDARY,
    gradient = false,
    size = 50,
}: {
    style?: string;
    stopColorPrimary?: string;
    stopColorSecondary?: string;
    gradient?: boolean;
    size?: number;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            id='svgMoneyDashboard'
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
                <rect
                    x='6'
                    y='8'
                    width='12'
                    height='3'
                    rx='1'
                    stroke='none'
                    fill={gradient ? 'url(#grad1)' : ''}
                    strokeLinejoin='round'
                />
                <rect
                    x='6'
                    y='14'
                    width='12'
                    height='3'
                    rx='1'
                    stroke='none'
                    fill={gradient ? 'url(#grad1)' : ''}
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    );
}
