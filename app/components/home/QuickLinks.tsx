import Link from 'next/link';

export default function QuickLinks() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="or.ash_">
            <div className="bg-green-50 p-6 rounded-lg" data-oid="cy-3zda">
                <h3 className="text-lg font-bold text-green-800 mb-3" data-oid="ibhgml.">
                    院校专业解读
                </h3>
                <p className="text-gray-700 mb-4" data-oid="q-zbdpi">
                    深度解析各高校特色和热门专业，助您做出明智选择。
                </p>
                <Link
                    href="/universities"
                    className="text-green-600 hover:underline"
                    data-oid=".1e-nrw"
                >
                    查看详情 →
                </Link>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg" data-oid="-w:qh-y">
                <h3 className="text-lg font-bold text-purple-800 mb-3" data-oid="gi8h01k">
                    历年分数线查询
                </h3>
                <p className="text-gray-700 mb-4" data-oid="aeoq-c:">
                    查询各高校在河北的历年录取分数线，精准定位目标院校。
                </p>
                <Link
                    href="/score-lines"
                    className="text-purple-600 hover:underline"
                    data-oid="-lcijlq"
                >
                    查看详情 →
                </Link>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg" data-oid="9x2:71_">
                <h3 className="text-lg font-bold text-orange-800 mb-3" data-oid="np1w42b">
                    一分一档查询
                </h3>
                <p className="text-gray-700 mb-4" data-oid="n3wfqk2">
                    根据分数查询历年排名，科学评估录取可能性。
                </p>
                <Link
                    href="/score-rankings"
                    className="text-orange-600 hover:underline"
                    data-oid="u6t5.jg"
                >
                    查看详情 →
                </Link>
            </div>
        </section>
    );
}
