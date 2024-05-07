import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { useScroll, useTransform } from 'framer-motion';
import { animList } from '../data';

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
    const startDistance = techSectionFromTop + windowHeight + 5000;
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

    // Opacity per index:
    //-------------- 0   1   2   3   4
    //1st interval: .1, .3, .5, .7, .9
    //2st interval: .3, .1, .3, .5, .7
    //3rd interval: .5, .3, .1, .3. .5
    //4th interval: .7, .5, .3, .1. .3
    //5th interval: .9, .3, .1, .3. .1
    // const outputRangeOpacity = Array.from({ length: listLength }, (_, i) =>
    //     i === index ? 0 : 0.25 * Math.abs(i - index)
    // );
    const outputRangeOpacity = Array.from({ length: listLength }, (_, i) =>
        i === index ? 1 : 0
    );

    // To keep the biggest item centered on scroll
    //Sum the sizes for each interval and move the array to the left by that value
    // Exclude the base size
    const outputRangeListX = Array.from({ length: listLength }, (_, i) =>
        i === 0 ? 0 : -itemsSizes.slice(1, i + 1).reduce((s, i) => s + i, 0)
    );

    const outputRangeScale = Array.from({ length: listLength }, (_, i) =>
        i === index ? 1 : 0
    );
    const outputRangeY = Array.from({ length: listLength }, (_, i) =>
        i === index ? 0 : (i - index) * windowWidth
    );
    const outputRangeX = Array.from({ length: listLength }, (_, i) =>
        i === index ? 0 : (i - index) * windowWidth + 1000
    );

    const size = useTransform(scrollY, inputRange, outputRangeSize);
    const opacity = useTransform(scrollY, inputRange, outputRangeOpacity);
    const listX = useTransform(scrollY, inputRange, outputRangeListX);
    const scale = useTransform(scrollY, inputRange, outputRangeScale);
    const y = useTransform(scrollY, inputRange, outputRangeY);
    const x = useTransform(scrollY, inputRange, outputRangeX);

    return { size, opacity, listX, itemBaseSize, scale, y, x };
}
