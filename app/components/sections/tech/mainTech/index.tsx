'use client';

import { listStyle, techMain } from './techData';
import TechItem from './item/techItem';
import useMainTechAnimation from './useTechMainAnimation';
import { m } from 'framer-motion';

export default function MainTech() {
    const { y } = useMainTechAnimation();

    return (
        <m.div className='pb-8 xl:pb-14 inline-block m-auto' style={{ y }}>
            <h3 className='sr-only'>Main tech stack</h3>
            <ul aria-labelledby='' className={`grid auto-rows-fr ${listStyle}`}>
                {techMain.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
            </ul>
        </m.div>
    );
}
