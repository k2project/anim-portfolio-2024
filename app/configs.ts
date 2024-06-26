import { ISection, Sections } from '@types';

export const MAX_DESKTOP = 1920; //max size of the content wrapper on larger desktops
export const LG_MQ_BREAKPOINT = 1024; //TW lg:
export const MD_MQ_BREAKPOINT = 768; //TW md:
export const SM_MQ_BREAKPOINT = 640; //TW sm:

// Used for svg
export const COLOR_PRIMARY = '#312f38';
export const COLOR_TERTIARY = '#fdffff';
export const STOP_COLOR_PRIMARY = '#e73c37';
export const STOP_COLOR_SECONDARY = '#fbbf24';

const IntroSection: ISection = {
    id: Sections.Intro,
    height: 0, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
};

export const DEVELOPER_SECTION_H = 6;
const DeveloperSection: ISection = {
    id: Sections.Developer,
    height: DEVELOPER_SECTION_H,
    scrollFromTop: 0,
};

export const ABOUT_SECTION_H = 10;
export const ABOUT_SECTION_FROM_TOP = DEVELOPER_SECTION_H;
const AboutSection: ISection = {
    id: Sections.About,
    height: ABOUT_SECTION_H,
    scrollFromTop: ABOUT_SECTION_FROM_TOP,
};

export const TECH_SECTION_FROM_TOP = ABOUT_SECTION_FROM_TOP + ABOUT_SECTION_H;
export const TECH_SECTION_H = 20;
const TechSection: ISection = {
    id: Sections.Tech,
    height: TECH_SECTION_H,
    scrollFromTop: TECH_SECTION_FROM_TOP,
};

export const RECOMMENDATIONS_SECTION_FROM_TOP =
    TECH_SECTION_FROM_TOP + TECH_SECTION_H;
export const RECOMMENDATIONS_SECTION_H = 18;
const RecommendationsSection: ISection = {
    id: Sections.Recommendations,
    height: RECOMMENDATIONS_SECTION_H,
    scrollFromTop: RECOMMENDATIONS_SECTION_FROM_TOP,
};
export const ENDING_SECTION_FROM_TOP =
    RECOMMENDATIONS_SECTION_FROM_TOP + RECOMMENDATIONS_SECTION_H;
export const ENDING_SECTION_H = 5;
const EndingSection: ISection = {
    id: Sections.Ending,
    height: ENDING_SECTION_H,
    scrollFromTop: ENDING_SECTION_FROM_TOP,
};

export const SectionsData: { [key: string]: ISection } = {
    [Sections.Intro]: IntroSection,
    [Sections.Developer]: DeveloperSection,
    [Sections.About]: AboutSection,
    [Sections.Tech]: TechSection,
    [Sections.Recommendations]: RecommendationsSection,
    [Sections.Ending]: EndingSection,
};
