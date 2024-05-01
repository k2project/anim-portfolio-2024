'use client';

import { m } from 'framer-motion';
import { useState } from 'react';

export default function SlideInOut({
    text,
    delay = 0,
    showOnAnimEnd = false,
}: {
    text: string;
    delay?: number;
    showOnAnimEnd?: boolean;
}) {
    const [hide, setHide] = useState(false);

    const variants = {
        visible: (custom: { index: number; delay: number }) => ({
            x: [150, 0],
            opacity: [0, 1],
            transition: {
                duration: 2,
                times: [0, 1],
                delay: 0.5 + 0.03 * custom.index + custom.delay,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
        hidden: (custom: { index: number; delay: number }) => ({
            x: [0, -40],
            opacity: [1, 0],
            transition: {
                duration: 1.3,
                times: [0, 1],
                delay: 0.1 + 0.03 * custom.index - custom.delay,
                ease: [0.7, 0, 0.84, 0],
            },
        }),
    };
    return (
        <span>
            {text.split('').map((letter, index, string) => (
                <m.span
                    key={letter + index}
                    className='inline-flex'
                    custom={{ index, delay }}
                    initial={{ opacity: 0 }}
                    animate={hide && !showOnAnimEnd ? 'hidden' : 'visible'}
                    variants={variants}
                    onAnimationComplete={() => {
                        if (index === string.length - 1) {
                            setHide(true);
                        }
                    }}
                >
                    {letter.trim() ? letter : <>&nbsp;</>}
                </m.span>
            ))}
        </span>
    );
}
