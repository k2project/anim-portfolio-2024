'use client';

import {
    SMALL_SCREEN_BREAKING_POINT,
    TECH_SECTION_FROM_TOP,
    TECH_SECTION_H,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseTechItem {
    x: MotionValue<number>;
}

export default function useTechItem(index: number): IUseTechItem {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const techSectionH = TECH_SECTION_H * windowHeight;
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const isSmallerScreen = windowWidth < SMALL_SCREEN_BREAKING_POINT;

    const reverseAnimIndices = isSmallerScreen
        ? [3, 4, 5, 9, 10, 11] // grid 3x4
        : [4, 5, 6, 7]; // grid 4x3
    const isReverseAnimIndex = reverseAnimIndices.includes(index);
    const reverseAnimMultiplier = isReverseAnimIndex ? -1 : 1;

    const orderedIndex = Math.abs((0 - index) % 8);
    const order = isReverseAnimIndex ? 8 - orderedIndex : orderedIndex;

    const x = useTransform(
        scrollY,
        [
            techSectionFromTop - windowHeight,
            techSectionFromTop + windowWidth + (order * windowWidth) / 8,
        ],
        [windowWidth * reverseAnimMultiplier, 0]
    );

    return { x };
}
