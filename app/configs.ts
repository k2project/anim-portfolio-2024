import { ISection, Sections } from '@types';

export const MAX_DESKTOP = 1920; //max size of the content wrapper on larger desktops

// Used for svg
export const COLOR_PRIMARY = '#312f38';
export const COLOR_TERTIARY = '#fdffff';
export const STOP_COLOR_PRIMARY = '#e73c37';
export const STOP_COLOR_SECONDARY = '#fbbf24';

const IntroSection: ISection = {
    height: 0, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
    zIndex: 'z-[0]', //sections indices are custom classes from 0 to sections.length -1
};

export const DEVELOPER_SECTION_H = 3;
const DeveloperSection: ISection = {
    height: DEVELOPER_SECTION_H, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
    zIndex: 'z-[1]', //sections indices are custom classes from 0 to sections.length -1
};

export const ABOUT_SECTION_H = 10;
export const ABOUT_SECTION_FROM_TOP = DEVELOPER_SECTION_H;
const AboutSection: ISection = {
    height: ABOUT_SECTION_H, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: ABOUT_SECTION_FROM_TOP,
    zIndex: 'z-[2]', //sections indices are custom classes from 0 to sections.length -1
};

export const TECH_SECTION_FROM_TOP = DEVELOPER_SECTION_H + ABOUT_SECTION_H;
export const TECH_SECTION_H = 6;
const TechSection: ISection = {
    height: TECH_SECTION_H, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: TECH_SECTION_FROM_TOP,
    zIndex: 'z-[3]', //sections indices are custom classes from 0 to sections.length -1
    bg: 'bg-tertiary',
};

export const SectionsData: { [key: string]: ISection } = {
    [Sections.Intro]: IntroSection,
    [Sections.Developer]: DeveloperSection,
    [Sections.About]: AboutSection,
    [Sections.Tech]: TechSection,
};
