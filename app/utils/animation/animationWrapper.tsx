'use client';
import { LazyMotion, domAnimation } from 'framer-motion';

/**
 *
 * m is used in the exact same way as motion, but unlike motion, the m component doesn't come preloaded with features like animations, layout animations, or the drag gesture.
 */

export default function AnimationWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
