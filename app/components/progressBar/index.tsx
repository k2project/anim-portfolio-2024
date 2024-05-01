'use client';

import { m, useScroll } from 'framer-motion';

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();
    return (
        <m.div
            style={{ scaleX: scrollYProgress }}
            initial={{ scaleX: 0 }}
            className='h-3 bg-gradient-theme fixed z-10 top-0 left-0 w-full origin-left'
        />
    );
}
