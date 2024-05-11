import {
    COLOR_TERTIARY,
    STOP_COLOR_PRIMARY,
    STOP_COLOR_SECONDARY,
} from '@configs';

export const DEVELOPER_RATIO = 244.32394 / 51.987198;

export default function Developer({
    size = 550,
    fill = COLOR_TERTIARY,
    stroke = COLOR_TERTIARY,
    strokeWidth = 6,
    gradient = false,
}: {
    size?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    gradient?: boolean;
}) {
    const pathFill = gradient ? 'url(#grad1)' : fill;
    const pathStroke = gradient ? 'url(#grad1)' : stroke;
    return (
        <svg
            width={size}
            height={size * DEVELOPER_RATIO}
            viewBox='0 0 51.987198 244.32394'
            version='1.1'
            id='svgDeveloperText'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient id='grad1' x1='0%' y1='100%' x2='100%' y2='0%'>
                    <stop
                        offset='0%'
                        style={{ stopColor: STOP_COLOR_PRIMARY }}
                    />
                    <stop
                        offset='100%'
                        style={{ stopColor: STOP_COLOR_SECONDARY }}
                    />
                </linearGradient>
            </defs>
            <g id='layer1' transform='translate(-216.86463,9.3964513)'>
                <g
                    transform='matrix(0,-0.26458333,0.26458333,0,130.09271,355.62375)'
                    id='text1900'
                >
                    <path
                        d='m 561.33037,476.8884 h -26.49599 v -12.288 h -0.38401 q -1.72799,2.496 -4.608,5.184 -2.688,2.496 -6.52799,4.608 -3.648,2.112 -8.25601,3.456 -4.41599,1.344 -9.216,1.344 -10.368,0 -18.81599,-3.456 -8.44801,-3.648 -14.59201,-9.984 -5.952,-6.528 -9.216,-15.36 -3.26399,-8.832 -3.26399,-19.392 0,-9.792 2.88,-18.624 3.072,-9.024 8.44799,-15.936 5.568,-6.912 13.44,-10.944 7.87201,-4.224 17.856,-4.224 9.024,0 16.704,2.88 7.872,2.688 12.86401,9.408 h 0.384 v -61.824 h 28.79999 z m -26.49599,-46.656 q 0,-10.56 -6.144,-17.088 -5.952,-6.528 -16.89601,-6.528 -10.944,0 -17.088,6.528 -5.952,6.528 -5.952,17.088 0,10.56 5.952,17.088 6.144,6.528 17.088,6.528 10.94401,0 16.89601,-6.528 6.144,-6.528 6.144,-17.088 z'
                        id='path5259'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 672.85537,460.7604 q -6.91199,8.832 -17.472,13.632 -10.56,4.8 -21.888,4.8 -10.75199,0 -20.352,-3.456 -9.408,-3.456 -16.51199,-9.792 -6.912,-6.528 -10.94401,-15.552 -4.03199,-9.024 -4.03199,-20.16 0,-11.136 4.03199,-20.16 4.03201,-9.024 10.94401,-15.36 7.10399,-6.528 16.51199,-9.984 9.60001,-3.456 20.352,-3.456 9.984,0 18.048,3.456 8.25601,3.456 13.82401,9.984 5.76,6.336 8.832,15.36 3.072,9.024 3.072,20.16 v 9.024 h -66.81601 q 1.728,8.256 7.48801,13.248 5.76,4.8 14.208,4.8 7.10399,0 11.904,-3.072 4.99199,-3.264 8.64,-8.256 z m -24.384,-41.088 q 0.192,-7.296 -4.8,-12.48 -4.99199,-5.184 -12.864,-5.184 -4.79999,0 -8.448,1.536 -3.648,1.536 -6.336,4.032 -2.496,2.304 -4.03199,5.568 -1.34401,3.072 -1.53601,6.528 z'
                        id='path5261'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 684.99338,383.5764 h 31.104 l 23.616,63.36 h 0.384 l 21.88799,-63.36 h 28.99201 l -36.864,93.312 h -30.52801 z'
                        id='path5263'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 889.98037,460.7604 q -6.91199,8.832 -17.472,13.632 -10.56,4.8 -21.888,4.8 -10.75199,0 -20.352,-3.456 -9.408,-3.456 -16.51199,-9.792 -6.912,-6.528 -10.94401,-15.552 -4.03199,-9.024 -4.03199,-20.16 0,-11.136 4.03199,-20.16 4.03201,-9.024 10.94401,-15.36 7.10399,-6.528 16.51199,-9.984 9.60001,-3.456 20.352,-3.456 9.984,0 18.048,3.456 8.25601,3.456 13.82401,9.984 5.76,6.336 8.832,15.36 3.072,9.024 3.072,20.16 v 9.024 h -66.81601 q 1.728,8.256 7.48801,13.248 5.76,4.8 14.208,4.8 7.10399,0 11.904,-3.072 4.99199,-3.264 8.64,-8.256 z m -24.384,-41.088 q 0.192,-7.296 -4.8,-12.48 -4.99199,-5.184 -12.864,-5.184 -4.79999,0 -8.448,1.536 -3.648,1.536 -6.336,4.032 -2.496,2.304 -4.03199,5.568 -1.34401,3.072 -1.53601,6.528 z'
                        id='path5265'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 912.29437,331.7364 h 28.80001 v 145.152 h -28.80001 z'
                        id='path5267'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 958.32938,430.2324 q 0,-11.136 4.03199,-20.16 4.032,-9.024 10.94401,-15.36 7.10399,-6.528 16.51199,-9.984 9.6,-3.456 20.35203,-3.456 10.752,0 20.16,3.456 9.6,3.456 16.512,9.984 7.104,6.336 11.136,15.36 4.032,9.024 4.032,20.16 0,11.136 -4.032,20.16 -4.032,9.024 -11.136,15.552 -6.912,6.336 -16.512,9.792 -9.408,3.456 -20.16,3.456 -10.75203,0 -20.35203,-3.456 -9.408,-3.456 -16.51199,-9.792 -6.91201,-6.528 -10.94401,-15.552 -4.03199,-9.024 -4.03199,-20.16 z m 28.79999,0 q 0,10.56 5.952,17.088 6.144,6.528 17.08803,6.528 10.944,0 16.896,-6.528 6.144,-6.528 6.144,-17.088 0,-10.56 -6.144,-17.088 -5.952,-6.528 -16.896,-6.528 -10.94403,0 -17.08803,6.528 -5.952,6.528 -5.952,17.088 z'
                        id='path5269'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 1081.4734,383.5764 h 26.496 v 12.288 h 0.384 q 1.728,-2.496 4.416,-4.992 2.88,-2.688 6.528,-4.8 3.84,-2.112 8.256,-3.456 4.416,-1.344 9.408,-1.344 10.368,0 18.816,3.648 8.448,3.456 14.4,9.984 6.144,6.336 9.408,15.168 3.264,8.832 3.264,19.392 0,9.792 -3.072,18.816 -2.88,8.832 -8.448,15.744 -5.376,6.912 -13.248,11.136 -7.872,4.032 -17.856,4.032 -9.024,0 -16.896,-2.688 -7.68,-2.88 -12.672,-9.6 h -0.384 v 53.76 h -28.8 z m 26.496,46.656 q 0,10.56 5.952,17.088 6.144,6.528 17.088,6.528 10.944,0 16.896,-6.528 6.144,-6.528 6.144,-17.088 0,-10.56 -6.144,-17.088 -5.952,-6.528 -16.896,-6.528 -10.944,0 -17.088,6.528 -5.952,6.528 -5.952,17.088 z'
                        id='path5271'
                        stroke={pathStroke}
                        fill={pathFill}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 1288.2304,460.7604 q -6.912,8.832 -17.472,13.632 -10.56,4.8 -21.888,4.8 -10.752,0 -20.352,-3.456 -9.408,-3.456 -16.512,-9.792 -6.912,-6.528 -10.944,-15.552 -4.032,-9.024 -4.032,-20.16 0,-11.136 4.032,-20.16 4.032,-9.024 10.944,-15.36 7.104,-6.528 16.512,-9.984 9.6,-3.456 20.352,-3.456 9.984,0 18.048,3.456 8.256,3.456 13.824,9.984 5.76,6.336 8.832,15.36 3.072,9.024 3.072,20.16 v 9.024 h -66.816 q 1.728,8.256 7.488,13.248 5.76,4.8 14.208,4.8 7.104,0 11.904,-3.072 4.992,-3.264 8.64,-8.256 z m -24.384,-41.088 q 0.192,-7.296 -4.8,-12.48 -4.992,-5.184 -12.864,-5.184 -4.8,0 -8.448,1.536 -3.648,1.536 -6.336,4.032 -2.496,2.304 -4.032,5.568 -1.344,3.072 -1.536,6.528 z'
                        id='path5273'
                        fill={pathFill}
                        stroke={pathStroke}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                    <path
                        d='m 1310.1604,383.5764 h 28.8 v 14.976 h 0.384 q 4.608,-8.64 10.944,-12.864 6.336,-4.416 15.936,-4.416 2.496,0 4.992,0.192 2.496,0.192 4.608,0.768 v 26.304 q -3.072,-0.96 -6.144,-1.344 -2.88,-0.576 -6.144,-0.576 -8.256,0 -13.056,2.304 -4.8,2.304 -7.488,6.528 -2.496,4.032 -3.264,9.792 -0.768,5.76 -0.768,12.672 v 38.976 h -28.8 z'
                        id='path5275'
                        fill={pathFill}
                        stroke={pathStroke}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit='4'
                        strokeDasharray='none'
                    />
                </g>
            </g>
        </svg>
    );
}
