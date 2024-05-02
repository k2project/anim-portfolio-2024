import { IHistoryItem } from './types';

export default function WorkHistoryItem({
    company,
    title,
    logo,
    startDate,
    duration,
}: IHistoryItem) {
    return (
        <div className='flex items-end border-b border-zinc-500 text-tertiary pb-5'>
            <div className='bg-tertiary w-10 h-10 rounded-md flex justify-center items-center text-primary mr-4'>
                {logo}
            </div>
            <div>
                <h4 className='font-semibold uppercase'>{company}</h4>
                <p className='text-sm capitalize'>{title}</p>
            </div>
            <p className='flex-1 flex justify-end'>
                {startDate} &bull; {duration}
            </p>
        </div>
    );
}
