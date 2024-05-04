'use client';

import { m } from 'framer-motion';
import { techSecondary } from '../mainTech/techData';
import useSecondaryTechSectionAnimation from './useSecondaryTechAnimation';

export const MAIN_STACK_HEADING_ID = 'tech-main-stack';

export default function SecondaryTech() {
    const { mainY, secondaryY, initialY } = useSecondaryTechSectionAnimation();

    return (
        <div className='relative hidden md:block text-center text-primary md:pb-6 xl:pb-8 overflow-hidden'>
            <m.div
                className='absolute w-full top-0 left-0'
                style={{ y: mainY }}
            >
                <h3 id={MAIN_STACK_HEADING_ID} className='xl:text-xl font-bold'>
                    MAIN TECH STACK
                </h3>
            </m.div>
            <m.div
                className='relative'
                style={{ y: secondaryY }}
                initial={{ y: initialY }}
            >
                <h3 className='xl:text-xl font-bold'>FAMILIAR WITH</h3>
                <p className='text-sm xl:text-lg pt-2 font-medium'>
                    {techSecondary.join(' • ').slice(0, -1)}
                </p>
            </m.div>
        </div>
    );
}
