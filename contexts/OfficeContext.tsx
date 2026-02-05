'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Office {
    name: string;
    progress: number;
    target: number;
}

interface OfficeContextType {
    offices: Office[];
    currentOfficeName: string;
    setCurrentOfficeName: (name: string) => void;
    getCurrentOffice: () => Office | undefined;
    incrementProgress: (points: number, targetOfficeName?: string) => void;

    // Modal State
    isModalOpen: boolean;
    openModal: (department: string) => void;
    closeModal: () => void;
    selectedDepartment: string;
}

const OfficeContext = createContext<OfficeContextType | undefined>(undefined);

export function OfficeProvider({ children, initialOfficeName = 'San Francisco' }: { children: ReactNode, initialOfficeName?: string }) {
    // Mock Data for all offices 
    // Initialize with 0 to match server-side rendering (avoids hydration error)
    const [offices, setOffices] = useState<Office[]>([
        { name: 'San Francisco', progress: 0, target: 10000 },
        { name: 'New York', progress: 0, target: 10000 },
        { name: 'Chicago', progress: 0, target: 10000 },
        { name: 'London', progress: 0, target: 10000 },
        { name: 'Tokyo', progress: 0, target: 10000 },
    ]);

    // Randomize progress only on the client side after mount
    useEffect(() => {
        setOffices(prev => prev.map(office => ({
            ...office,
            progress: Math.floor(Math.random() * 10000)
        })));
    }, []);

    const [currentOfficeName, setCurrentOfficeNameState] = useState(initialOfficeName);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState('');

    // Wrapper to ensure we sync with server param if needed, but for now local state is fine
    const setCurrentOfficeName = (name: string) => {
        setCurrentOfficeNameState(name);
    }

    const getCurrentOffice = () => {
        return offices.find(o => o.name === currentOfficeName) || offices[0];
    };

    const incrementProgress = (points: number, targetOfficeName?: string) => {
        setOffices(prevOffices => {
            return prevOffices.map(office => {
                const isTarget = targetOfficeName
                    ? office.name === targetOfficeName
                    : office.name === currentOfficeName;

                if (isTarget) {
                    return { ...office, progress: Math.min(office.progress + points, office.target) };
                }
                return office;
            });
        });
    };

    const openModal = (department: string) => {
        setSelectedDepartment(department);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedDepartment('');
    };

    return (
        <OfficeContext.Provider value={{
            offices,
            currentOfficeName,
            setCurrentOfficeName,
            getCurrentOffice,
            incrementProgress,
            isModalOpen,
            openModal,
            closeModal,
            selectedDepartment,
        }}>
            {children}
        </OfficeContext.Provider>
    );
}

export function useOffice() {
    const context = useContext(OfficeContext);
    if (context === undefined) {
        throw new Error('useOffice must be used within an OfficeProvider');
    }
    return context;
}
