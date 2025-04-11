import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: '河北高考志愿填报服务平台',
    description:
        '为河北考生提供全面的高考志愿填报服务，包括政策解读、院校专业查询、分数线查询、一分一档查询和招生计划查询等',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="wmls50d">
            <body className="" data-oid="h102jf.">
                {children}
            </body>
        </html>
    );
}
