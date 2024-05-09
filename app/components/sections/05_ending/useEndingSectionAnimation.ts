'use client';

import { ENDING_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseEndingSectionAnimation {
    sectionY: MotionValue<number>;
    initialY: number;
}
export default function useEndingSectionAnimation(): IUseEndingSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const endingSectionFromTop = ENDING_SECTION_FROM_TOP * windowHeight;

    //Move the section up at the end of the scrollable container height
    const sectionY = useTransform(
        scrollY,
        [
            endingSectionFromTop - windowHeight * 2,
            endingSectionFromTop - windowHeight,
        ],
        [windowHeight, 0]
    );

    return { sectionY, initialY: windowHeight };
}
