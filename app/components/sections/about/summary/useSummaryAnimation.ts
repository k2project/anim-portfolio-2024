'use client';

import { ABOUT_SECTION_FROM_TOP, ABOUT_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseSummaryAnimation {
    y: MotionValue<number>;
}

export default function useSummaryAnimation(): IUseSummaryAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    // Animates the section out of the screen in top direction
    const y = useTransform(
        scrollY,
        [
            aboutSectionFromTop + aboutSectionH - windowHeight * 3.5,
            aboutSectionFromTop + aboutSectionH - windowHeight * 2.5,
        ],
        [0, -windowWidth]
    );

    return { y };
}
