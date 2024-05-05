import { listStyle, techMain } from './techData';
import TechItem from './item/techItem';
import { MAIN_STACK_HEADING_ID } from '../secondaryTech';

export default function MainTech() {
    return (
        <div className='pb-8 xl:pb-14'>
            <ul
                aria-labelledby={MAIN_STACK_HEADING_ID}
                className={`grid auto-rows-fr w-full m-auto ${listStyle}`}
            >
                {techMain.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
            </ul>
        </div>
    );
}