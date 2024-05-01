import useWindowDimensions from '@utils/useWindowDimensions';
import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { DEVELOPER_RATIO } from './developerText';
import { SOFTWARE_RATIO } from './softwareText';
import { DeveloperSection_H } from '@configs';

interface IUseDeveloperSection {
    developerTop: MotionValue<number>;
    softwareTop: MotionValue<number>;
    softwareW: number;
    developerW: number;
    developerH: number;
}

export default function useDeveloperSection(): IUseDeveloperSection {
    const { scrollY } = useScroll();
    const { windowWidth, windowHeight } = useWindowDimensions();

    const developerW = windowWidth * 0.45;
    const developerH = developerW * DEVELOPER_RATIO;
    const developerTop = useTransform(
        scrollY,
        [0, DeveloperSection_H - windowHeight],
        [-developerH, windowHeight]
    );
    const softwareW = windowWidth * 0.35;
    const softwareH = softwareW * SOFTWARE_RATIO;
    const softwareTop = useTransform(
        scrollY,
        [0, DeveloperSection_H - windowHeight],
        [windowHeight, -softwareH]
    );

    return { developerTop, softwareTop, softwareW, developerW, developerH };
}
