'use client';

import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { DEVELOPER_SECTION_H, MAX_DESKTOP } from '@configs';
import { DEVELOPER_RATIO } from './developerText';

interface IUseDeveloperTextAnimation {
    developerTop: MotionValue<number>;
    developerW: number;
    developerH: number;
    developerAbsH: MotionValue<number>;
    developerTopInit: number;
}

export default function useDeveloperTextAnimation(): IUseDeveloperTextAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const developerSectionH = DEVELOPER_SECTION_H * windowHeight;

    const developerW = Math.min(windowWidth, MAX_DESKTOP) * 0.5;
    const developerH = developerW * DEVELOPER_RATIO;
    const developerTopInit = -developerH - windowHeight;
    const developerTop = useTransform(
        scrollY,
        [windowHeight, developerSectionH - windowHeight],
        [developerTopInit, windowHeight * 2]
    );
    const developerAbsH = useTransform(
        scrollY,
        [developerSectionH / 5, developerSectionH - windowHeight * 2],
        [0, developerSectionH]
    );

    return {
        developerTop,
        developerW,
        developerH,
        developerAbsH,
        developerTopInit,
    };
}
