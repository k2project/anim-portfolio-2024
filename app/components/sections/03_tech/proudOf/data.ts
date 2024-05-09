import teamworkAnim from './lotties/teamwork-min.json';
import pencilAnim from './lotties/pencil-min.json';
import bulbAnim from './lotties/bulb-min.json';
import okAnim from './lotties/ok-min.json';
import shieldAnim from './lotties/shield-min.json';
import { ILottieList } from './types';

export const animList: ILottieList[] = [
    {
        animationData: pencilAnim,
        heading: 'Self-taught & avid learner',
        text: 'I am driven by an insatiable curiosity and passion for lifelong learning, constantly exploring new technologies to expand my expertise.',
        opacity: 0.8,
    },
    {
        animationData: teamworkAnim,
        heading: 'Committed team player',
        text: 'I excel at collaborating seamlessly with cross-functional teams, leveraging my solid communication skills and ability to clearly articulate ideas to drive projects forward efficiently and effectively.',
        opacity: 0.8,
    },
    {
        animationData: shieldAnim,
        heading: 'Strong work ethics',
        text: 'My diligence and an uncompromising pursuit of excellence, is the foundation of my success as a software developer.',
        opacity: 1,
    },
    {
        animationData: okAnim,
        heading: 'Positive "can do" attitude',
        text: 'I approach every challenge with enthusiasm and a steadfast determination to find solutions.',
        opacity: 0.9,
    },
    {
        animationData: bulbAnim,
        heading: 'Creative problem solver',
        text: 'My ability to think creatively and approach software challenges with innovative solutions sets me apart as a versatile and invaluable developer.',
        opacity: 0.7,
    },
];
