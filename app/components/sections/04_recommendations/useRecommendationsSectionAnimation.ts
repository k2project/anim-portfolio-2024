'use client';

import {
    RECOMMENDATIONS_SECTION_FROM_TOP,
    RECOMMENDATIONS_SECTION_H,
    SM_MQ_BREAKPOINT,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseRecommendationsSectionAnimation {
    sectionY: MotionValue<number>;
    initialY: number;
}
export default function useRecommendationsSectionAnimation(): IUseRecommendationsSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const recommendationsSectionH = RECOMMENDATIONS_SECTION_H * windowHeight;
    const recommendationsSectionFromTop =
        RECOMMENDATIONS_SECTION_FROM_TOP * windowHeight;
    const smallDevices = windowWidth < SM_MQ_BREAKPOINT;

    //On larger screens moves the section up before previous is out of the sight; Smaller follow the scrolling speed.
    const sectionY = useTransform(
        scrollY,
        [
            recommendationsSectionFromTop -
                (smallDevices ? windowHeight : windowHeight * 2),
            recommendationsSectionFromTop - (smallDevices ? 0 : windowHeight),
            recommendationsSectionFromTop +
                recommendationsSectionH -
                windowHeight,
            recommendationsSectionFromTop + recommendationsSectionH,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return { sectionY, initialY: windowHeight };
}
