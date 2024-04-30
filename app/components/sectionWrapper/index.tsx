'use client';

import { ISectionWrapperProps } from './types';
import { m } from 'framer-motion';

/**
 *
 * This component is made of the scrollable section and fixed positioned container where the content is placed and its animation happens.
 * The fixed container can be animated in and out of the screen when needed via y and initialY props.
 * max-w-desktop ensures that the content stays within boundaries on extremely large screens
 */

export default function SectionWrapper({
    bg = '',
    zIndex,
    height,
    children,
    initialY,
    y,
}: ISectionWrapperProps) {
    return (
        <section className='relative' style={{ minHeight: height }}>
            <m.div
                className={`fixed w-screen h-screen top-0 left-0 overflow-hidden flex justify-center ${bg} ${zIndex}`}
                style={{ y }}
                initial={{ y: initialY }}
            >
                <div className='max-w-desktop flex-1 relative'>{children}</div>
            </m.div>
        </section>
    );
}
