'use client';

import { useState } from 'react';
import { useOffice } from '../contexts/OfficeContext';

const departments = ['TSG', 'Finance', 'Consulting', 'PEG', 'BCN'];

export default function DepartmentsDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useOffice();

    const handleDepartmentClick = (dept: string) => {
        openModal(dept);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-gray-800 rounded-lg hover:border-red-600/50 hover:bg-[#222] transition-colors"
            >
                <span className="text-white font-medium">Departments</span>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-[#1a1a1a] border-2 border-gray-800 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-4" style={{animationDuration: '200ms'}}>
                    {departments.map((dept, idx) => (
                        <div
                            key={dept}
                            onClick={() => handleDepartmentClick(dept)}
                            className="px-5 py-3.5 text-gray-300 hover:bg-red-600/20 hover:text-white cursor-pointer transition-all duration-200 border-b border-gray-800 last:border-none font-medium hover:pl-6"
                            style={{
                                animationDelay: `${idx * 30}ms`
                            }}
                        >
                            {dept}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
