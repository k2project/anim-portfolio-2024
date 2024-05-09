'use client';

import { listStyle, techMain } from './techData';
import TechItem from './item/techItem';
import useMainTechAnimation from './useTechMainAnimation';
import { m } from 'framer-motion';

export default function MainTech() {
    const { y } = useMainTechAnimation();

    return (
        <div className='w-full bg-red-500'>
            <m.div className='inline-block m-auto' style={{ y }}>
                <h3 className='sr-only'>Main tech stack</h3>
                <ul
                    aria-labelledby=''
                    className={`grid auto-rows-fr ${listStyle}`}
                >
                    {techMain.map((item, index) => (
                        <TechItem {...item} index={index} key={item.alt} />
                    ))}
                </ul>
            </m.div>
        </div>
    );
}
