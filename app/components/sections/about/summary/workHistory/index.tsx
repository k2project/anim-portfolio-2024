import { workHistoryData } from './workHistoryData';
import WorkHistoryItem from './workHistoryItem';

export default function WorkHistory() {
    return (
        <div className='hidden md:block pt-24 w-10/12'>
            <h3 className='sr-only' id='work-history'>
                Work history
            </h3>
            <ul aria-labelledby='work-history' className='space-y-6'>
                {workHistoryData.map((item) => (
                    <WorkHistoryItem {...item} key={item.company} />
                ))}
            </ul>
        </div>
    );
}
