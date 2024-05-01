'use client';

import { ABOUT_SECTION_FROM_TOP, ABOUT_SECTION_H, MAX_DESKTOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseCirclesAnimation {
    circleSize: number;
    x: MotionValue<number>;
    y: MotionValue<number>;
}
export default function useCirclesAnimation(): IUseCirclesAnimation {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;
    const TW_MD_BREAKING_POINT = 768;
    const isSmallerScreen = windowWidth < TW_MD_BREAKING_POINT;

    const circleSize = Math.min(windowWidth, windowHeight);
    // On larger screens the width is restricted to the MAX_DESKTOP
    const containerWidth = Math.min(windowWidth, MAX_DESKTOP);
    const circleCenteredHorizontally = (containerWidth - circleSize) / 2;
    const circleCenteredVertically = (windowHeight - circleSize) / 2;
    const rightPadding = 40; // Ensures extra room for the right side content
    const xDefaultOutput = isSmallerScreen
        ? circleCenteredHorizontally // on small screens centered horizontally
        : circleCenteredHorizontally -
          Math.min(circleSize, containerWidth) / 2 -
          rightPadding; // on larger screens positioned on the left half of the screen/container
    const yDefaultOutput = isSmallerScreen
        ? circleCenteredVertically + windowHeight / 2 // on smaller screens positioned on the bottom half of the screen
        : circleCenteredVertically; // on the larger screens centered vertically

    const inputRange = [
        aboutSectionFromTop - windowHeight * 1.5,
        aboutSectionFromTop,
        aboutSectionFromTop + windowHeight * 2,
        aboutSectionFromTop + aboutSectionH - windowHeight * 2,
    ];

    const x = useTransform(scrollY, inputRange, [
        windowWidth,
        xDefaultOutput,
        xDefaultOutput,
        circleCenteredHorizontally,
    ]);

    const y = useTransform(scrollY, inputRange, [
        -circleSize / 2,
        yDefaultOutput,
        yDefaultOutput,
        circleCenteredVertically,
    ]);

    return { circleSize, x, y };
}
