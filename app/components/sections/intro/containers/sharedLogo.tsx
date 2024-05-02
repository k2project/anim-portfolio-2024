import AnimatedLogo from '@components/logos/app/animatedLogo';
import React from 'react';

export default function SharedLogo({ gradient }: { gradient: boolean }) {
    return (
        <AnimatedLogo
            id='logo'
            color='white'
            style='w-[calc(100vh*.25)] h-[calc(100vh*.25) min-h-48 min-w-48'
            gradient={gradient}
        />
    );
}
