'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useAboutSectionAnimation from './useAboutSectionAnimation';

export default function AboutSection() {
    const { initialY, sectionY } = useAboutSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.About]}
            initialY={initialY}
            y={sectionY}
        >
            about
        </SectionWrapper>
    );
}
