'use client';

import { m } from 'framer-motion';
import useHeadingAnimation from './useHeadingAnimation';

// import Link from 'next/link';

export default function Heading() {
    const { headingScale } = useHeadingAnimation();

    return (
        <div>
            <m.div style={{ scale: headingScale }} initial={{ scale: 0 }}>
                <h2 className='text-8xl font-bold bg-gradient-animated py-4 uppercase'>
                    HAVING FUN <br /> together
                </h2>
            </m.div>
            {/* <Link
        href='https://www.linkedin.com/in/kris-kopczynski-8855001b0/'
        target='_blank'
        rel='noopener noreferrer'
        className='underline text-lg'
    >
        Message me on LinkedIn
    </Link> */}
        </div>
    );
}
