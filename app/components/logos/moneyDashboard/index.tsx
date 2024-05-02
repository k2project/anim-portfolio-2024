export default function MoneyDashboardLogo({
    style = 'fill-primary',
}: {
    style?: string;
}) {
    return (
        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier' className={style}>
                <rect
                    x='5'
                    y='8'
                    width='14'
                    height='3'
                    rx='1'
                    stroke='none'
                    stroke-linejoin='round'
                />
                <rect
                    x='5'
                    y='14'
                    width='14'
                    height='3'
                    rx='1'
                    stroke='none'
                    stroke-linejoin='round'
                />
            </g>
        </svg>
    );
}
