'use client';

import { ENDING_SECTION_FROM_TOP, ENDING_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseHeadingAnimation {
    headingScale: MotionValue<number>;
}
export default function useHeadingAnimation(): IUseHeadingAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const endingSectionFromTop = ENDING_SECTION_FROM_TOP * windowHeight;
    const endingSectionHeight = ENDING_SECTION_H * windowHeight;

    const headingScale = useTransform(
        scrollY,
        [endingSectionFromTop - windowHeight * 1.5, endingSectionFromTop],
        [0, 1]
    );

    return { headingScale };
}
