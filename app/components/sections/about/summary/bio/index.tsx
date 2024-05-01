'use client';

import { m } from 'framer-motion';
import useBioAnimation from './useBioAnimation';

export default function Bio() {
    const { headingScale, headingY, textY } = useBioAnimation();

    return (
        <div className='md:w-10/12'>
            <m.div style={{ y: headingY }}>
                <m.h2
                    style={{ scale: headingScale }}
                    initial={{ scale: 0 }}
                    className='font-bold uppercase text-5xl lg:text-7xl pb-6 origin-left bg-gradient-theme inline-block text-transparent bg-clip-text'
                >
                    4+ years of experience
                </m.h2>
            </m.div>
            <m.div style={{ y: textY }} className='top-[100vh]'>
                <p className='font-medium uppercase text-xl'>
                    Working with startups and private clients to design and
                    build robust and scalable mobile and web applications that
                    people love to use.
                </p>
            </m.div>
        </div>
    );
}
