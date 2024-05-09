import Image from 'next/image';
import { ITechLogo } from '../type';

export default function BackFaceContent({ src, alt }: ITechLogo) {
    return (
        <div className='group w-full h-full relative overflow-hidden rounded-lg'>
            <div className='w-full h-full relative top-0 group-hover:-top-full transition-all duration-700'>
                <Image
                    src={src}
                    alt=''
                    fill={true}
                    className='p-4 sm:p-7 xl:p-9 opacity-80'
                    sizes='100vw, 50vw, 30vw'
                />
            </div>
            <p className='absolute h-full w-full top-full bg-primary p-4 text-tertiary rounded-sm text-center font-semibold text-sm sm:text-lg group-hover:top-0 transition-all duration-700 flex justify-center items-center'>
                {alt}
            </p>
        </div>
    );
}
