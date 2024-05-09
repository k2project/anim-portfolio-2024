'use client';

import { lazy } from 'react';
import IntroSection from '@components/sections/00_intro';
import useSections from './useSections';
import { m } from 'framer-motion';
import useWindowDimensions from '@utils/useWindowDimensions';
import LandscapeWrapper from '@components/landscapeWrapper';

const ProgressBar = lazy(() => import('@components/progressBar'));
const DeveloperSection = lazy(() => import('./01_developer'));
const AboutSection = lazy(() => import('./02_about'));
const TechSection = lazy(() => import('./03_tech'));
const RecommendationsSection = lazy(() => import('./04_recommendations'));
const EndingSection = lazy(() => import('./05_ending'));

export default function Sections() {
    const { showScrollableSections, enableScrolling } = useSections();
    const { isInSmallScreenLandscape } = useWindowDimensions();

    if (isInSmallScreenLandscape) return <LandscapeWrapper />;

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
                    <ProgressBar />
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
