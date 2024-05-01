'use client';

import { m } from 'framer-motion';
import useBioAnimation from './useBioAnimation';

export default function Bio() {
    const { headingScale, headingY, textY } = useBioAnimation();

    return (
        <>
            <m.div style={{ y: headingY }}>
                <m.h2
                    style={{ scale: headingScale }}
                    initial={{ scale: 0 }}
                    className='font-bold uppercase text-7xl pb-6 origin-left bg-gradient-theme inline-block text-transparent bg-clip-text'
                >
                    4+ years of experience
                </m.h2>
            </m.div>
            <m.div
                style={{ y: textY }}
                className='uppercase text-xl top-[100vh]'
            >
                <p className='pb-16 font-medium'>
                    working with startups and private clients to design and
                    build robust and scalable mobile and web applications that
                    people love to use.
                </p>
            </m.div>
        </>
    );
}
