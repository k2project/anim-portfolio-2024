'use client';

import DeveloperSection from '@components/sections/developer';
import IntroSection from '@components/sections/intro';
import useSections from './useSections';
import ProgressBar from '@components/progressBar';

export default function Sections() {
    const { showScrollableSections, enableScrolling } = useSections();
    return (
        <>
            <IntroSection enableScrolling={enableScrolling} />
            {showScrollableSections && (
                <>
                    <ProgressBar />
                    <DeveloperSection />
                </>
            )}
        </>
    );
}
