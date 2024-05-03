'use client';

import { m } from 'framer-motion';
import { ITechLogo } from './type';
import Image from 'next/image';
import useTechItem from './useTechItem';
import { itemStyle } from './techData';

interface ITechItemProps extends ITechLogo {
    index: number;
}

export default function TechItem({ src, alt, index }: ITechItemProps) {
    const { x } = useTechItem(index);

    return (
        <m.li
            className={`relative bg-tertiary rounded-md inline-block border-none drop-shadow-lg border-primary ${itemStyle} transform-gpu`}
            style={{ x }}
        >
            <Image
                src={src}
                alt={alt}
                fill={true}
                className='p-4 sm:p-7 xl:p-9 opacity-80'
                sizes='100vw, 50vw, 30vw'
            />
        </m.li>
    );
}
