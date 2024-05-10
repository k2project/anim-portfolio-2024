import Image from 'next/image';
import Lottie, { Options } from 'react-lottie';

export default function TechItemCard({
    src,
    animationData,
}: {
    animationData?: any;
    src?: string;
}) {
    const defaultOptions: Options = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (!src && !animationData) return null;

    return (
        <div className='w-32 h-32 rounded-md bg-tertiary p-2 relative'>
            {src && (
                <Image
                    src={src}
                    alt=''
                    className='opacity-80 p-6'
                    fill={true}
                    sizes='100vw, 50vw, 30vw'
                />
            )}
            {animationData && (
                <Lottie options={defaultOptions} width='90%' height='90%' />
            )}
        </div>
    );
}
