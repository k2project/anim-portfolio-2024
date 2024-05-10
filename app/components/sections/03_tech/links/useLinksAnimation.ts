'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseLinksAnimation {
    scale: MotionValue<number>;
}
export default function useLinksAnimation(): IUseLinksAnimation {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const techSectionHeight = TECH_SECTION_H * windowHeight;

    const scale = useTransform(
        scrollY,
        [
            techSectionFromTop + techSectionHeight - windowHeight * 4,
            techSectionFromTop + techSectionHeight - windowHeight * 3,
            techSectionFromTop + techSectionHeight - windowHeight,
            techSectionFromTop + techSectionHeight,
        ],
        [0, 1, 1, 0]
    );

    return { scale };
}
