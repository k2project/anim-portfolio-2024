'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { CAROUSEL_IN_VIEW } from '../useCarouselAnimations';
import { animList } from '../../data';

interface IUseCarouselItemsHeadingAnimation {
    scale: MotionValue<number>;
    scaleText: MotionValue<number>;
}
export default function useCarouselItemsHeadingAnimation(
    index: number
): IUseCarouselItemsHeadingAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();

    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const techSectionHeight = TECH_SECTION_H * windowHeight;

    const startDistance = techSectionFromTop + windowHeight * CAROUSEL_IN_VIEW;
    const endDistance = techSectionFromTop + techSectionHeight;
    const scrollableDistance = endDistance - startDistance;
    const scrollableDistancePerIndex = scrollableDistance / animList.length;

    const scale = useTransform(
        scrollY,
        [
            startDistance +
                scrollableDistancePerIndex * index -
                2 * windowHeight,
            startDistance + scrollableDistancePerIndex * index - windowHeight,
            startDistance + scrollableDistancePerIndex * index + windowHeight,
            startDistance +
                scrollableDistancePerIndex * index +
                2 * windowHeight,
        ],
        [0, 1, 1, 0]
    );
    const scaleText = useTransform(
        scrollY,
        [
            startDistance +
                scrollableDistancePerIndex * index -
                1.2 * windowHeight,
            startDistance + scrollableDistancePerIndex * index - windowHeight,
            startDistance + scrollableDistancePerIndex * index + windowHeight,
            startDistance +
                scrollableDistancePerIndex * index +
                windowHeight * 1.2,
        ],
        [0, 1, 1, 0]
    );

    return { scale, scaleText };
}
