'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import LightThemeContainer from './lightThemeContainer';
import DarkThemeContainer from './darkThemeContainer';
import useIntroSection from './useIntroSection';

export default function IntroSection() {
    useIntroSection();

    return (
        <SectionWrapper {...SectionsData[Sections.Intro]} initialY={0}>
            <LightThemeContainer />
            <DarkThemeContainer />
        </SectionWrapper>
    );
}
