'use client';

import {
    ABOUT_SECTION_FROM_TOP,
    ABOUT_SECTION_H,
    SMALL_SCREEN_BREAKING_POINT,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseAboutSectionAnimation {
    sectionY: MotionValue<number>;
}
export default function useAboutSectionAnimation(): IUseAboutSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    const isSmallerScreen = windowWidth < SMALL_SCREEN_BREAKING_POINT;

    //Move the section up at the end of the scrollable container height
    //On smaller screen the out animation is delayed as there is no work history shown
    const sectionY = useTransform(
        scrollY,
        [
            aboutSectionFromTop +
                aboutSectionH -
                windowHeight * (isSmallerScreen ? 1 : 2),
            aboutSectionFromTop + aboutSectionH,
        ],
        [0, -windowHeight]
    );

    return { sectionY };
}
