'use client';

import { m } from 'framer-motion';
import { IWorkHistoryItem } from './types';
import useWorkHistoryItemAnimation from './useWorkHistoryItemAnimation';

interface IWorkHistoryItemProps extends IWorkHistoryItem {
    index: number;
}
export default function WorkHistoryItem({
    company,
    title,
    logo,
    startDate,
    duration,
    index,
}: IWorkHistoryItemProps) {
    const { x, opacity, logoScale } = useWorkHistoryItemAnimation(index);

    return (
        <m.li
            className='flex items-end text-tertiary pb-5'
            style={{ x, opacity }}
            initial={{ opacity: 0 }}
        >
            <m.div
                className='bg-tertiary w-14 h-14 rounded-md flex justify-center items-center text-primary mr-6 mb-2'
                style={{ scale: logoScale }}
                initial={{ scale: 0 }}
            >
                {logo}
            </m.div>
            <div className='flex flex-1 border-b border-zinc-500 pb-5 items-end'>
                <div>
                    <h4 className='font-semibold uppercase'>{company}</h4>
                    <p className='text-sm capitalize'>{title}</p>
                </div>
                <p className='flex-1 flex justify-end min-w-36'>
                    {startDate} &bull; {duration}
                </p>
            </div>
        </m.li>
    );
}
