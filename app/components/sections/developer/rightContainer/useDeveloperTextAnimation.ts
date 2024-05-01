import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { DEVELOPER_SECTION_H, MAX_DESKTOP } from '@configs';
import { DEVELOPER_RATIO } from './developerText';

interface IUseDeveloperTextAnimation {
    developerTop: MotionValue<number>;
    developerW: number;
    developerH: number;
    developerLightH: MotionValue<number>;
}

export default function useDeveloperTextAnimation(): IUseDeveloperTextAnimation {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();
    const developerSectionH = DEVELOPER_SECTION_H * windowHeight;

    const developerW = Math.min(windowWidth, MAX_DESKTOP) * 0.5;
    const developerH = developerW * DEVELOPER_RATIO;
    const developerTop = useTransform(
        scrollY,
        [0, developerSectionH - windowHeight],
        [-developerH, windowHeight]
    );
    const developerLightH = useTransform(
        scrollY,
        [windowHeight / 2, developerSectionH - windowHeight],
        [0, developerSectionH]
    );

    return {
        developerTop,
        developerW,
        developerH,
        developerLightH,
    };
}
