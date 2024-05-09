'use client';

import { ENDING_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseHeadingAnimation {
    headingScale: MotionValue<number>;
    windowHeight: number;
    paragraphY: MotionValue<number>;
    paragraphOpacity: MotionValue<number>;
    linkY: MotionValue<number>;
    linkOpacity: MotionValue<number>;
}
export default function useHeadingAnimation(): IUseHeadingAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const endingSectionFromTop = ENDING_SECTION_FROM_TOP * windowHeight;

    const headingScale = useTransform(
        scrollY,
        [endingSectionFromTop - windowHeight * 1.5, endingSectionFromTop],
        [0, 1]
    );
    const paragraphY = useTransform(
        scrollY,
        [
            endingSectionFromTop + windowHeight,
            endingSectionFromTop + windowHeight * 1.5,
        ],
        [50, 0]
    );
    const paragraphOpacity = useTransform(
        scrollY,
        [
            endingSectionFromTop + windowHeight * 1.25,
            endingSectionFromTop + windowHeight * 1.5,
        ],
        [0, 1]
    );
    const linkY = useTransform(
        scrollY,
        [
            endingSectionFromTop + windowHeight * 2,
            endingSectionFromTop + windowHeight * 2.75,
        ],
        [50, 0]
    );
    const linkOpacity = useTransform(
        scrollY,
        [
            endingSectionFromTop + windowHeight * 2.25,
            endingSectionFromTop + windowHeight * 2.5,
        ],
        [0, 1]
    );

    return {
        headingScale,
        windowHeight,
        paragraphY,
        paragraphOpacity,
        linkY,
        linkOpacity,
    };
}
