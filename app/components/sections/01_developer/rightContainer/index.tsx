'use client';

import { m } from 'framer-motion';
import DeveloperText from './developerText';
import useDeveloperTextAnimation from './useDeveloperTextAnimation';

export default function RightContainer() {
    const { developerTop, developerW, developerH, developerLightH } =
        useDeveloperTextAnimation();

    return (
        <m.div
            className='relative'
            style={{ top: developerTop }}
            initial={{ top: -developerH }}
        >
            <m.div
                className='absolute overflow-hidden rounded-b-full'
                style={{ height: developerLightH }}
            >
                <DeveloperText size={developerW} />
            </m.div>

            <DeveloperText size={developerW} gradient />
        </m.div>
    );
}
