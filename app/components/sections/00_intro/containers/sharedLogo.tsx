import AnimatedLogo from '@components/logos/app/animatedLogo';
import React from 'react';

export default function SharedLogo({
    gradient,
    animated = true,
}: {
    gradient: boolean;
    animated?: boolean;
}) {
    return (
        <AnimatedLogo
            id='logo'
            color='white'
            style='w-[calc(100vh*.2)] h-[calc(100vh*.2) min-h-40 min-w-40'
            gradient={gradient}
            animated={animated}
        />
    );
}
