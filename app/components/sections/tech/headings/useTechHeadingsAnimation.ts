'use client';

import { TECH_SECTION_FROM_TOP } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseTechHeadingsAnimation {
    mainY: MotionValue<number>;
    secondaryY: MotionValue<number>;
    secondaryOpacity: MotionValue<number>;
    mainOpacity: MotionValue<number>;
    initialY: number;
}
export default function useTechHeadingsAnimation(): IUseTechHeadingsAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const techSectionFromTop = TECH_SECTION_FROM_TOP * windowHeight;

    const initialY = -20;

    const secondaryInputRange = [
        techSectionFromTop + windowHeight * 12,
        techSectionFromTop + windowHeight * 13.5,
        techSectionFromTop + windowHeight * 15,
        techSectionFromTop + windowHeight * 16,
    ];
    const secondaryY = useTransform(scrollY, secondaryInputRange, [
        initialY,
        0,
        0,
        initialY,
    ]);
    const secondaryOpacity = useTransform(
        scrollY,
        secondaryInputRange,
        [0, 1, 1, 0]
    );
    const mainY = useTransform(
        scrollY,
        [
            techSectionFromTop,
            techSectionFromTop + windowHeight * 10.5,
            techSectionFromTop + windowHeight * 12,
        ],
        [0, 0, initialY]
    );
    const mainOpacity = useTransform(
        scrollY,
        [
            techSectionFromTop + windowHeight * 10.5,
            techSectionFromTop + windowHeight * 12,
        ],
        [1, 0]
    );

    return { secondaryY, initialY, mainY, secondaryOpacity, mainOpacity };
}
