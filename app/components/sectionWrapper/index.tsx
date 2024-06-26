'use client';

import useWindowDimensions from '@utils/useWindowDimensions';
import { ISectionWrapperProps } from './types';
import { m } from 'framer-motion';

/**
 *
 * This component is made of the scrollable section and fixed positioned container where the content is placed and its animation happens.
 * The fixed container can be animated in and out of the screen when needed via y and initialY props.
 * max-w-desktop ensures that the content stays within boundaries on extremely large screens
 */

export default function SectionWrapper({
    height,
    children,
    initialY,
    y,
    withMaxDesktopContainer = true,
    id,
    style = '',
}: ISectionWrapperProps) {
    const { windowHeight } = useWindowDimensions();
    return (
        <section
            className='relative'
            style={{ minHeight: height * windowHeight }}
            id={id}
        >
            <m.div
                className={`fixed w-screen h-screen top-0 left-0 flex justify-center ${style}`}
                style={{ y }}
                initial={{ y: initialY }}
            >
                {withMaxDesktopContainer ? (
                    <div className='max-w-desktop flex-1 relative'>
                        {children}
                    </div>
                ) : (
                    children
                )}
            </m.div>
        </section>
    );
}
