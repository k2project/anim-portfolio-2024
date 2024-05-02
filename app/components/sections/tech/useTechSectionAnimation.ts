'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseTechSectionAnimation {
    sectionY: MotionValue<number>;
    initialY: number;
}
export default function useTechSectionAnimation(): IUseTechSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionH = TECH_SECTION_H * windowHeight;
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    //Move the section up at the end of the scrollable container height
    const sectionY = useTransform(
        scrollY,
        [
            techSectionFromTop - windowHeight,
            techSectionFromTop,
            techSectionFromTop + techSectionH - windowHeight,
            techSectionFromTop + techSectionH,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return { sectionY, initialY: windowHeight };
}
