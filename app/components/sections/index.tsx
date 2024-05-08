'use client';

import { lazy } from 'react';
import IntroSection from '@components/sections/intro';
import useSections from './useSections';
import { m } from 'framer-motion';

const DeveloperSection = lazy(() => import('./developer'));
const AboutSection = lazy(() => import('./about'));
const TechSection = lazy(() => import('./tech'));
const RecommendationsSection = lazy(() => import('./recommendations'));
const EndingSection = lazy(() => import('./ending'));

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
                        delay: 0.75, // Allows for smooth loading of all sections while the screen dimensions are computed
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
