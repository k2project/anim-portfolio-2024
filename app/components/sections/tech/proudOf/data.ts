import teamworkAnim from './lotties/teamwork.json';
import pencilAnim from './lotties/pencil.json';
import bulbAnim from './lotties/bulb.json';
import smileAnim from './lotties/smile.json';
import briefcaseAnim from './lotties/briefcase.json';
import { ILottieList } from './types';

export const animList: ILottieList[] = [
    {
        animationData: pencilAnim,
        heading: 'Self-taught and keen learner',
    },
    {
        animationData: teamworkAnim,
        heading: 'Committed team player',
    },
    {
        animationData: briefcaseAnim,
        heading: 'Strong work ethics',
    },
    {
        animationData: smileAnim,
        heading: 'Positive "can do" attitude',
    },
    {
        animationData: bulbAnim,
        heading: 'Creative problem solver',
    },
];
