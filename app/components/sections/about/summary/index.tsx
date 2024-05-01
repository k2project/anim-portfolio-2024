import Bio from './bio';
import WorkHistory from './workHistory';

export default function Summary() {
    return (
        <div className='relative w-1/2 h-full top-0 left-1/2 flex items-center px-8 pb-28 text-tertiary'>
            <div>
                <Bio />
                <WorkHistory />
            </div>
        </div>
    );
}
