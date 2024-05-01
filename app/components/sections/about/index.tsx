'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useAboutSectionAnimation from './useAboutSectionAnimation';
import Circles from './circles';

export default function AboutSection() {
    const { initialY, sectionY } = useAboutSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.About]}
            initialY={0}
            y={sectionY}
        >
            <Circles />
        </SectionWrapper>
    );
}
