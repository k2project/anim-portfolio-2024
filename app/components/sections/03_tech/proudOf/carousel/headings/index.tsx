import React from 'react';
import { animList } from '../../data';
import HeadingItem from './item';

export default function CarouselItemsHeadings() {
    return (
        <ul className='mt-5 w-full relative'>
            {animList.map((item, index) => (
                <li
                    key={index + '-proud-of-heading'}
                    className='absolute left-0 top-0 w-full text-center'
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
