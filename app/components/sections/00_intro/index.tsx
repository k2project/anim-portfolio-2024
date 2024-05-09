'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import LightThemeContainer from './containers/lightThemeContainer';
import DarkThemeContainer from './containers/darkThemeContainer';
import useIntroSection from './useIntroSection';

export default function IntroSection({
    enableScrolling,
}: {
    enableScrolling: () => void;
}) {
    useIntroSection(enableScrolling);

    return (
        <SectionWrapper
            {...SectionsData[Sections.Intro]}
            initialY={0}
            withMaxDesktopContainer={false}
        >
            <LightThemeContainer />
            <DarkThemeContainer />
        </SectionWrapper>
    );
}
