'use client';

import { m } from 'framer-motion';
import { techSecondary } from '../mainTech/techData';
import useSecondaryTechSectionAnimation from './useSecondaryTechAnimation';

export default function SecondaryTech() {
    const { y, initialY } = useSecondaryTechSectionAnimation();

    return (
        <div className='hidden md:block text-center text-primary md:pb-6 xl:pb-8 overflow-hidden'>
            <m.div className='relative' style={{ y }} initial={{ y: initialY }}>
                <h3 className='xl:text-xl font-bold'>FAMILIAR WITH</h3>
                <p className='text-sm xl:text-lg pt-2 font-medium'>
                    {techSecondary.join(' • ').slice(0, -1)}
                </p>
            </m.div>
        </div>
    );
}
