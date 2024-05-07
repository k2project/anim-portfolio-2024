import teamworkAnim from './lotties/teamwork.json';
import pencilAnim from './lotties/pencil.json';
import bulbAnim from './lotties/bulb.json';
import okAnim from './lotties/ok.json';
import shieldAnim from './lotties/shield.json';
import { ILottieList } from './types';

export const animList: ILottieList[] = [
    {
        animationData: pencilAnim,
        heading: 'Self-taught & avid learner',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur itaque, minima sed veniam modi esse eveniet eat blanditiis impedit',
    },
    {
        animationData: teamworkAnim,
        heading: 'Committed team player',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur itaque, minima sed veniam modi esse eveniet eat blanditiis impedit',
    },
    {
        animationData: shieldAnim,
        heading: 'Strong work ethics',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur itaque, minima sed veniam modi esse eveniet eat blanditiis impedit',
    },
    {
        animationData: okAnim,
        heading: 'Positive "can do" attitude',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur itaque, minima sed veniam modi esse eveniet eat blanditiis impedit',
    },
    {
        animationData: bulbAnim,
        heading: 'Creative problem solver',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, pariatur itaque, minima sed veniam modi esse eveniet eat blanditiis impedit',
    },
];
