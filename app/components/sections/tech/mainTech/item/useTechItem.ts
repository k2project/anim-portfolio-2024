'use client';

import { TECH_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseTechItem {
    rotateY: MotionValue<number>;
}

export default function useTechItem(index: number): IUseTechItem {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const rotateY = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight / 4 + windowHeight * index,
            techSectionFromTop + windowHeight + windowHeight * index,
        ],
        [0, 180]
    );

    return { rotateY };
}
