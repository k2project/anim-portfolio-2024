import AnimatedLogo from '@components/logo/animatedLogo';

export default function LightThemeContainer() {
    return (
        <div className='absolute bottom-0 w-full h-full flex justify-center items-center pb-28'>
            <AnimatedLogo id='logo' size={200} gradient />
        </div>
    );
}
