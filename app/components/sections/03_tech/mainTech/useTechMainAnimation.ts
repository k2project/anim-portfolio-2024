'use client';

import { TECH_SECTION_FROM_TOP, TECH_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from 'react';

interface IUseMainTechAnimation {
    x: MotionValue<number>;
    initialX: number;
    listRef: RefObject<HTMLUListElement>;
}
export default function useMainTechAnimation(): IUseMainTechAnimation {
    const { scrollY } = useScroll();
    const listRef = useRef<HTMLUListElement>(null);
    const { windowHeight, windowWidth } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;
    const techSectionHeight = TECH_SECTION_H * windowHeight;

    const [listWidth, setListWidth] = useState(windowWidth);
    useEffect(() => {
        if (listRef.current) setListWidth(listRef.current.scrollWidth);
    }, []);

    const initialX = windowWidth;
    const x = useTransform(
        scrollY,
        [
            techSectionFromTop,
            techSectionFromTop + techSectionHeight - windowHeight * 2,
        ],
        [initialX, -listWidth - windowWidth]
    );

    return { x, initialX, listRef };
}
