import type { Metadata } from 'next';
import './globals.css';
import AccessibilityWrapper from '@utils/accessibility/accessibilityWrapper';
import AnimationWrapper from '@utils/animation/animationWrapper';

export const metadata: Metadata = {
    title: 'Kris Kopczynski - Software Developer',
    description: 'Frontend skills showcase portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='icon'
                    href='icon?<generated>'
                    type='image/png'
                    sizes='32x32'
                />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />

                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body>
                <AccessibilityWrapper>
                    <AnimationWrapper>{children}</AnimationWrapper>
                </AccessibilityWrapper>
            </body>
        </html>
    );
}
