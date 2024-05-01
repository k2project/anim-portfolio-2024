'use client';

import { m } from 'framer-motion';
import SoftwareText from './softwareText';
import useSoftwareTextAnimation from './useSoftwareTextAnimation';

export default function LeftContainer() {
    const { softwareTop, softwareW } = useSoftwareTextAnimation();

    return (
        <m.div className='relative' style={{ top: softwareTop }}>
            <SoftwareText size={softwareW} />
        </m.div>
    );
}
