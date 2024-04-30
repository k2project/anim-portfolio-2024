import { AnimationSequence, animate } from 'framer-motion';
import { useEffect } from 'react';

export default function useIntroSection() {
    const sequence: AnimationSequence = [
        // animates logo in
        [
            'path#logo',
            { pathLength: 1, opacity: 1 },
            {
                duration: 2.5,
                delay: 0.5,
            },
        ],
        // animates the themed page up
        [
            'div#bg-themed',
            { width: '100vw' },
            {
                duration: 0.75,
                // ease: [0.48, 0.49, 1, 0.44],
                delay: 2.5,
            },
        ],
        [
            'div#logo-container',
            {
                transform: `rotate(-450deg)`,
                top: '-30px',
                left: '60px',
            },
            {
                duration: 0.5,
                // delay: 0.25,
            },
        ],
        // hides the fixed intro
        [
            'section#intro',
            { width: 0 },
            {
                duration: 1,
                delay: 1.5,
            },
        ],
    ];

    useEffect(() => {
        animate(sequence).then(() => console.log('@@@@@ scroll down'));
    }, []);
}
