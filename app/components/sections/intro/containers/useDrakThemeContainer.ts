import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseDarkThemeContainer {
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
}

export default function useDarkThemeContainer(): IUseDarkThemeContainer {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 40, 200], [1, 1, 0]);
    const scale = useTransform(scrollY, [0, 40, 200], [1, 1, 0]);
    return { opacity, scale };
}
