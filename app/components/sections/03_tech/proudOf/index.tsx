'use client';

import { m } from 'framer-motion';
import useProudOfAnimation from './useProudOfAnimation';
import LottieCarousel from './carousel';
import CarouselItemsHeadings from './carousel/headings';

export default function ProudOf() {
    const { scale } = useProudOfAnimation();
    // Positioned absolutely to occupy the space of tech stack when it is animated out
    return (
        <m.div
            className='w-full absolute bottom-0 left-0 block transform-gpu origin-top'
            initial={{ scale: 0 }}
            style={{ scale }}
        >
            <LottieCarousel />
            <CarouselItemsHeadings />
        </m.div>
    );
}
