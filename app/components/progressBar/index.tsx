'use client';

import { m } from 'framer-motion';
import useProgressBarAnimation from './useProgressBarAnimation';

export default function ProgressBar() {
    const { scrollYProgress, opacity } = useProgressBarAnimation();

    return (
        <m.div
            style={{ scaleX: scrollYProgress, opacity }}
            initial={{ scaleX: 0, opacity: 0 }}
            className='h-3 bg-gradient-theme fixed z-10 top-0 left-0 right-0 origin-left'
        />
    );
}
