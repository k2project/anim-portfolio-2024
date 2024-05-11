'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useTechSectionAnimation from './useTechSectionAnimation';
import MainTech from './mainTech';
import Links from './links';

export default function TechSection() {
    const { sectionY, initialY } = useTechSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Tech]}
            initialY={initialY}
            y={sectionY}
            withMaxDesktopContainer={false}
            style='z-10' //for links to be interactive when next session slides over
        >
            <div className='absolute h-1/2 bottom-0 left-0 w-full flex items-center'>
                <div className='absolute w-full h-full flex items-center'>
                    <Links />
                </div>
                <MainTech />
            </div>
        </SectionWrapper>
    );
}
