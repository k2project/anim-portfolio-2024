import type { Metadata } from 'next';
import './globals.css';
import AccessibilityWrapper from '@utils/accessibility/accessibilityWrapper';
import AnimationWrapper from '@utils/animation/animationWrapper';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['300', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

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
            </head>
            <body className={montserrat.className}>
                <AccessibilityWrapper>
                    <AnimationWrapper>{children}</AnimationWrapper>
                </AccessibilityWrapper>
            </body>
        </html>
    );
}
