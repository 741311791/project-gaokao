'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '高校信息查询', href: '/universities' },
    { label: '历年分数线', href: '/score-lines' },
    { label: '一分一档查询', href: '/score-rankings' },
    { label: '招生计划查询', href: '/admission-plans' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-sm" data-oid="syv92w4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6z2pb8.">
                <div className="flex justify-between items-center py-4" data-oid="w66gql7">
                    <div className="flex items-center" data-oid="l5jjbsk">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-700"
                            data-oid="3d.xle-"
                        >
                            河北高考志愿填报
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8" data-oid="9tnrhsq">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 ${
                                    pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                data-oid="79.65l:"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div data-oid="u6-c1ia">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            data-oid="m7-sy-5"
                        >
                            登录/注册
                        </Link>
                    </div>
                </div>
                {/* Mobile navigation */}
                <div className="md:hidden flex overflow-x-auto space-x-4 py-2" data-oid="mi3edia">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1 whitespace-nowrap ${
                                pathname === item.href
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600'
                            }`}
                            data-oid="l:i:pmf"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
