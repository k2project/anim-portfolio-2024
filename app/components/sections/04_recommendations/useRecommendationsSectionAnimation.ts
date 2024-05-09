'use client';

import {
    RECOMMENDATIONS_SECTION_FROM_TOP,
    RECOMMENDATIONS_SECTION_H,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseRecommendationsSectionAnimation {
    sectionY: MotionValue<number>;
    initialY: number;
}
export default function useRecommendationsSectionAnimation(): IUseRecommendationsSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const recommendationsSectionH = RECOMMENDATIONS_SECTION_H * windowHeight;
    const recommendationsSectionFromTop =
        RECOMMENDATIONS_SECTION_FROM_TOP * windowHeight;

    //Move the section up at the end of the scrollable container height
    const sectionY = useTransform(
        scrollY,
        [
            recommendationsSectionFromTop - windowHeight,
            recommendationsSectionFromTop,
            recommendationsSectionFromTop +
                recommendationsSectionH -
                windowHeight,
            recommendationsSectionFromTop + recommendationsSectionH,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return { sectionY, initialY: windowHeight };
}
