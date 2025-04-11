'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen" data-oid="y-g6s_1">
            <Header data-oid="prah-ql" />
            <main className="flex-grow" data-oid="s.5qszi">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid=".329nww">
                    {children}
                </div>
            </main>
            <Footer data-oid="3g7b6af" />
        </div>
    );
}
