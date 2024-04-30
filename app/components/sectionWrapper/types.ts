import { ISection } from '@types';
import { MotionValue } from 'framer-motion';
import { ReactNode } from 'react';

export interface ISectionWrapperProps extends ISection {
    children: ReactNode;
    initialY: number; // initial position on the screen of the fixed container; used for animating it in on scroll;
    y?: MotionValue<number>; //use to animate the fixed component in and out of the screen on scrolling
}
