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

    const sectionY = useTransform(
        scrollY,
        [
            ABOUT_SECTION_FROM_TOP - windowHeight * 2,
            ABOUT_SECTION_FROM_TOP,
            ABOUT_SECTION_FROM_TOP + ABOUT_SECTION_H,
            ABOUT_SECTION_FROM_TOP + ABOUT_SECTION_H - windowHeight,
        ],
        [windowHeight, 0, 0, -windowHeight]
    );

    return { initialY: windowHeight, sectionY };
}
