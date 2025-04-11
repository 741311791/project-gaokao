'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: '首页', href: '/' },
    { label: '高校信息查询', href: '/university' },
    { label: '历年分数线', href: '/score-lines' },
    { label: '一分一档查询', href: '/score-rankings' },
    { label: '招生计划查询', href: '/admission-plans' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-sm" data-oid="dkf5m28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ylhk0sz">
                <div className="flex justify-between items-center py-4" data-oid="a:kfzv1">
                    <div className="flex items-center" data-oid="40r35t-">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-blue-700"
                            data-oid="1tmlmdn"
                        >
                            河北高考志愿填报
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8" data-oid="e35rmpf">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-3 py-2 ${
                                    pathname === item.href
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                data-oid="j8u5vk7"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div data-oid="c840:bt">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            data-oid="bvt:fgt"
                        >
                            登录/注册
                        </Link>
                    </div>
                </div>
                {/* Mobile navigation */}
                <div className="md:hidden flex overflow-x-auto space-x-4 py-2" data-oid=":jgv03f">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-3 py-1 whitespace-nowrap ${
                                pathname === item.href
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600'
                            }`}
                            data-oid="fpg1k8h"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
