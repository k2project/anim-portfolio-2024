'use client';

import { m } from 'framer-motion';
import Bio from './bio';
import useSummaryAnimation from './useSummaryAnimation';
import WorkHistory from './workHistory';

export default function Summary() {
    const { y } = useSummaryAnimation();
    return (
        <m.div
            className='relative w-10/12 m-auto lg:m-0 lg:w-1/2 h-1/2 lg:h-full top-[10%] lg:top-0 left-0 lg:left-1/2 flex items-center lg:pb-12 text-tertiary overflow-hidden'
            style={{ y }}
        >
            <div>
                <Bio />
                <WorkHistory />
            </div>
        </m.div>
    );
}
