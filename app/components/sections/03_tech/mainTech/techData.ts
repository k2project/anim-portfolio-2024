import { ITechData } from './type';
import teamworkAnim from './lotties/teamwork-min.json';
import pencilAnim from './lotties/pencil-min.json';
import bulbAnim from './lotties/bulb-min.json';
import okAnim from './lotties/ok-min.json';
import shieldAnim from './lotties/shield-min.json';

export const techMain: ITechData[] = [
    { src: '/anim-portfolio-2024/assets/html.png', text: 'HTML 5' },
    { src: '/anim-portfolio-2024/assets/css.png', text: 'CSS 3' },
    { src: '/anim-portfolio-2024/assets/tailwind.webp', text: 'Tailwind CSS' },
    { src: '/anim-portfolio-2024/assets/storybook.png', text: 'Storybook' },
    { src: '/anim-portfolio-2024/assets/js.png', text: 'JavaScript' },
    { src: '/anim-portfolio-2024/assets/ts.svg', text: 'Typescript' },
    {
        src: '/anim-portfolio-2024/assets/react.svg',
        text: 'React Native',
    },
    {
        src: '/anim-portfolio-2024/assets/react.svg',
        text: 'React JS',
    },
    { src: '/anim-portfolio-2024/assets/next.png', text: 'Next JS' },
    { src: '/anim-portfolio-2024/assets/redux.png', text: 'Redux' },
    { src: '/anim-portfolio-2024/assets/jest.png', text: 'Jest' },
    {
        src: '/anim-portfolio-2024/assets/githubactions.svg',
        text: 'GitHub Actions',
    },
    { src: '/anim-portfolio-2024/assets/docker.webp', text: 'Docker' },
    {
        animationData: pencilAnim,
        text: 'Self-taught & Avid Learner',
    },
    {
        animationData: teamworkAnim,
        text: 'Committed Team Player',
    },
    {
        animationData: shieldAnim,
        text: 'Strong Work Ethics',
    },
    {
        animationData: okAnim,
        text: 'Positive "can do" Attitude',
    },
    {
        animationData: bulbAnim,
        text: 'Creative Problem Solver',
    },
    { src: '/anim-portfolio-2024/assets/plus.png', text: 'And more...' },
];
