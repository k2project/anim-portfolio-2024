'use client';

import { ABOUT_SECTION_FROM_TOP, ABOUT_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseBioAnimation {
    headingScale: MotionValue<number>;
    textY: MotionValue<number>;
    textOpacity: MotionValue<number>;
    windowHeight: number;
}
export default function useBioAnimation(): IUseBioAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    const headingScale = useTransform(
        scrollY,
        [aboutSectionFromTop, aboutSectionFromTop + windowHeight],
        [0, 1]
    );

    const textY = useTransform(
        scrollY,
        [
            aboutSectionFromTop + windowHeight * 0.75,
            aboutSectionFromTop + windowHeight * 2,
        ],
        [windowHeight, 0]
    );
    const textOpacity = useTransform(
        scrollY,
        [
            aboutSectionFromTop + windowHeight * 1.5,
            aboutSectionFromTop + windowHeight * 2,
        ],
        [0, 1]
    );

    return { headingScale, textY, windowHeight, textOpacity };
}
