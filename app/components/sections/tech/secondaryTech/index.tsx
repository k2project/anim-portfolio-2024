import { techSecondary } from '../mainTech/techData';

export default function SecondaryTech() {
    return (
        <div className='hidden md:block text-center text-primary md:pb-6 xl:pb-8'>
            <h3 className='xl:text-xl font-bold'>FAMILIAR WITH</h3>
            <p className='text-sm xl:text-lg pt-2 font-medium'>
                {techSecondary.join(' • ').slice(0, -1)}
            </p>
        </div>
    );
}
