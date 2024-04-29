import type { Metadata } from 'next';
import './globals.css';
import AccessibilityWrapper from './utils/accessibility/accessibilityWrapper';

export const metadata: Metadata = {
    title: 'Kris Kopczynski - 2024',
    description: 'Frontend skills showcase portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <AccessibilityWrapper>{children}</AccessibilityWrapper>
            </body>
        </html>
    );
}
