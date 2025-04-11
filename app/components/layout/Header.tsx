'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    label: string;
    href: string;
    highlight?: boolean;
};

const navItems: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '高校信息查询', href: '/university' },
    { label: '历年分数线', href: '/score-lines' },
    { label: '一分一档查询', href: '/score-rankings' },
    { label: '招生计划查询', href: '/admission-plans' },
    { label: '模拟志愿填报', href: '/simulation', highlight: true },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-sm w-full" data-oid="ej9t9fd">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-oid="24mkbxd">
                <div className="flex justify-between items-center py-4" data-oid="v6brcj_">
                    <div className="flex items-center" data-oid="a9c589r">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-700"
                            data-oid="gv.j7_z"
                        >
                            河北高考志愿填报
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8" data-oid="65ry1sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 ${
                                    pathname === item.href
                                        ? item.highlight 
                                          ? 'text-green-600 border-b-2 border-green-600' 
                                          : 'text-blue-600 border-b-2 border-blue-600'
                                        : item.highlight
                                          ? 'text-green-600 hover:text-green-700'
                                          : 'text-gray-600 hover:text-blue-600'
                                }`}
                                data-oid="9pjjk06"
                            >
                                {item.highlight && (
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 w-4 inline-block mr-1" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                        />
                                    </svg>
                                )}
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4" data-oid="7k4zx:x">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            data-oid="xsnwu6o"
                        >
                            登录/注册
                        </Link>
                    </div>
                </div>
                {/* Mobile navigation */}
                <div className="md:hidden flex overflow-x-auto space-x-4 py-2" data-oid="mybry.z">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1 whitespace-nowrap ${
                                pathname === item.href
                                    ? item.highlight 
                                      ? 'text-green-600 border-b-2 border-green-600' 
                                      : 'text-blue-600 border-b-2 border-blue-600'
                                    : item.highlight
                                      ? 'text-green-600'
                                      : 'text-gray-600'
                            }`}
                            data-oid="yu.o661"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
