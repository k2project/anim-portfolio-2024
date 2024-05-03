import {
    listStyle,
    techMainRow1,
    techMainRow2,
    techMainRow3,
} from './techData';
import TechItem from './techItem';

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
                {techMainRow1.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
                {techMainRow2.map((item, index, array) => (
                    <TechItem
                        reverseAnim
                        {...item}
                        index={array.length - 1 - index}
                        key={item.alt}
                    />
                ))}
                {techMainRow3.map((item, index) => (
                    <TechItem {...item} index={index} key={item.alt} />
                ))}
            </ul>
        </div>
    );
}
