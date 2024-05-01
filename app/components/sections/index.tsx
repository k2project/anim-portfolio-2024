'use client';

import DeveloperSection from '@components/sections/developer';
import IntroSection from '@components/sections/intro';
import useSections from './useSections';
import AboutSection from './about';

export default function Sections() {
    const { showScrollableSections, enableScrolling } = useSections();
    return (
        <>
            <IntroSection enableScrolling={enableScrolling} />
            {showScrollableSections && (
                <>
                    <DeveloperSection />
                    <AboutSection />
                </>
            )}
        </>
    );
}
