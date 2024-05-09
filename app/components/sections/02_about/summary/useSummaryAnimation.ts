'use client';

import {
    ABOUT_SECTION_FROM_TOP,
    ABOUT_SECTION_H,
    SMALL_SCREEN_BREAKING_POINT,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseSummaryAnimation {
    y: MotionValue<number>;
}

export default function useSummaryAnimation(): IUseSummaryAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;
    const isSmallerScreen = windowWidth < SMALL_SCREEN_BREAKING_POINT;

    // Animates the section out of the screen in top direction
    //On smaller screen the out animation is delayed as there is no work history shown
    const y = useTransform(
        scrollY,
        [
            aboutSectionFromTop +
                aboutSectionH -
                windowHeight * (isSmallerScreen ? 4 : 3.5),
            aboutSectionFromTop +
                aboutSectionH -
                windowHeight * (isSmallerScreen ? 0.5 : 2.5),
        ],
        [0, -windowWidth * 1.25]
    );

    return { y };
}
