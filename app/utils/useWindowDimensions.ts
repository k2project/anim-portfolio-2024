/**
 * * This hook returns the viewport/window height and width
 *  and the smallest dimension - unless they surpass the desktop max width set for the content wrapper - used for responsive sizing of elements
 */

import { SMALL_SCREEN_BREAKING_POINT } from '@configs';
import { useEffect, useState } from 'react';

type WindowDimensions = {
    windowWidth: number;
    windowHeight: number;
};

interface IUseWindowDimensions extends WindowDimensions {
    isInSmallScreenLandscape: boolean;
}

const useWindowDimensions = (): IUseWindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        windowWidth: 0,
        windowHeight: 0,
    });
    const [isInSmallScreenLandscape, setIsInSmallScreenLandscape] =
        useState(false);

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
            if (
                window.matchMedia('(orientation: landscape)').matches &&
                window.innerWidth < SMALL_SCREEN_BREAKING_POINT
            ) {
                setIsInSmallScreenLandscape(true);
            } else {
                setIsInSmallScreenLandscape(false);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return { ...windowDimensions, isInSmallScreenLandscape };
};

export default useWindowDimensions;
