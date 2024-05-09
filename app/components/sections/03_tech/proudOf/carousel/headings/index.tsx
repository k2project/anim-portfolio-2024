import React from 'react';
import { animList } from '../../data';
import HeadingItem from './item';

export default function CarouselItemsHeadings() {
    return (
        <ul className='mt-5 w-full relative h-10 xl:h-32 z-0'>
            {animList.map((item, index) => (
                <li
                    key={index + '-proud-of-heading'}
                    className={`absolute left-0 w-full text-center top-1/2 -translate-y-1/2`}
                >
                    <HeadingItem
                        heading={item.heading}
                        text={item.text}
                        index={index}
                    />
                </li>
            ))}
        </ul>
    );
}
