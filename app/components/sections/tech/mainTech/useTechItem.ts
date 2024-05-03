'use client';

import {
    SMALL_SCREEN_BREAKING_POINT,
    TECH_SECTION_FROM_TOP,
    TECH_SECTION_H,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { techMain } from './techData';

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

    // Animating odd and even rows with the same speed and direction
    // Groping in two rows with opposite anim direction based on screen size
    const smallScreenRowGroup = 6;
    const largerScreenRowGroup = 8;
    const rowGrouping = isSmallerScreen
        ? smallScreenRowGroup
        : largerScreenRowGroup;
    const orderedIndex = Math.abs((0 - index) % rowGrouping);
    const order = isReverseAnimIndex
        ? techMain.length - 1 - orderedIndex
        : orderedIndex;
    // The animation speed depends
    const animSpeed = isSmallerScreen ? 0.25 : 0.5;

    const x = useTransform(
        scrollY,
        [
            techSectionFromTop - windowHeight,
            techSectionFromTop + windowHeight * animSpeed * order,
        ],
        [windowHeight * 2 * reverseAnimMultiplier, 0]
    );

    return { x };
}
