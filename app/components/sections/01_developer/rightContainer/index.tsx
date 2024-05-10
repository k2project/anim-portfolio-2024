'use client';

import { m } from 'framer-motion';
import DeveloperText from './developerText';
import useDeveloperTextAnimation from './useDeveloperTextAnimation';

export default function RightContainer() {
    const {
        developerTop,
        developerW,
        developerH,
        developerAbsH,
        developerTopInit,
    } = useDeveloperTextAnimation();

    return (
        <m.div
            className='relative'
            style={{ top: developerTop }}
            initial={{ top: developerTopInit }}
        >
            <m.div
                className='absolute overflow-hidden rounded-b-full'
                style={{ height: developerAbsH }}
            >
                <DeveloperText size={developerW} gradient />
            </m.div>

            <DeveloperText size={developerW} />
        </m.div>
    );
}
