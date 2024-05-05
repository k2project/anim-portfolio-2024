'use client';

import { m } from 'framer-motion';
import useBioAnimation from './useBioAnimation';

export default function Bio() {
    const { headingScale, textY, textOpacity } = useBioAnimation();

    return (
        <div className='md:w-10/12 sm:pb-20 lg:pb-0'>
            <m.h2
                style={{ scale: headingScale }}
                initial={{ scale: 0 }}
                className='font-bold uppercase text-5xl xl:text-7xl pb-6 origin-left text-gradient-theme'
            >
                Experience, Skills &amp; more...
            </m.h2>
            <m.div
                style={{ y: textY, opacity: textOpacity }}
                initial={{ y: 100, opacity: 0 }}
            >
                <p className='font-medium uppercase text-base lg:text-xl'>
                    Working with startups and private clients to design and
                    build robust and scalable mobile and web applications that
                    people love to use.
                </p>
            </m.div>
        </div>
    );
}
