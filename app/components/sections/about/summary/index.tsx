import Bio from './bio';
import WorkHistory from './workHistory';

export default function Summary() {
    return (
        <div className='relative w-10/12 m-auto md:m-0 md:w-1/2 h-1/2 md:h-full top-[10%] md:top-0 left-0 md:left-1/2 flex items-center md:pb-28 text-tertiary overflow-hidden'>
            <div>
                <Bio />
                <WorkHistory />
            </div>
        </div>
    );
}
