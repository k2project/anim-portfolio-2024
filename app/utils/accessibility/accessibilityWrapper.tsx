'use client';

import React from 'react';
import reportAccessibility from './reportAccessibility';

export default function AccessibilityWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    React.useEffect(() => {
        reportAccessibility(React);
    }, []);

    return <>{children}</>;
}
