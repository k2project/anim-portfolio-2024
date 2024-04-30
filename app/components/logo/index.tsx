import { ILogoProps } from './types';
import { STOP_COLOR_PRIMARY, STOP_COLOR_SECONDARY } from '@configs';

export default function Logo({
    color = 'black',
    size = 100,
    strokeWidth = 4,
    gradient = false,
    stopColorPrimary = STOP_COLOR_PRIMARY,
    stopColorSecondary = STOP_COLOR_SECONDARY,
}: ILogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 39.378132 41.818489'
            version='1.1'
            id='svg5'
            xmlns='http://www.w3.org/2000/svg'
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
            <g id='layer1' transform='translate(-115.68317,-14.453706)'>
                <path
                    d='M 140.85134,37.803132 153.47896,54.689696 128.82419,54.5231 117.26565,34.995009 129.09146,16.036206 h 24.05431 L 128.82419,54 v 0'
                    id='path871'
                    strokeLinecap='round'
                    fill='none'
                    stroke={gradient ? 'url(#grad1)' : color}
                    strokeWidth={strokeWidth}
                    strokeLinejoin='round'
                    strokeMiterlimit={4}
                />
            </g>
        </svg>
    );
}
