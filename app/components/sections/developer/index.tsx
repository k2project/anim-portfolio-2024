'use client';

import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import SoftwareText from './softwareText';
import DeveloperText from './developerText';
import useDeveloperSection from './useDeveloperSection';
import { m } from 'framer-motion';

export default function DeveloperSection() {
    const { developerTop, softwareTop, softwareW, developerW, developerH } =
        useDeveloperSection();
    return (
        <SectionWrapper {...SectionsData[Sections.Developer]} initialY={0}>
            <div className='fixed top-0 left-0 w-screen h-screen flex justify-center overflow-hidden top-screen'>
                <m.div className='relative' style={{ top: softwareTop }}>
                    <SoftwareText size={softwareW} />
                </m.div>
                <m.div
                    className='relative'
                    style={{ top: developerTop }}
                    initial={{ top: -developerH }}
                >
                    <DeveloperText size={developerW} />
                </m.div>
            </div>
        </SectionWrapper>
    );
}
