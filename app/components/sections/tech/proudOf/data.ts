import teamworkAnim from './lotties/teamwork.json';
import pencilAnim from './lotties/pencil.json';
import bulbAnim from './lotties/bulb.json';
import okAnim from './lotties/ok.json';
import shieldAnim from './lotties/shield.json';
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
        animationData: shieldAnim,
        heading: 'Strong work ethics',
    },
    {
        animationData: okAnim,
        heading: 'Positive "can do" attitude',
    },
    {
        animationData: bulbAnim,
        heading: 'Creative problem solver',
    },
];
