'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import useRecommendationsSectionAnimation from './useRecommendationsSectionAnimation';
import {
    recommendationsColLeft,
    recommendationsColMiddle,
    recommendationsColRight,
} from './data';
import AnimatedColumnContainer from './animatedColumnContainer';

export default function RecommendationsSection() {
    const { sectionY, initialY } = useRecommendationsSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Recommendations]}
            initialY={initialY}
            y={sectionY}
        >
            <div className='flex px-2'>
                <AnimatedColumnContainer data={recommendationsColLeft} />
                <AnimatedColumnContainer
                    data={recommendationsColMiddle}
                    reversedAnim
                    className='hidden sm:block'
                />

                <AnimatedColumnContainer
                    data={recommendationsColRight}
                    className='hidden lg:block'
                />
            </div>
        </SectionWrapper>
    );
}
