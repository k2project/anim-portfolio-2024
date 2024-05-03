import { workHistoryData } from './workHistoryData';
import WorkHistoryItem from './workHistoryItem';

export default function WorkHistory() {
    return (
        <div className='hidden lg:block lg:pt-12 xl:pt-28 w-10/12'>
            <h3 className='sr-only' id='work-history'>
                Work history
            </h3>
            <ul aria-labelledby='work-history'>
                {workHistoryData.map((item, index) => (
                    <WorkHistoryItem
                        {...item}
                        index={index}
                        key={item.company}
                    />
                ))}
            </ul>
        </div>
    );
}
