'use client';

import { m } from 'framer-motion';
import useHeadingAnimation from './useHeadingAnimation';

export default function Heading() {
    const {
        headingScale,
        windowHeight,
        paragraphY,
        paragraphOpacity,
        linkY,
        linkOpacity,
    } = useHeadingAnimation();

    return (
        <div>
            <h2 className='sr-only'>
                Calling an experience and dedicated team with passion for
                excellence and mentoring.
            </h2>
            <m.div
                style={{ scale: headingScale }}
                initial={{ scale: 0 }}
                aria-hidden
            >
                <div className='text-6xl md:text-8xl xl:text-10xl font-bold text-gradient-animated py-4 uppercase'>
                    Calling
                </div>
            </m.div>
            <m.div
                className='text-xl font medium px-6'
                style={{ y: paragraphY, opacity: paragraphOpacity }}
                initial={{ y: 50, opacity: 0 }}
            >
                AN EXPERIENCED AND DEDICATED TEAM <br />
                WITH PASSION FOR EXCELLENCE.
            </m.div>

            <m.div
                className='text-lg pt-16'
                style={{ y: linkY, opacity: linkOpacity }}
                initial={{ y: 50, opacity: 0 }}
            >
                <h3 className='font-semibold block'>LET'S WORK TOGETHER!</h3>
                <p>
                    Get in touch on{' '}
                    <a
                        href='https://www.linkedin.com/in/kris-kopczynski-8855001b0/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gradient-theme font-semibold cursor-pointer underline'
                    >
                        LinkedIn.
                    </a>
                </p>
            </m.div>
        </div>
    );
}
