import Image from 'next/image';

export default function LandscapeWrapper() {
    return (
        <div className='flex justify-center items-center w-full h-lvh bg-primary text-center text-tertiary'>
            <div>
                <Image
                    src='/anim-portfolio-2024/assets/landscape.png'
                    alt=''
                    className='m-auto invert opacity-30 -rotate-90'
                    width={80}
                    height={80}
                    priority
                />
                <p className='p-6'>
                    Please rotate the device into the portrait mode.
                </p>
            </div>

            <div className='absolute w-full bottom-10 left-0'>
                <h1 className='font-bold uppercase text-sm pb-1'>
                    Krzysztof Kopczynski
                </h1>
                <h2 className='text-xs'>Software developer &copy; 2024</h2>
            </div>
        </div>
    );
}
