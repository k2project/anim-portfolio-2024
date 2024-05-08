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
            style='w-[calc(100vh*.25)] h-[calc(100vh*.25) min-h-36 min-w-36'
            gradient={gradient}
            animated={animated}
        />
    );
}
