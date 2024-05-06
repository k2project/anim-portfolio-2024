'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useTechSectionAnimation from './useTechSectionAnimation';
import MainTech from './mainTech';
import SecondaryTech from './secondaryTech';
import Buttons from './links';

export default function TechSection() {
    const { sectionY, initialY } = useTechSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Tech]}
            initialY={initialY}
            y={sectionY}
        >
            <div className='flex w-full h-full justify-center items-center'>
                <div className='text-center'>
                    <MainTech />
                    <SecondaryTech />
                    <Buttons />
                </div>
            </div>
        </SectionWrapper>
    );
}
