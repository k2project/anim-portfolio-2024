import SlideInOut from '@components/textAnimations/slideInOut';
import SharedLogo from './sharedLogo';

export default function LightThemeContainer() {
    return (
        <div className='absolute bottom-0 w-full h-full flex justify-center items-center pb-28'>
            <SharedLogo gradient />
            <div className='text-center text-primary absolute bottom-24 whitespace-pre-line'>
                <h1 className='md:text-xl tracking-widest capitalize font-bold'>
                    <SlideInOut text=' Krzysztof Kopczynski' />
                </h1>
                <p className='text-sm pt-2 tracking-widest'>
                    <SlideInOut text='Hello! Call me Kris.' delay={0.5} />
                </p>
            </div>
        </div>
    );
}
