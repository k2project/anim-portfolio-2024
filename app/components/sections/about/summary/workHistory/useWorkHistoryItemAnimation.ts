'use client';

import { ABOUT_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseWorkHistoryItemAnimation {
    x: MotionValue<number>;
    opacity: MotionValue<number>;
    logoScale: MotionValue<number>;
}

export default function useWorkHistoryItemAnimation(
    index: number
): IUseWorkHistoryItemAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    // Animates the item in by sliding in from the right
    const x = useTransform(
        scrollY,
        [
            aboutSectionFromTop + windowHeight * 2,
            aboutSectionFromTop + windowHeight * 3 + index * windowHeight,
        ],
        [windowWidth, 0]
    );

    const opacity = useTransform(
        scrollY,
        [
            aboutSectionFromTop + windowHeight * 2,
            aboutSectionFromTop + windowHeight * 2 + index * windowHeight,
        ],
        [0, 1]
    );

    // Zoom in animation
    const logoScale = useTransform(
        scrollY,
        [
            aboutSectionFromTop +
                windowHeight * 3 +
                index * windowHeight +
                windowHeight * 0.25,
            aboutSectionFromTop +
                windowHeight * 3 +
                index * windowHeight +
                windowHeight * 0.75,
        ],
        [0, 1]
    );

    return { x, opacity, logoScale };
}
