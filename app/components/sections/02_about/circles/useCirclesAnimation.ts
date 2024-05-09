'use client';

import {
    ABOUT_SECTION_FROM_TOP,
    ABOUT_SECTION_H,
    MAX_DESKTOP,
    LG_MQ_BREAKPOINT,
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
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    const isSmallerScreen = windowWidth < LG_MQ_BREAKPOINT;

    const circleSize = Math.min(windowWidth, windowHeight);
    // On larger screens the width is restricted to the MAX_DESKTOP
    const containerWidth = Math.min(windowWidth, MAX_DESKTOP);
    const circleCenteredHorizontally = (containerWidth - circleSize) / 2;
    const circleCenteredVertically = (windowHeight - circleSize) / 2;
    const rightPadding = 80; // Ensures extra room for the right side content when the circles are placed on the left
    const topOffset = windowHeight * 0.2;

    // Default: centered positioning
    const xDefaultOutput = isSmallerScreen
        ? circleCenteredHorizontally // on small screens centered horizontally
        : circleCenteredHorizontally -
          Math.min(circleSize, containerWidth) / 2 -
          rightPadding; // on larger screens positioned on the left half of the screen/container
    const yDefaultOutput = isSmallerScreen
        ? circleCenteredVertically + windowHeight / 2 // on smaller screens positioned on the bottom half of the screen
        : circleCenteredVertically + topOffset; // on the larger screens centered vertically with some offset on top

    const inputRange = [
        aboutSectionFromTop - windowHeight * 1.5,
        aboutSectionFromTop,
        aboutSectionFromTop + windowHeight * 7,
        aboutSectionFromTop +
            aboutSectionH -
            windowHeight * (isSmallerScreen ? 1 : 2),
    ];

    // Moves the circles about on the screen in x and y axis - animation
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
        circleCenteredVertically - 50, //Prevents cutting out the bottom of the circles containers when animating out to the top ( due to overflowing property of the parent container)
    ]);

    return { circleSize, x, y };
}
