/**
 * * This hook returns the viewport/window height and width
 */

import { useEffect, useState } from 'react';

type WindowDimensions = {
    windowWidth: number;
    windowHeight: number;
};

const useWindowDimensions = (): WindowDimensions => {
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
