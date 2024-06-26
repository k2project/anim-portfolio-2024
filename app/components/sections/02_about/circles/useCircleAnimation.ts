import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseCircleAnimation {
    rotate: MotionValue<number>;
}
export default function useCircleAnimation({
    inputRange,
    outputRange,
}: {
    inputRange: number[];
    outputRange: number[];
}): IUseCircleAnimation {
    const { scrollY } = useScroll();

    // Rotating anim on scrolling
    const rotate = useTransform(scrollY, inputRange, outputRange, {
        clamp: false,
    });

    return { rotate };
}
