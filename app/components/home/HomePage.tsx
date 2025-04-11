'use client';

import HomeHero from './HomeHero';
import LatestNews from './LatestNews';
import QuickLinks from './QuickLinks';

export default function HomePage() {
    return (
        <div className="space-y-8" data-oid="k:gi7yi">
            <HomeHero data-oid="nuorudb" />
            <LatestNews data-oid="bguruo2" />
            <QuickLinks data-oid="wv4oxhf" />
        </div>
    );
}
