import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';

import { DEVELOPER_SECTION_H } from '@configs';
import { SOFTWARE_RATIO } from './softwareText';

interface IUseSoftwareTextAnimation {
    softwareTop: MotionValue<number>;
    softwareW: number;
}

export default function useSoftwareTextAnimation(): IUseSoftwareTextAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();

    const softwareW = windowWidth * 0.35;
    const softwareH = softwareW * SOFTWARE_RATIO;
    const softwareTop = useTransform(
        scrollY,
        [0, DEVELOPER_SECTION_H - windowHeight],
        [windowHeight, -softwareH]
    );

    return {
        softwareTop,
        softwareW,
    };
}