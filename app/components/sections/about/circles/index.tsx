'use client';

import { m } from 'framer-motion';
import InnerCircle from './innerCircle';
import MiddleBottomCircle from './middleBottomCircle';
import MiddleTopCircle from './middleTopCircle';
import OuterCircle from './outerCircle';
import useCirclesAnimation from './useCirclesAnimation';

export default function Circles() {
    const { circleSize, x, y } = useCirclesAnimation();

    return (
        <m.div className='relative inline-block transform-gpu' style={{ x, y }}>
            <InnerCircle size={circleSize} />
            <MiddleBottomCircle size={circleSize} />
            <MiddleTopCircle size={circleSize} />
            <OuterCircle size={circleSize} />
        </m.div>
    );
}
