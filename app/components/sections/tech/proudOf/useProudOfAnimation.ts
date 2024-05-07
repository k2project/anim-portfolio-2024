'use client';

import { TECH_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseProudOfAnimation {
    scale: MotionValue<number>;
}
export default function useProudOfAnimation(): IUseProudOfAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const scale = useTransform(
        scrollY,
        [
            techSectionFromTop,
            techSectionFromTop + windowHeight * 16,
            techSectionFromTop + windowHeight * 18,
        ],
        [0, 0, 1]
    );

    return { scale };
}
