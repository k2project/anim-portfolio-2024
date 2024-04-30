'use client';

import SlideInOut from '@components/textAnimations/slideInOut';
import SharedLogo from './sharedLogo';
import { m } from 'framer-motion';

export default function DarkThemeContainer() {
    return (
        <m.div
            id='bg-dark'
            className='absolute bottom-0 left-0 w-full h-0 bg-primary overflow-hidden'
        >
            <div className='absolute bottom-0 w-full h-screen flex justify-center items-center pb-28'>
                <m.div id='logo-dark-container'>
                    <SharedLogo gradient={false} />
                </m.div>
                <div className='text-center absolute bottom-24 w-full'>
                    <h3 className='whitespace-pre-line tracking-widest text-sm font-semibold text-tertiary'>
                        <SlideInOut
                            text='SCROLL DOWN'
                            delay={7}
                            showOnAnimEnd={true}
                        />
                    </h3>
                </div>
            </div>
        </m.div>
    );
}
