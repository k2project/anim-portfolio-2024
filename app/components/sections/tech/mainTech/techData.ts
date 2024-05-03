import { ITechLogo } from './type';

export const techMainRow1: ITechLogo[] = [
    { src: '/anim-portfolio-2024/assets/html.png', alt: 'HTML 5' },
    { src: '/anim-portfolio-2024/assets/css.png', alt: 'CSS 3' },
    { src: '/anim-portfolio-2024/assets/tailwind.webp', alt: 'TailwindCSS' },
    { src: '/anim-portfolio-2024/assets/storybook.png', alt: 'Storybook' },
];
export const techMainRow2: ITechLogo[] = [
    { src: '/anim-portfolio-2024/assets/js.png', alt: 'JavaScript' },
    { src: '/anim-portfolio-2024/assets/ts.svg', alt: 'Typescript' },
    { src: '/anim-portfolio-2024/assets/react.svg', alt: 'Recta js' },
    { src: '/anim-portfolio-2024/assets/next.png', alt: 'Next js' },
];
export const techMainRow3: ITechLogo[] = [
    { src: '/anim-portfolio-2024/assets/redux.png', alt: 'Redux' },
    { src: '/anim-portfolio-2024/assets/jest.png', alt: 'Jest' },
    { src: '/anim-portfolio-2024/assets/docker.webp', alt: 'Docker' },
    {
        src: '/anim-portfolio-2024/assets/githubactions.svg',
        alt: 'GitHub Actions',
    },
];

export const TECH_ROW_SIZE = Math.max(techMainRow1.length, techMainRow2.length);

// The grid of the list depends on the number of items in a row and changes based on the size of the viewport:
// small screens: 3 item per row
// larger screens: 4 items per row
// First we calculate the list width --> 100vh * 0.5 and then we divide that by the number of items in the row
export const listStyle =
    'grid-cols-3 md:grid-cols-4 gap-4 max-w-[calc(1920px*0.75)]';
export const itemStyle =
    'w-[calc(100vw*.65/3)] h-[calc(100vw*.65/3)] md:w-[calc(100vw*.45/4)] md:h-[calc(100vw*.45/4)] max-h-[calc(1920px*0.45/4)] max-w-[calc(1920px*0.45/4)]';
