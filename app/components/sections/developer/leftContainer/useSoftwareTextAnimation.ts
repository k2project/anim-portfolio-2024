'use client';

import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

import { DEVELOPER_SECTION_H, MAX_DESKTOP } from '@configs';
import { SOFTWARE_RATIO } from './softwareText';

interface IUseSoftwareTextAnimation {
    softwareTop: MotionValue<number>;
    softwareW: number;
}

export default function useSoftwareTextAnimation(): IUseSoftwareTextAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const developerSectionH = DEVELOPER_SECTION_H * windowHeight;

    const softwareW = Math.min(windowWidth, MAX_DESKTOP) * 0.4;
    const softwareH = softwareW * SOFTWARE_RATIO;
    const softwareTop = useTransform(
        scrollY,
        [0, developerSectionH - windowHeight],
        [windowHeight, -softwareH]
    );

    return {
        softwareTop,
        softwareW,
    };
}
