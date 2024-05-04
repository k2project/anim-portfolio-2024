'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseSecondaryTechSectionAnimation {
    y: MotionValue<number>;
    initialY: number;
}
export default function useSecondaryTechSectionAnimation(): IUseSecondaryTechSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionH = TECH_SECTION_H * windowHeight;
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const initialY = -windowHeight / 5;
    //Animates the content in
    const y = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 12,
            techSectionFromTop + +windowHeight * 13.5,
        ],
        [initialY, 0]
    );

    return { y, initialY };
}
