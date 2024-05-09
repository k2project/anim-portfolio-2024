'use client';

import { m } from 'framer-motion';
import useCarouselItemsHeadingAnimation from './useCarouselItemsHeadingAnimation';

export default function HeadingItem({
    heading,
    text,
    index,
}: {
    index: number;
    text: string;
    heading: string;
}) {
    const { scale, scaleText } = useCarouselItemsHeadingAnimation(index);
    return (
        <>
            <m.h4
                className='text-lg xl:text-3xl font-semibold uppercase transform-gpu origin-center'
                style={{ scale }}
                initial={{ scale: 0 }}
            >
                {heading}
            </m.h4>
            <p className='hidden xl:block w-screen max-w-[700px] relative left-1/2 -translate-x-1/2 pt-2 px-4'>
                <m.span
                    className='transform-gpu block origin-top'
                    style={{ scale: scaleText }}
                >
                    {text}
                </m.span>
            </p>
        </>
    );
}
