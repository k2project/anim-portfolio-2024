'use client';

import Logo from '@components/logos/app';
import { m } from 'framer-motion';
import useFooterAnimation from './useFooterAnimation';

export default function Footer() {
    const { rotate, initialRotate, scrollingTextScale, nameTextScale } =
        useFooterAnimation();
    return (
        <div className='absolute bottom-0 left-0 w-full bg-primary p-4 pb-8'>
            <m.div
                className='inline-flex m-auto'
                style={{ rotate }}
                initial={{ rotate: initialRotate }}
            >
                <Logo size={20} color='white' />
            </m.div>
            <div className='relative text-centered pt-2 pb-4 text-xs uppercase'>
                <m.p
                    className='absolute w-full'
                    style={{ scale: scrollingTextScale }}
                >
                    Keep on scrolling
                </m.p>
                <m.p
                    className='absolute w-full'
                    initial={{ scale: 0 }}
                    style={{ scale: nameTextScale }}
                >
                    Krzysztof Kopczynski &copy; 20204
                </m.p>
            </div>
        </div>
    );
}
