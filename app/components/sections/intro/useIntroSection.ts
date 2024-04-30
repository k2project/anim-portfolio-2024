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
            'div#bg-dark',
            { height: '100vh' },
            {
                duration: 1.5,
                delay: 2.5,
            },
        ],
        [
            'div#logo-dark-container',
            {
                transform: `rotate(-450deg)`,
                top: '-30px',
                left: '60px',
            },
            {
                duration: 0.5,
            },
        ],
    ];

    useEffect(() => {
        animate(sequence).then(() => console.log('@@@@@ scroll down'));
    }, []);
}
