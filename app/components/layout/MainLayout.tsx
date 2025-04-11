'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-[1920px] mx-auto" data-oid="sak.48l">
            <Header data-oid="4zdf3ki" />
            <main className="flex-grow" data-oid="_xe0n56">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="qg7_hr.">
                    {children}
                </div>
            </main>
            <Footer data-oid="ty-ti6v" />
        </div>
    );
}
