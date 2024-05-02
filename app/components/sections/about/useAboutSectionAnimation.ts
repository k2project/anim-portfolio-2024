'use client';

import { ABOUT_SECTION_FROM_TOP, ABOUT_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseAboutSectionAnimation {
    sectionY: MotionValue<number>;
}
export default function useAboutSectionAnimation(): IUseAboutSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    //Move the section up at the end of the scrollable container height
    const sectionY = useTransform(
        scrollY,
        [
            aboutSectionFromTop + aboutSectionH - windowHeight * 2,
            aboutSectionFromTop + aboutSectionH,
        ],
        [0, -windowHeight]
    );

    return { sectionY };
}
