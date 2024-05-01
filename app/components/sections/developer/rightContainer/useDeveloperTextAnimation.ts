import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { DEVELOPER_SECTION_H } from '@configs';
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

    const developerW = windowWidth * 0.45;
    const developerH = developerW * DEVELOPER_RATIO;
    const developerTop = useTransform(
        scrollY,
        [0, DEVELOPER_SECTION_H - windowHeight],
        [-developerH, windowHeight]
    );
    const developerLightH = useTransform(
        scrollY,
        [500, DEVELOPER_SECTION_H - windowHeight],
        [0, DEVELOPER_SECTION_H]
    );

    return {
        developerTop,
        developerW,
        developerH,
        developerLightH,
    };
}
