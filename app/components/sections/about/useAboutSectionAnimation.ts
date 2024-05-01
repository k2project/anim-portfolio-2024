import { ABOUT_SECTION_FROM_TOP, ABOUT_SECTION_H } from '@configs';
import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseAboutSectionAnimation {
    initialY: number;
    sectionY: MotionValue<number>;
}
export default function useAboutSectionAnimation(): IUseAboutSectionAnimation {
    const { scrollY } = useScroll();
    const { windowHeight } = useWindowDimensions();
    const aboutSectionH = ABOUT_SECTION_H * windowHeight;
    const aboutSectionFromTop = ABOUT_SECTION_FROM_TOP * windowHeight;

    const sectionY = useTransform(
        scrollY,
        [
            aboutSectionFromTop - windowHeight * 2,
            aboutSectionFromTop,
            aboutSectionFromTop + aboutSectionH,
            aboutSectionFromTop + aboutSectionH - windowHeight,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return { initialY: windowHeight, sectionY };
}
