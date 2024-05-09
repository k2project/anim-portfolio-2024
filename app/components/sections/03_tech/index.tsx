'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useTechSectionAnimation from './useTechSectionAnimation';
import MainTech from './mainTech';
import Links from './links';
import ProudOf from './proudOf';

export default function TechSection() {
    const { sectionY, initialY } = useTechSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Tech]}
            initialY={initialY}
            y={sectionY}
        >
            <div className='grid gird-rows-[repeat(5,1fr)] w-full h-full'>
                <div />
                <div className='relative row-span-3 text-center'>
                    <MainTech />
                    <ProudOf />
                </div>
                <Links />
            </div>
        </SectionWrapper>
    );
}
