'use client';

import DeveloperSection from '@components/sections/developer';
import IntroSection from '@components/sections/intro';
import useSections from './useSections';
import AboutSection from './about';
import TechSection from './tech';
import { m } from 'framer-motion';
import RecommendationsSection from './recommendations';
import EndingSection from './ending';

export default function Sections() {
    const { showScrollableSections, enableScrolling } = useSections();
    return (
        <>
            <IntroSection enableScrolling={enableScrolling} />
            {showScrollableSections && (
                <m.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                        delay: 0.25, // Allows for smooth loading of all sections while the screen dimensions are computed
                    }}
                >
                    <DeveloperSection />
                    <AboutSection />
                    <TechSection />
                    <RecommendationsSection />
                    <EndingSection />
                </m.div>
            )}
        </>
    );
}
