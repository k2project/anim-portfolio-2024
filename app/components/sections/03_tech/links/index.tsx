import Link from 'next/link';

export default function Links() {
    return (
        <div className='md:space-x-6 flex justify-center mt-6 text-center px-5 lg:px-0'>
            <Link
                href='https://github.com/k2project'
                target='_blank'
                rel='noopener noreferrer'
                className='relative hidden border-none md:inline-block text-xl uppercase rounded-lg font-bold py-4 px-16 overflow-hidden w-60 h-16'
            >
                <span className='bg-gradient-theme absolute w-full h-full left-0 top-0' />
                <span className='bg-primary absolute w-[calc(100%-4px)] h-[calc(100%-4px)] left-[2px] top-[2px] rounded-md' />
                <span className='text-gradient-theme relative'>GitHub</span>
            </Link>

            <a
                href='/anim-portfolio-2024/assets/k.kopczynski.resume.pdf'
                download
                target='_blank'
                rel='noopener noreferrer'
                className='border-contrast border-none py-4 px-16 text-xl text-primary font-bold uppercase rounded-lg bg-gradient-theme w-full md:w-60 h-16 '
            >
                RESUME
            </a>
        </div>
    );
}
