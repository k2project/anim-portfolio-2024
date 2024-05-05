'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseSecondaryTechSectionAnimation {
    mainY: MotionValue<number>;
    secondaryY: MotionValue<number>;
    secondaryOpacity: MotionValue<number>;
    mainOpacity: MotionValue<number>;
    initialY: number;
}
export default function useSecondaryTechSectionAnimation(): IUseSecondaryTechSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionH = TECH_SECTION_H * windowHeight;
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const initialY = -30;

    const secondaryY = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 12,
            techSectionFromTop + +windowHeight * 13.5,
        ],
        [initialY, 0]
    );
    const secondaryOpacity = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 12.5,
            techSectionFromTop + +windowHeight * 13.5,
        ],
        [0, 1]
    );
    const mainY = useTransform(
        scrollY,
        [
            techSectionFromTop,
            techSectionFromTop + windowHeight * 11,
            techSectionFromTop + windowHeight * 12.5,
        ],
        [0, 0, -initialY]
    );
    const mainOpacity = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 11.5,
            techSectionFromTop + +windowHeight * 12.5,
        ],
        [1, 0]
    );

    return { secondaryY, initialY, mainY, secondaryOpacity, mainOpacity };
}
