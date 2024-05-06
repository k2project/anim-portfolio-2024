'use client';

import { ITechLogo } from '../type';
import useTechItem from './useTechItem';
import { itemStyle } from '../techData';
import Logo from '@components/logos/app';
import AnimatedFlipCard from '@components/cards/flipCard';
import BackFaceContent from './backFaceContent';

interface ITechItemProps extends ITechLogo {
    index: number;
}

export default function TechItem({ src, alt, index }: ITechItemProps) {
    const { rotateY } = useTechItem(index);

    return (
        <li>
            <AnimatedFlipCard
                containerStyle={itemStyle}
                rotateY={rotateY}
                frontFaceContent={<Logo size='50%' />}
                backFaceContent={<BackFaceContent src={src} alt={alt} />}
            />
        </li>
    );
}
