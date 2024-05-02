'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useTechSectionAnimation from './useTechSectionAnimation';

export default function TechSection() {
    const { sectionY, initialY } = useTechSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Tech]}
            initialY={initialY}
            y={sectionY}
        >
            tech
        </SectionWrapper>
    );
}
