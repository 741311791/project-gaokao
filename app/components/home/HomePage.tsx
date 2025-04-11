'use client';

import HomeHero from './HomeHero';
import LatestNews from './LatestNews';
import QuickLinks from './QuickLinks';

export default function HomePage() {
    return (
        <div className="space-y-8" data-oid="o3n3p41">
            <HomeHero data-oid="te:p.8j" />
            <LatestNews data-oid="w-79tfn" />
            <QuickLinks data-oid="1tocby2" />
        </div>
    );
}
