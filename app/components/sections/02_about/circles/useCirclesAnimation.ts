'use client';

import {
    ABOUT_SECTION_FROM_TOP,
    ABOUT_SECTION_H,
    MAX_DESKTOP,
    LG_MQ_BREAKPOINT,
    TECH_SECTION_H,
    SM_MQ_BREAKPOINT,
} from '@configs';
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
    const techSectionH = TECH_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    const isSmallerScreen = windowWidth < LG_MQ_BREAKPOINT;
    const isMobileScreen = windowWidth < SM_MQ_BREAKPOINT;

    const circleSize = isSmallerScreen ? windowWidth : windowWidth * 0.7;
    // On larger screens the width is restricted to the MAX_DESKTOP
    const containerWidth = Math.min(windowWidth, MAX_DESKTOP);
    const circleCenteredHorizontally = (containerWidth - circleSize) / 2;
    const circleCenteredVertically = (windowHeight - circleSize) / 2;
    const circleAtTheBottomOfFixedContainer = windowHeight - circleSize;
    const windowPickSize = isMobileScreen
        ? circleSize + windowHeight * 0.1
        : circleSize / 2 - 50;
    const circlePoppingOutOfFixedContainer =
        circleAtTheBottomOfFixedContainer + windowPickSize;
    const rightPadding = 80; // Ensures extra room for the right side content when the circles are placed on the left

    // Default: centered positioning
    const xDefaultOutput = isSmallerScreen
        ? circleCenteredHorizontally // on small screens centered horizontally
        : circleCenteredHorizontally -
          Math.min(circleSize, containerWidth) / 2 -
          rightPadding; // on larger screens positioned on the left half of the screen/container
    const yDefaultOutput = circleCenteredVertically + windowHeight / 2;

    const xInputRange = [
        aboutSectionFromTop - windowHeight * 2,
        aboutSectionFromTop,
        aboutSectionFromTop + windowHeight * 7,
        aboutSectionFromTop +
            aboutSectionH -
            windowHeight * (isSmallerScreen ? 1 : 2),
    ];
    // Circles stick out of the top of the screen for the duration of next (Tech) section scrolling
    const yInputRange = [
        ...xInputRange,
        aboutSectionFromTop + aboutSectionH + windowHeight,
        aboutSectionFromTop + aboutSectionH + techSectionH - windowHeight,
        aboutSectionFromTop + aboutSectionH + techSectionH,
    ];

    // Moves the circles about on the screen in x and y axis - animation
    const x = useTransform(scrollY, xInputRange, [
        windowWidth,
        xDefaultOutput,
        xDefaultOutput,
        circleCenteredHorizontally,
    ]);

    const y = useTransform(scrollY, yInputRange, [
        -circleSize / 2,
        yDefaultOutput,
        yDefaultOutput,
        circlePoppingOutOfFixedContainer - windowPickSize,
        circlePoppingOutOfFixedContainer,
        circlePoppingOutOfFixedContainer,
        circleAtTheBottomOfFixedContainer - windowHeight * 2,
    ]);

    return { circleSize, x, y };
}
