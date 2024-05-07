'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useTechSectionAnimation from './useTechSectionAnimation';
import MainTech from './mainTech';
import TechHeadings from './headings';
import Buttons from './links';
import ProudOf from './proudOf';

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
                    <div className='relative'>
                        <MainTech />
                        <ProudOf />
                    </div>
                    <TechHeadings />
                    <Buttons />
                </div>
            </div>
        </SectionWrapper>
    );
}
