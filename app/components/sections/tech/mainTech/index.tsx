import { listStyle, techMain } from './techData';
import TechItem from './item/techItem';

export default function MainTech() {
    return (
        <div className='pb-8 xl:pb-14'>
            <h3 id='tech-main' className='sr-only'>
                Main tech stack
            </h3>
            <ul
                aria-labelledby='tech-main'
                className={`grid auto-rows-fr w-full m-auto ${listStyle}`}
            >
                {techMain.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
            </ul>
        </div>
    );
}
