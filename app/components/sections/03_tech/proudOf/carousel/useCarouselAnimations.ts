import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { useScroll, useTransform } from 'framer-motion';
import { animList } from '../data';

export const CAROUSEL_IN_VIEW = 19; //section scrolled height
export default function useCarouselAnimation(index: number) {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const techSectionH = TECH_SECTION_H * windowHeight;

    // Size of centered item
    const listLength = animList.length;
    const screenSize = Math.min(windowWidth, windowHeight) * 0.4;
    const itemMinSize = 320; //w/h-80
    const itemBaseSize = Math.max(itemMinSize, screenSize);
    // All items sizes
    const itemsSizes = [itemBaseSize, 90, 70, 55, 40];
    const startDistance = techSectionFromTop + windowHeight * CAROUSEL_IN_VIEW;
    const endDistance = techSectionFromTop + techSectionH - windowHeight;
    const scrollableDistance = endDistance - startDistance;
    const scrollInterval = scrollableDistance / listLength;

    const inputRange = Array.from(
        { length: listLength },
        (_, i) => startDistance + scrollInterval * i
    );

    const outputRangeSize = Array.from(
        { length: listLength },
        (_, i) => itemsSizes[Math.abs(i - index)]
    );

    // To keep the biggest item centered on scroll
    // Sum the sizes for each interval and move the array to the left by that value
    // Exclude the base size
    const outputRangeListX = Array.from({ length: listLength }, (_, i) =>
        i === 0 ? 0 : -itemsSizes.slice(1, i + 1).reduce((s, i) => s + i, 0)
    );

    const outputRangeScale = Array.from({ length: listLength }, (_, i) =>
        i === index ? 1 : 0
    );

    const size = useTransform(scrollY, inputRange, outputRangeSize);
    const listX = useTransform(scrollY, inputRange, outputRangeListX);
    const scale = useTransform(scrollY, inputRange, outputRangeScale);

    return { size, listX, itemBaseSize, scale };
}
