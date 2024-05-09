'use client';

import { AnimationSequence, animate } from 'framer-motion';
import { useEffect, useMemo } from 'react';

export default function useIntroSection(animCallback: () => void) {
    const sequence: AnimationSequence = useMemo(
        () => [
            // animates logo in
            [
                'path#logo',
                { pathLength: 1, opacity: 1 },
                {
                    duration: 1.5,
                    delay: 0.5,
                },
            ],
            // animates the themed page up
            [
                'div#bg-dark',
                { height: '100vh' },
                {
                    duration: 1.5,
                    delay: 2,
                },
            ],
            // rotate the logo to face down for scrolling indication
            [
                'div#logo-dark-container',
                {
                    transform: `rotate(-450deg)`,
                },
                {
                    duration: 0.75,
                },
            ],
        ],
        []
    );

    useEffect(() => {
        animate(sequence).then(() => animCallback());
    }, [sequence, animCallback]);
}
