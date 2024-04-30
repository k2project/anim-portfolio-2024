export interface ISection {
    height: number; //scrollable height
    scrollFromTop: number; //position from top
    zIndex: string; //TW custom class
    bg?: string; //TW class
}

export enum Sections {
    Intro = 'intro',
    Developer = 'developer',
    About = 'about',
    Tech = 'tech stuck',
    Recommendations = 'recommendations',
    Skills = 'skills',
    Ending = 'ending',
}
