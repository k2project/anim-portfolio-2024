import SectionWrapper from '@components/sectionWrapper';
import { SectionsData } from '@configs';
import { Sections } from '@types';
import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';

export default function DeveloperSection() {
    return (
        <SectionWrapper {...SectionsData[Sections.Developer]} initialY={0}>
            <div className='fixed top-0 left-0 w-screen h-[calc(100vh + 60px)] flex justify-center top-screen'>
                <LeftContainer />
                <RightContainer />
            </div>
        </SectionWrapper>
    );
}
