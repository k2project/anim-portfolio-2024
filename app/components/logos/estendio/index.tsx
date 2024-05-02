export default function EstendioLogo({
    style = 'fill-primary',
}: {
    style?: string;
}) {
    return (
        <svg
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            preserveAspectRatio='xMidYMid meet'
        >
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier' className={style}>
                <path d='M42.3 22.6H26.9v6.2H41v5H26.9v7.5H43v5.2H21v-29h21.3v5.1z'></path>
            </g>
        </svg>
    );
}
