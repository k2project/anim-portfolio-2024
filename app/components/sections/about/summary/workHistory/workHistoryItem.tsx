import Image from 'next/image';
import { IHistoryItem } from './types';

export default function WorkHistoryItem({
    company,
    title,
    imageUrl,
    duration,
}: IHistoryItem) {
    return (
        <div className='flex text-sm pt-4 items-end border-b border-tertiary text-tertiary pb-3'>
            <Image
                src={imageUrl}
                alt={company}
                width={35}
                height={35}
                className=' mr-4'
            />
            <div>
                <h4 className='font-semibold'>{company}</h4>
                <p className='text-xs capitalize'>{title}</p>
            </div>
            <p className='flex-1 flex justify-end lowercase'>{duration}</p>
        </div>
    );
}
