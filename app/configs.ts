import { ISection, Sections } from '@types';

export const MAX_DESKTOP = 1920; //max size of the content wrapper on larger desktops

// Used for svg
export const COLOR_TERTIARY = '#fdffff';
export const STOP_COLOR_PRIMARY = '#e73c37';
export const STOP_COLOR_SECONDARY = '#fbbf24';

const IntroSection: ISection = {
    height: 0, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
    zIndex: 'z-[0]', //sections indices are custom classes from 0 to sections.length -1
};
export const DeveloperSection_H = 5000;
const DeveloperSection: ISection = {
    height: DeveloperSection_H, //the intro's animation is automated and doesn't depend on scrolling
    scrollFromTop: 0,
    zIndex: 'z-[1]', //sections indices are custom classes from 0 to sections.length -1
};
export const SectionsData: { [key: string]: ISection } = {
    [Sections.Intro]: IntroSection,
    [Sections.Developer]: DeveloperSection,
};