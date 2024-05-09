'use client';

import CarouselItem from './item';
import { m } from 'framer-motion';
import useAnimationControls from './useCarouselAnimations';
import { animList } from '../data';
import CarouselItemsHeadings from './headings';

export default function LottieCarousel() {
    const { listX: x, itemBaseSize } = useAnimationControls(0);
    return (
        <div
            style={{ height: itemBaseSize, width: itemBaseSize }}
            className='m-auto'
        >
            <h3 className='sr-only'>Most proud of</h3>
            <m.ul
                // Estimated width of list based on number of items and their size
                className='w-[1600px] flex items-center h-80 relative'
                style={{ x, height: itemBaseSize }}
            >
                {animList.map((item, index) => (
                    <li key={index + '-proud-of'}>
                        <CarouselItem
                            animationData={item.animationData}
                            opacity={item.opacity}
                            index={index}
                        />
                    </li>
                ))}
            </m.ul>
            <CarouselItemsHeadings />
        </div>
    );
}
