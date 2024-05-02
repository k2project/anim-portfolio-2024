'use client';

import {
    MAX_DESKTOP,
    SMALL_SCREEN_BREAKING_POINT,
    TECH_SECTION_FROM_TOP,
    TECH_SECTION_H,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { TECH_ROW_SIZE } from './techData';

interface IUseTechItem {}
export default function useTechItem(): IUseTechItem {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const techSectionH = TECH_SECTION_H * windowHeight;
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const isSmallerScreen = windowWidth < SMALL_SCREEN_BREAKING_POINT;

    const screenSizeDivider = isSmallerScreen ? 2 : 1;

    //Move the section up at the end of the scrollable container height
    const sectionY = useTransform(
        scrollY,
        [
            techSectionFromTop - windowHeight,
            techSectionFromTop,
            techSectionFromTop + techSectionH - windowHeight,
            techSectionFromTop + techSectionH,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return {};
}
