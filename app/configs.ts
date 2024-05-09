import { ISection, Sections } from '@types';

export const MAX_DESKTOP = 1920; //max size of the content wrapper on larger desktops
export const SMALL_SCREEN_BREAKING_POINT = 1024; //TW lg:
export const MOBILE_SCREEN_BREAKING_POINT = 768; //TW md:

// Used for svg
export const COLOR_PRIMARY = '#312f38';
export const COLOR_TERTIARY = '#fdffff';
export const STOP_COLOR_PRIMARY = '#e73c37';
export const STOP_COLOR_SECONDARY = '#fbbf24';

const IntroSection: ISection = {
    id: Sections.Intro,
    height: 0, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
    zIndex: 'z-[0]', //sections indices are custom classes from 0 to sections.length -1
};

export const DEVELOPER_SECTION_H = 7;
const DeveloperSection: ISection = {
    id: Sections.Developer,
    height: DEVELOPER_SECTION_H,
    scrollFromTop: 0,
    zIndex: 'z-[1]', //sections indices are custom classes from 0 to sections.length -1
};

export const ABOUT_SECTION_H = 10;
export const ABOUT_SECTION_FROM_TOP = DEVELOPER_SECTION_H;
const AboutSection: ISection = {
    id: Sections.About,
    height: ABOUT_SECTION_H,
    scrollFromTop: ABOUT_SECTION_FROM_TOP,
    zIndex: 'z-[2]', //sections indices are custom classes from 0 to sections.length -1
};

export const TECH_SECTION_FROM_TOP = ABOUT_SECTION_FROM_TOP + ABOUT_SECTION_H;
export const TECH_SECTION_H = 50;
const TechSection: ISection = {
    id: Sections.Tech,
    height: TECH_SECTION_H,
    scrollFromTop: TECH_SECTION_FROM_TOP,
    zIndex: 'z-[3]', //sections indices are custom classes from 0 to sections.length -1
    bg: 'bg-tertiary',
};

export const RECOMMENDATIONS_SECTION_FROM_TOP =
    TECH_SECTION_FROM_TOP + TECH_SECTION_H;
export const RECOMMENDATIONS_SECTION_H = 18;
const RecommendationsSection: ISection = {
    id: Sections.Recommendations,
    height: RECOMMENDATIONS_SECTION_H,
    scrollFromTop: RECOMMENDATIONS_SECTION_FROM_TOP,
    zIndex: 'z-[4]', //sections indices are custom classes from 0 to sections.length -1
    bg: 'bg-primary',
};
export const ENDING_SECTION_FROM_TOP =
    RECOMMENDATIONS_SECTION_FROM_TOP + RECOMMENDATIONS_SECTION_H;
export const ENDING_SECTION_H = 4;
const EndingSection: ISection = {
    id: Sections.Ending,
    height: ENDING_SECTION_H,
    scrollFromTop: ENDING_SECTION_FROM_TOP,
    zIndex: 'z-[5]', //sections indices are custom classes from 0 to sections.length -1
};

export const SectionsData: { [key: string]: ISection } = {
    [Sections.Intro]: IntroSection,
    [Sections.Developer]: DeveloperSection,
    [Sections.About]: AboutSection,
    [Sections.Tech]: TechSection,
    [Sections.Recommendations]: RecommendationsSection,
    [Sections.Ending]: EndingSection,
};
