import { workHistoryData } from './workHistoryData';
import WorkHistoryItem from './workHistoryItem';

export default function WorkHistory() {
    return (
        <div className='hidden md:block pt-20'>
            <h3 className='sr-only' id='work-history'>
                Work history
            </h3>
            <ul aria-labelledby='work-history'>
                {workHistoryData.map((item) => (
                    <WorkHistoryItem {...item} key={item.company} />
                ))}
            </ul>
            work list
        </div>
    );
}
