'use client';

import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseDarkThemeContainer {
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
}

export default function useDarkThemeContainer(): IUseDarkThemeContainer {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();

    const opacity = useTransform(
        scrollY,
        [0, 100, windowHeight * 2],
        [1, 1, 0]
    );
    const scale = useTransform(scrollY, [0, 100, windowHeight * 2], [1, 1, 0]);

    return { opacity, scale };
}
