'use client';

import { m } from 'framer-motion';
import { ITechLogo } from './type';
import Image from 'next/image';
import useTechItem from './useTechItem';
import { itemStyle } from './techData';

interface ITechItemProps extends ITechLogo {
    index: number;
    reverseAnim?: boolean;
}

export default function TechItem({
    src,
    alt,
    index,
    reverseAnim = false,
}: ITechItemProps) {
    const {} = useTechItem();

    return (
        <m.li
            className={`relative bg-tertiary rounded-md inline-block border-none drop-shadow-lg border-primary ${itemStyle}`}
        >
            <Image
                src={src}
                alt={alt}
                fill={true}
                className='p-4 sm:p-6 xl:p-10 opacity-80'
                sizes='100vw, 50vw, 30vw'
            />
            {/* <p className='w-full text-center text-xs absolute bottom-2'>
                {alt}
            </p> */}
        </m.li>
    );
}
