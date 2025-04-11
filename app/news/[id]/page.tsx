'use client';

import Link from 'next/link';

// Mock data for news article
const newsData = {
    id: 1,
    title: '2023年河北省高考志愿填报指南',
    date: '2023-06-20',
    category: '政策解读',
    author: '河北省教育考试院',
    content: `
        <h2>一、志愿填报时间安排</h2>
        <p>根据河北省教育考试院公布的信息，2023年河北省高考志愿填报将于6月25日至6月28日进行，分为以下几个阶段：</p>
        <ul>
            <li>6月25日：本科提前批志愿填报</li>
            <li>6月26日：本科批志愿填报</li>
            <li>6月27日：专科提前批志愿填报</li>
            <li>6月28日：专科批志愿填报</li>
        </ul>
        
        <h2>二、志愿设置及填报规则</h2>
        <p>2023年河北省高考志愿设置如下：</p>
        <ol>
            <li>本科提前批：设置1个院校志愿，每个院校志愿可填报6个专业志愿和1个专业服从调剂志愿。</li>
            <li>本科批：设置6个院校志愿，每个院校志愿可填报6个专业志愿和1个专业服从调剂志愿。</li>
            <li>专科提前批：设置1个院校志愿，每个院校志愿可填报6个专业志愿和1个专业服从调剂志愿。</li>
            <li>专科批：设置6个院校志愿，每个院校志愿可填报6个专业志愿和1个专业服从调剂志愿。</li>
        </ol>
        
        <h2>三、填报注意事项</h2>
        <p>1. <strong>了解自己的分数和位次</strong>：高考成绩公布后，考生应首先了解自己的分数和位次，这是填报志愿的基础。</p>
        <p>2. <strong>了解院校和专业</strong>：考生应充分了解目标院校的基本情况、专业设置、历年录取分数线等信息。</p>
        <p>3. <strong>合理定位</strong>：根据自己的分数和位次，合理选择院校和专业，建议采用"冲一冲、稳一稳、保一保"的策略。</p>
        <p>4. <strong>关注专业</strong>：选择专业时，应考虑自己的兴趣、能力和职业规划，不要盲目追求热门专业。</p>
        <p>5. <strong>服从调剂</strong>：建议勾选"专业服从调剂"选项，增加被录取的机会。</p>
        
        <h2>四、填报技巧</h2>
        <p>1. <strong>梯度填报</strong>：院校志愿应形成合理梯度，避免扎堆填报。</p>
        <p>2. <strong>冷热搭配</strong>：专业志愿应冷热搭配，增加被录取的机会。</p>
        <p>3. <strong>参考位次</strong>：填报志愿时，参考位次比参考分数更准确。</p>
        <p>4. <strong>关注招生计划</strong>：了解院校在河北省的招生计划，招生计划多的院校录取机会相对较大。</p>
        <p>5. <strong>注意批次</strong>：不同批次的填报策略应有所不同，本科提前批应相对保守，本科批可以适当冲一冲。</p>
        
        <h2>五、志愿填报平台使用指南</h2>
        <p>河北省高考志愿填报采用网上填报方式，考生可通过以下步骤进行操作：</p>
        <ol>
            <li>登录河北省教育考试院官网（https://www.hebeea.edu.cn）</li>
            <li>点击"高考志愿填报系统"</li>
            <li>输入考生号、密码和验证码登录</li>
            <li>按照系统提示填报志愿</li>
            <li>核对无误后提交</li>
            <li>打印志愿表</li>
        </ol>
        
        <h2>六、常见问题解答</h2>
        <p><strong>问：填报志愿时忘记密码怎么办？</strong></p>
        <p>答：可以携带本人身份证到县（市、区）招办申请重置密码。</p>
        
        <p><strong>问：提交志愿后还能修改吗？</strong></p>
        <p>答：在规定的填报时间内，考生可以多次修改志愿，以最后一次提交的志愿为准。</p>
        
        <p><strong>问：什么是平行志愿？</strong></p>
        <p>答：平行志愿是指考生同时填报多个院校志愿，投档时按照"分数优先，遵循志愿"的原则进行投档。</p>
    `,
    relatedNews: [
        {
            id: 2,
            title: '河北省2023年本科批次录取分数线公布',
            date: '2023-06-25',
            category: '分数线',
        },
        { id: 3, title: '如何科学填报志愿：专家建议', date: '2023-06-22', category: '志愿指导' },
        { id: 4, title: '2023年河北省高校招生计划一览', date: '2023-05-15', category: '招生计划' },
    ],
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
    const newsId = params.id;

    // In a real app, you would fetch the news data based on the ID
    // const news = fetchNewsById(newsId);
    const news = newsData; // Using mock data for now

    return (
        <div className="min-h-screen bg-gray-50" data-oid="0zpr-_e">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="rkt4uyf">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="pbzmav:">
                    <div className="flex justify-between items-center py-4" data-oid="l:atbak">
                        <div className="flex items-center" data-oid="7f:_.eu">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="nakzq4y"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="qwsvvyf">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="_b.bde-"
                            >
                                首页
                            </Link>
                            <Link
                                href="/#universities"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1lwk015"
                            >
                                高校信息查询
                            </Link>
                            <Link
                                href="/#scoreLines"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="qnuqp14"
                            >
                                历年分数线
                            </Link>
                            <Link
                                href="/#scoreRankings"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="o6a88gn"
                            >
                                一分一档查询
                            </Link>
                            <Link
                                href="/#admissionPlans"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="rlqec04"
                            >
                                招生计划查询
                            </Link>
                        </nav>
                        <div data-oid="jpg5cui">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid=".oyh.-k"
                            >
                                登录/注册
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="m-vaini">
                <div className="md:flex md:space-x-8" data-oid="0o8e9ly">
                    {/* Main content area */}
                    <div className="md:w-2/3" data-oid="89nujy.">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="3r0qof2">
                            <div className="mb-6" data-oid="o3d:afq">
                                <h1
                                    className="text-3xl font-bold text-gray-900 mb-2"
                                    data-oid="eopp_r-"
                                >
                                    {news.title}
                                </h1>
                                <div
                                    className="flex flex-wrap items-center text-sm text-gray-500 gap-4"
                                    data-oid="xjit9ry"
                                >
                                    <span data-oid="wj.wf5m">{news.date}</span>
                                    <span
                                        className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
                                        data-oid="puna-px"
                                    >
                                        {news.category}
                                    </span>
                                    <span data-oid="jpr_5s6">来源：{news.author}</span>
                                </div>
                            </div>

                            <div
                                className="prose prose-blue max-w-none"
                                dangerouslySetInnerHTML={{ __html: news.content }}
                                data-oid="oau_mwj"
                            />

                            <div className="mt-8 pt-6 border-t border-gray-200" data-oid="b2_2-gv">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="8ly989n"
                                >
                                    <button
                                        className="text-blue-600 hover:text-blue-800"
                                        data-oid=".twry54"
                                    >
                                        分享
                                    </button>
                                    <div className="flex space-x-2" data-oid="tcrzdt9">
                                        <button
                                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100"
                                            data-oid="jgeihej"
                                        >
                                            收藏
                                        </button>
                                        <button
                                            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                                            data-oid="3uj87um"
                                        >
                                            打印
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:w-1/3 mt-6 md:mt-0" data-oid="rtqvn5u">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="yvb7-.e">
                            <h3 className="text-lg font-medium mb-4" data-oid="a8e3xui">
                                相关资讯
                            </h3>
                            <div className="space-y-4" data-oid="x29cqym">
                                {news.relatedNews.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                        data-oid="73pjur4"
                                    >
                                        <Link
                                            href={`/news/${item.id}`}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                            data-oid="0t_76g0"
                                        >
                                            {item.title}
                                        </Link>
                                        <div
                                            className="flex justify-between mt-1 text-sm text-gray-500"
                                            data-oid="_shjsr2"
                                        >
                                            <span data-oid="p.hdqke">{item.date}</span>
                                            <span data-oid="c--_c43">{item.category}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="pxdeqj8">
                            <h3 className="text-lg font-medium mb-4" data-oid="s6n:ggd">
                                快速导航
                            </h3>
                            <div className="space-y-2" data-oid="e8-mk6u">
                                <Link
                                    href="/#universities"
                                    className="block text-blue-600 hover:text-blue-800"
                                    data-oid="7jm8epp"
                                >
                                    高校信息查询
                                </Link>
                                <Link
                                    href="/#scoreLines"
                                    className="block text-blue-600 hover:text-blue-800"
                                    data-oid="-208y7t"
                                >
                                    历年分数线查询
                                </Link>
                                <Link
                                    href="/#scoreRankings"
                                    className="block text-blue-600 hover:text-blue-800"
                                    data-oid="br081tz"
                                >
                                    一分一档查询
                                </Link>
                                <Link
                                    href="/#admissionPlans"
                                    className="block text-blue-600 hover:text-blue-800"
                                    data-oid="4vk4xs3"
                                >
                                    招生计划查询
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-50 shadow rounded-lg p-6" data-oid="f7w14te">
                            <h3
                                className="text-lg font-medium text-blue-800 mb-3"
                                data-oid="ixah.t6"
                            >
                                志愿填报咨询
                            </h3>
                            <p className="text-blue-700 mb-4" data-oid=":mbpk0a">
                                不确定如何填报志愿？我们的专业咨询师可以为您提供一对一的指导服务。
                            </p>
                            <button
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="pykxthi"
                            >
                                预约咨询
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="mnx60ln">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="facc-8a">
                    <div className="text-center text-gray-500" data-oid="jx1rrmb">
                        <p data-oid="tc6rxsh">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
