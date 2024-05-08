import React from 'react';
import Lottie, { Options } from 'react-lottie';
import { m } from 'framer-motion';
import useAnimationControls from './useCarouselAnimations';

export default function CarouselItem({
    index,
    animationData,
    opacity,
}: {
    index: number;
    animationData: any;
    opacity: number;
}) {
    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { size, scale } = useAnimationControls(index);

    return (
        <m.div
            className='inline-flex relative rounded-full items-center justify-center border-[15px] border-tertiary bg-tertiary'
            style={{
                width: size,
                height: size,
            }}
        >
            <div className='absolute left-0 top-0 w-full h-full rounded-full border-2 border-primary' />
            <m.div style={{ scale, opacity }}>
                <Lottie options={defaultOptions} width='90%' height='90%' />
            </m.div>
        </m.div>
    );
}
