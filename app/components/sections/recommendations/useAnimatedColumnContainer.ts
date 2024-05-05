'use client';

import {
    RECOMMENDATIONS_SECTION_FROM_TOP,
    RECOMMENDATIONS_SECTION_H,
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

    useEffect(() => {
        if (!colRef.current) return;
        const colH = colRef.current.getBoundingClientRect().height;
        setColH(colH);
    }, [windowHeight, windowWidth]);

    const initialY = reversedAnim ? -colH - windowHeight / 2 : windowHeight;
    const finalY = reversedAnim ? windowHeight : -colH;
    const y = useTransform(
        scrollY,
        [
            scrollFromTop - windowHeight,
            scrollFromTop + recommendationsHeight - windowHeight,
        ],
        [initialY, finalY]
    );
    return { y, initialY, colRef };
}
