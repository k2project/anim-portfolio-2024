'use client';

import RecommendationContainer from './recommendationContainer';
import { IRecommendation } from './types';
import { m } from 'framer-motion';
import { useAnimatedColumnContainer } from './useAnimatedColumnContainer';

export default function AnimatedColumnContainer({
    data,
    reversedAnim = false,
    className = '',
}: {
    data: IRecommendation[];
    reversedAnim?: boolean;
    className?: string;
}) {
    const { y, initialY, colRef } = useAnimatedColumnContainer(reversedAnim);
    return (
        <m.div
            className={`mx-3 flex-1 ${className}`}
            style={{ y }}
            initial={{ y: initialY }}
        >
            <div ref={colRef} className='space-y-5 '>
                {data.map((recommendation) => (
                    <RecommendationContainer
                        key={recommendation.author}
                        {...recommendation}
                    />
                ))}
            </div>
        </m.div>
    );
}
