'use client';

import { m } from 'framer-motion';
import useProudOfAnimation from './useProudOfAnimation';
import LottieCarousel from './carousel';

export default function ProudOf() {
    const { scale } = useProudOfAnimation();
    // Positioned absolutely to occupy the space of tech stack when it is animated out
    return (
        <m.div
            className='absolute w-full top-0 h-full left-0 transform-gpu origin-top flex justify-center'
            initial={{ scale: 0 }}
            style={{ scale }}
        >
            <LottieCarousel />
        </m.div>
    );
}
