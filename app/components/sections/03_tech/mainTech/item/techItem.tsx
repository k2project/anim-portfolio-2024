import { ITechData } from '../type';
import TechItemCard from './techItemCard';

interface ITechItemProps extends ITechData {}

export default function TechItem({ src, text, animationData }: ITechItemProps) {
    return (
        <li className='flex-shrink-0 flex justify-center items-center text-xl font-semibold text-white space-x-7 bg-primary'>
            <TechItemCard src={src} animationData={animationData} />
            {text && (
                <h4 className='border-0 rounded-md border-white h-24 px-2 flex items-center justify-center text-3xl'>
                    {text}
                </h4>
            )}
        </li>
    );
}
