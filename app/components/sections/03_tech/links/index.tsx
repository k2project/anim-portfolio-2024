'use client';

import Link from 'next/link';
import useLinksAnimation from './useLinksAnimation';
import { m } from 'framer-motion';

export default function Links() {
    const { scale } = useLinksAnimation();
    return (
        <m.div
            className='flex justify-center md:space-x-6 w-full text-center px-5 lg:px-0 transform-gpu origin-center'
            style={{ scale }}
            initial={{ scale: 0 }}
        >
            <Link
                href='https://github.com/k2project'
                target='_blank'
                rel='noopener noreferrer'
                className='relative hidden border-none md:inline-block text-xl uppercase rounded-lg font-bold py-6 px-16 overflow-hidden w-64 h-20'
            >
                <span className='bg-gradient-theme absolute w-full h-full left-0 top-0' />
                <span className='bg-primary absolute w-[calc(100%-4px)] h-[calc(100%-4px)] left-[2px] top-[2px] rounded-md' />
                <span className='text-gradient-theme relative'>GitHub</span>
            </Link>

            <a
                href='/anim-portfolio-2024/assets/k.kopczynski.resume.pdf'
                download
                target='_blank'
                rel='noopener noreferrer'
                className='border-contrast border-none py-6 px-16 text-xl text-primary font-bold uppercase rounded-lg bg-gradient-theme w-full md:w-64 h-20 '
            >
                RESUME
            </a>
        </m.div>
    );
}
