/**
 * * This hook returns the viewport/window height and width
 *  and the smallest dimension - unless they surpass the desktop max width set for the content wrapper - used for responsive sizing of elements
 */

import { LG_MQ_BREAKPOINT } from '@configs';
import { useEffect, useState } from 'react';

type WindowDimensions = {
    windowWidth: number;
    windowHeight: number;
};

interface IUseWindowDimensions extends WindowDimensions {
    isInSmallScreenLandscape: boolean;
    isSmallDevice: boolean;
}

const useWindowDimensions = (): IUseWindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        windowWidth: 0,
        windowHeight: 0,
    });
    const [isInSmallScreenLandscape, setIsInSmallScreenLandscape] =
        useState(false);
    const [isSmallDevice, setIsSmallDevice] = useState(false);

    useEffect(() => {
        function setSizes() {
            setWindowDimensions({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }

        function handleResize(): void {
            // This prevent resizing on mobiles when the address bar hides/shows on scrolling and jumping of the content which animation is based on window height
            if (window.innerWidth > LG_MQ_BREAKPOINT) {
                setSizes();
            }

            // Shows placeholder for small screens in landscape mode - auto reloads the app
            if (
                window.matchMedia('(orientation: landscape)').matches &&
                window.innerWidth < LG_MQ_BREAKPOINT
            ) {
                setIsInSmallScreenLandscape(true);
            } else {
                setIsInSmallScreenLandscape(false);
            }
            if (window.innerWidth < LG_MQ_BREAKPOINT) {
                setIsSmallDevice(true);
            } else {
                setIsSmallDevice(false);
            }
        }
        // Set the screen sizes on load
        setSizes();
        // Handle resize event
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return { ...windowDimensions, isInSmallScreenLandscape, isSmallDevice };
};

export default useWindowDimensions;
