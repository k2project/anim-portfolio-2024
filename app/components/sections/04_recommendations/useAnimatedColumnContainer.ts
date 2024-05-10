'use client';

import {
    RECOMMENDATIONS_SECTION_FROM_TOP,
    RECOMMENDATIONS_SECTION_H,
    SM_MQ_BREAKPOINT,
} from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function useAnimatedColumnContainer(reversedAnim: boolean) {
    const { scrollY } = useScroll();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const colRef = useRef<HTMLDivElement | null>(null);
    const [colH, setColH] = useState(windowHeight);
    const scrollFromTop = RECOMMENDATIONS_SECTION_FROM_TOP * windowHeight;
    const recommendationsHeight = RECOMMENDATIONS_SECTION_H * windowHeight;
    const smallDevice = windowWidth < SM_MQ_BREAKPOINT;

    useEffect(() => {
        if (!colRef.current) return;
        const colH = colRef.current.getBoundingClientRect().height;
        setColH(colH);
    }, [windowHeight, windowWidth]);

    // On small devices we keep the animation matching the scroll speed and on the bigger one we scroll the recommendations in before the tech is out of screen
    const initialYResponsive = smallDevice ? 0 : windowHeight * 1.25;
    const initialY = reversedAnim
        ? -colH - windowHeight * 0.3
        : initialYResponsive;
    const finalY = reversedAnim ? windowHeight : -colH;
    const y = useTransform(
        scrollY,
        [
            smallDevice ? scrollFromTop : scrollFromTop - windowHeight * 2,
            scrollFromTop + recommendationsHeight - windowHeight,
        ],
        [initialY, finalY]
    );
    return { y, initialY, colRef };
}
