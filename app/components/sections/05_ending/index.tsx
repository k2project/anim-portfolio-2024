'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import useEndingSectionAnimation from './useEndingSectionAnimation';
import Footer from './footer';
import Heading from './heading';

export default function EndingSection() {
    const { sectionY, initialY } = useEndingSectionAnimation();

    return (
        <SectionWrapper
            {...SectionsData[Sections.Ending]}
            initialY={initialY}
            y={sectionY}
        >
            <div className='relative text-center w-full h-full flex justify-center items-center text-tertiary'>
                <Heading />
                <Footer />
            </div>
        </SectionWrapper>
    );
}
