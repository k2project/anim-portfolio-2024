import { m, MotionValue } from 'framer-motion';
import { ReactNode } from 'react';

export default function AnimatedFlipCard({
    rotateY,
    frontFaceContent,
    backFaceContent,
    containerStyle = '',
    frontFaceStyle = '',
    backFaceStyle = '',
}: {
    rotateY: MotionValue<number>;
    frontFaceContent: ReactNode;
    backFaceContent: ReactNode;
    containerStyle?: string;
    frontFaceStyle?: string;
    backFaceStyle?: string;
}) {
    return (
        <div
            className={`perspective-1000 bg-transparent rounded-lg ${containerStyle}`}
        >
            <m.div
                className='relative w-full h-full preserve-3d transition-all shadow-lg rounded-lg transform-gpu'
                style={{ rotateY }}
            >
                <div
                    className={`flip-card-front p-4 flex justify-center items-center ${frontFaceStyle}`}
                >
                    {frontFaceContent}
                </div>
                <div className={`flip-card-back ${backFaceStyle}`}>
                    {backFaceContent}
                </div>
            </m.div>
        </div>
    );
}
