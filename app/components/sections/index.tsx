'use client';

import { lazy } from 'react';
import IntroSection from '@components/sections/intro';
import useSections from './useSections';
import { m } from 'framer-motion';
import useWindowDimensions from '@utils/useWindowDimensions';
import LandscapeWrapper from '@components/landscapeWrapper';

const ProgressBar = lazy(() => import('@components/progressBar'));
const DeveloperSection = lazy(() => import('./developer'));
const AboutSection = lazy(() => import('./about'));
const TechSection = lazy(() => import('./tech'));
const RecommendationsSection = lazy(() => import('./recommendations'));
const EndingSection = lazy(() => import('./ending'));

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
