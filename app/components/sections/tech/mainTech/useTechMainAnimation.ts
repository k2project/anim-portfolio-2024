'use client';

import { TECH_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseMainTechAnimation {
    y: MotionValue<number>;
}
export default function useMainTechAnimation(): IUseMainTechAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const y = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 15,
            techSectionFromTop + windowHeight * 17,
        ],
        [0, -windowHeight]
    );

    return { y };
}
