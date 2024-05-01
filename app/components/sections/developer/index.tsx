import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';

export default function DeveloperSection() {
    return (
        <SectionWrapper {...SectionsData[Sections.Developer]} initialY={0}>
            developer
        </SectionWrapper>
    );
}
