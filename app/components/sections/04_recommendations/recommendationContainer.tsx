import { useState } from 'react';
import { IRecommendation } from './types';
import Image from 'next/image';

export default function RecommendationContainer({
    text,
    author,
    role,
    avatar,
    initials,
}: IRecommendation) {
    const [imgError, setImageError] = useState(false);
    return (
        <div className='bg-tertiary text-primary rounded-md shadow-lg text-sm overflow-hidden '>
            <div className='space-y-3 p-8 pt-12'>{text}</div>
            <div className='flex items-center bg-secondary p-8'>
                <div className='w-16 h-16 rounded-full bg-gradient-theme overflow-hidden justify-center items-center flex relative shadow '>
                    {avatar && !imgError ? (
                        <Image
                            src={avatar}
                            alt={author}
                            fill
                            onError={(e) => setImageError(true)}
                            sizes='100vw, 50vw, 30vw'
                        />
                    ) : (
                        <p className='font-semibold text-white text-xl'>
                            {initials}
                        </p>
                    )}
                </div>
                <div className='flex-1 pl-4'>
                    <h3 className='font-semibold text-gradient-theme'>
                        {author}
                    </h3>
                    <h4 className='text-xs'>{role}</h4>
                </div>
            </div>
        </div>
    );
}
