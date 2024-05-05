'use client';

import { ENDING_SECTION_FROM_TOP, ENDING_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseFooterAnimation {
    rotate: MotionValue<number>;
    initialRotate: number;
    scrollingTextScale: MotionValue<number>;
    nameTextScale: MotionValue<number>;
}
export default function useFooterAnimation(): IUseFooterAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const endingSectionFromTop = ENDING_SECTION_FROM_TOP * windowHeight;
    const endingSectionHeight = ENDING_SECTION_H * windowHeight;

    const initialRotate = 270;
    const rotate = useTransform(
        scrollY,
        [
            endingSectionFromTop + endingSectionHeight - windowHeight * 1.5,
            endingSectionFromTop + endingSectionHeight - windowHeight,
        ],
        [initialRotate, 0]
    );

    const scrollingTextScale = useTransform(
        scrollY,
        [
            endingSectionFromTop + endingSectionHeight - windowHeight * 1.5,
            endingSectionFromTop + endingSectionHeight - windowHeight * 1.25,
        ],
        [1, 0]
    );
    const nameTextScale = useTransform(
        scrollY,
        [
            endingSectionFromTop + endingSectionHeight - windowHeight * 1.25,
            endingSectionFromTop + endingSectionHeight - windowHeight,
        ],
        [0, 1]
    );

    return { rotate, initialRotate, scrollingTextScale, nameTextScale };
}
