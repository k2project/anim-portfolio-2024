'use client';

import { MotionValue, useScroll, useTransform } from 'framer-motion';

interface IUseProgressBarAnimation {
    opacity: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
}
export default function useProgressBarAnimation(): IUseProgressBarAnimation {
    const { scrollY, scrollYProgress } = useScroll();
    const opacity = useTransform(scrollY, [0, 20], [0, 1]);

    return { opacity, scrollYProgress };
}
