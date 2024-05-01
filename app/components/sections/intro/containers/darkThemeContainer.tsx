'use client';

import SlideInOut from '@components/textAnimations/slideInOut';
import SharedLogo from './sharedLogo';
import { m } from 'framer-motion';
import useDarkThemeContainer from './useDrakThemeContainer';

export default function DarkThemeContainer() {
    const { opacity, scale } = useDarkThemeContainer();
    return (
        <m.div
            id='bg-dark'
            className='absolute bottom-0 left-0 w-full h-0 bg-primary overflow-hidden'
        >
            <div className='absolute bottom-0 w-full h-screen flex justify-center items-center pb-28'>
                <m.div style={{ opacity, scale }}>
                    <m.div id='logo-dark-container'>
                        <SharedLogo gradient={false} />
                    </m.div>
                </m.div>
                <m.div
                    className='text-center absolute bottom-24 w-full opacity-100'
                    style={{ opacity }}
                >
                    <h3 className='whitespace-pre-line tracking-widest text-sm font-semibold text-tertiary'>
                        <SlideInOut
                            text='SCROLL DOWN'
                            delay={7}
                            showOnAnimEnd={true}
                        />
                    </h3>
                </m.div>
            </div>
        </m.div>
    );
}
