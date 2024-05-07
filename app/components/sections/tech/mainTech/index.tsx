'use client';

import { listStyle, techMain } from './techData';
import TechItem from './item/techItem';
import { MAIN_STACK_HEADING_ID } from '../headings';
import useMainTechAnimation from './useTechMainAnimation';
import { m } from 'framer-motion';

export default function MainTech() {
    const { y } = useMainTechAnimation();

    return (
        <m.div className='pb-8 xl:pb-14 inline-block m-auto' style={{ y }}>
            <ul
                aria-labelledby={MAIN_STACK_HEADING_ID}
                className={`grid auto-rows-fr ${listStyle}`}
            >
                {techMain.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
            </ul>
        </m.div>
    );
}
