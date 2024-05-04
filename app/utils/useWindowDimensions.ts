/**
 * * This hook returns the viewport/window height and width
 *  and the smallest dimension - unless they surpass the desktop max width set for the content wrapper - used for responsive sizing of elements
 */

import { MAX_DESKTOP } from '@configs';
import { useEffect, useState } from 'react';

type WindowDimensions = {
    windowWidth: number;
    windowHeight: number;
};

interface IUseWindowDimensions extends WindowDimensions {}

const useWindowDimensions = (): IUseWindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        windowWidth: 0,
        windowHeight: 0,
    });

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
