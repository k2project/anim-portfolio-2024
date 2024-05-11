import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';

export default function DeveloperSection() {
    return (
        <SectionWrapper {...SectionsData[Sections.Developer]} initialY={0}>
            <h2 className='sr-only'>Software Developer</h2>
            <div className='absolute top-0 left-0 w-screen h-full flex justify-center top-screen'>
                <LeftContainer />
                <RightContainer />
            </div>
        </SectionWrapper>
    );
}
