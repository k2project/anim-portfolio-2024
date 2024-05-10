export interface ISection {
    height: number; //scrollable height as per number of window's heights to scroll for animation compatibility across different devices
    scrollFromTop: number; //position from top as per number of window's height to for animation compatibility across different devicesscroll
    zIndex: string; //TW custom class
    id: string;
}

export enum Sections {
    Intro = 'intro',
    Developer = 'developer',
    About = 'about',
    Tech = 'tech_and_skills',
    Recommendations = 'recommendations',
    Ending = 'ending',
}
