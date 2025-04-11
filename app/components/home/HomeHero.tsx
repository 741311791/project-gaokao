import Link from 'next/link';

export default function HomeHero() {
    return (
        <section className="bg-blue-50 p-8 rounded-lg" data-oid="rj8w5gt">
            <h2 className="text-2xl font-bold text-blue-800 mb-4" data-oid="aya8y7s">
                河北高考志愿填报服务平台
            </h2>
            <p className="text-gray-700 mb-6" data-oid="9bydjqq">
                为河北考生提供全面的高考志愿填报服务，包括政策解读、院校专业查询、分数线查询、一分一档查询和招生计划查询等。
            </p>
            <div className="flex space-x-4" data-oid="8zjm0a9">
                <Link
                    href="/universities"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="_7zj_x9"
                >
                    开始查询
                </Link>
                <button
                    className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
                    data-oid="a:tc5v:"
                >
                    联系咨询师
                </button>
            </div>
        </section>
    );
}
