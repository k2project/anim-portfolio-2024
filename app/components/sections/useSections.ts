import { useState } from 'react';

interface IUseSections {
    showScrollableSections: boolean;
    enableScrolling: () => void;
}
export default function useSections(): IUseSections {
    const [showScrollableSections, setShowScrollableSections] = useState(false);
    const enableScrolling = () => setShowScrollableSections(true);

    return { showScrollableSections, enableScrolling };
}
