'use client';

import Header from './Header';
import Footer from './Footer';

type MainLayoutProps = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50" data-oid="q3mm.jv">
            <Header data-oid="1a6fh-p" />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="yeqd85m">
                {children}
            </main>
            <Footer data-oid="ipzqdi6" />
        </div>
    );
}
