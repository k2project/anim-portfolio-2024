'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import React from 'react';
import useRecommendationsSectionAnimation from './useRecommendationsSectionAnimation';

export default function RecommendationsSection() {
    const { sectionY, initialY } = useRecommendationsSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Recommendations]}
            initialY={initialY}
            y={sectionY}
        >
            Recommendations
        </SectionWrapper>
    );
}
