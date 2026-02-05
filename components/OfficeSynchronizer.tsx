'use client';

import { useEffect } from 'react';
import { useOffice } from '@/contexts/OfficeContext';

export default function OfficeSynchronizer({ name }: { name: string }) {
    const { setCurrentOfficeName } = useOffice();

    useEffect(() => {
        setCurrentOfficeName(name);
    }, [name, setCurrentOfficeName]);

    return null;
}
