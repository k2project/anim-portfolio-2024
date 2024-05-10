import { ITechData } from '../type';
import TechItemCard from './techItemCard';

interface ITechItemProps extends ITechData {}

export default function TechItem({ src, text, animationData }: ITechItemProps) {
    return (
        <li className='flex-shrink-0 flex justify-center items-center text-xl font-semibold text-white space-x-5'>
            <TechItemCard src={src} animationData={animationData} />
            {text && (
                <p className='border rounded-md border-white px-10 h-32 min-w-44 flex items-center justify-center'>
                    {text}
                </p>
            )}
        </li>
    );
}
