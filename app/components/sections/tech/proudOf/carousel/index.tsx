'use client';

import CarouselItem from './item';
import { m } from 'framer-motion';
import useAnimationControls from './useCarouselAnimations';
import { animList } from '../data';

export default function LottieCarousel() {
    const { listX: x, itemBaseSize } = useAnimationControls(0);
    return (
        <>
            <div style={{ height: itemBaseSize, width: itemBaseSize }}>
                <m.ul
                    className='w-[1600px] flex items-center h-80 relative'
                    style={{ x, height: itemBaseSize }}
                >
                    {animList.map((item, index, arr) => (
                        <CarouselItem
                            {...item}
                            key={index + '-proud-of'}
                            index={index}
                        />
                    ))}
                </m.ul>
            </div>
        </>
    );
}
