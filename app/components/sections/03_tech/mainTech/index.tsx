'use client';

import { m } from 'framer-motion';
import { techMain } from './techData';
import TechItem from './item/techItem';
import useMainTechAnimation from './useTechMainAnimation';

export default function MainTech() {
    const { listRef, x, initialX } = useMainTechAnimation();
    return (
        <>
            <h3 className='sr-only' id='tech stack'>
                Main tech stack
            </h3>
            <m.ul
                ref={listRef}
                aria-labelledby='tech-stack'
                className='flex min-w-full pt-20 pb-6 space-x-5 pl-5'
                style={{ x }}
                initial={{ x: initialX }}
            >
                {techMain.map((item) => (
                    <TechItem {...item} key={item.text} />
                ))}
            </m.ul>
        </>
    );
}
