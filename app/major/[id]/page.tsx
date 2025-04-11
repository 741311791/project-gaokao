'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for major details
const majorData = {
    id: 1,
    name: '计算机科学与技术',
    category: '工学',
    code: '080901',
    degree: '工学学士',
    duration: '4年',
    description:
        '计算机科学与技术专业培养具备计算机科学与技术领域的基础理论、专业知识和实践技能，能够从事计算机软硬件系统的设计、开发、应用和研究的高级专门人才。本专业学生主要学习计算机科学与技术的基本理论和基本知识，接受计算机系统设计、开发和应用的基本训练，具有研究和开发计算机系统的基本能力。',
    courses: [
        '高等数学',
        '线性代数',
        '离散数学',
        '数据结构',
        '计算机组成原理',
        '操作系统',
        '计算机网络',
        '数据库系统',
        '软件工程',
        '编译原理',
        '人工智能',
    ],

    careerProspects: [
        '软件开发工程师',
        '系统架构师',
        '数据库管理员',
        '网络工程师',
        '人工智能工程师',
        '信息安全工程师',
        '技术管理人员',
    ],

    universities: [
        { id: 1, name: '清华大学', ranking: '全国第1', score: 680, batch: '本科提前批' },
        { id: 2, name: '北京大学', ranking: '全国第2', score: 675, batch: '本科提前批' },
        { id: 3, name: '浙江大学', ranking: '全国第3', score: 670, batch: '本科提前批' },
        { id: 4, name: '哈尔滨工业大学', ranking: '全国第4', score: 650, batch: '本科一批' },
        { id: 5, name: '河北工业大学', ranking: '全国第30', score: 610, batch: '本科一批' },
    ],

    salaryInfo: {
        averageStarting: '10000元/月',
        averageAfter3Years: '20000元/月',
        averageAfter5Years: '30000元/月',
        topIndustries: ['互联网', '金融科技', '人工智能', '通信'],
    },
};

export default function MajorPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('overview');
    const majorId = params.id;

    // In a real app, you would fetch the major data based on the ID
    // const major = fetchMajorById(majorId);
    const major = majorData; // Using mock data for now

    return (
        <div className="min-h-screen bg-gray-50" data-oid="-7tg.j0">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="f4laq_o">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="4x_4_8-">
                    <div className="flex justify-between items-center py-4" data-oid="4z32n77">
                        <div className="flex items-center" data-oid="y-4-ao9">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="axesk1i"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="h:1nc1x">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="l.b:3cf"
                            >
                                首页
                            </Link>
                            <Link
                                href="/#universities"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1277d-k"
                            >
                                高校信息查询
                            </Link>
                            <Link
                                href="/#scoreLines"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid=".:b5-04"
                            >
                                历年分数线
                            </Link>
                            <Link
                                href="/#scoreRankings"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="50x255c"
                            >
                                一分一档查询
                            </Link>
                            <Link
                                href="/#admissionPlans"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="isze1cx"
                            >
                                招生计划查询
                            </Link>
                        </nav>
                        <div data-oid="2g4d5pr">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="tb0syjw"
                            >
                                登录/注册
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Major Header */}
            <div className="bg-green-700 text-white" data-oid="3srmlxz">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="4viol4g">
                    <div className="flex flex-col" data-oid="hn1olid">
                        <h1 className="text-3xl font-bold" data-oid="3bdl6_c">
                            {major.name}
                        </h1>
                        <p className="text-green-100 mt-1" data-oid="673vzqk">
                            专业代码：{major.code} | 学科门类：{major.category}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4" data-oid="aap.:l5">
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="4vmarvo"
                            >
                                {major.degree}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="6ebc626"
                            >
                                学制{major.duration}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="5drxur6"
                            >
                                热门专业
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="bik7hid">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="yvdz:.f">
                    <div className="flex overflow-x-auto" data-oid="nf9rlmo">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="6:4_0z2"
                        >
                            专业概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('courses')}
                            data-oid=".m:r23-"
                        >
                            主要课程
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'universities' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="akiikup"
                        >
                            开设院校
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'career' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('career')}
                            data-oid="gys-7i."
                        >
                            就业前景
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="2hb-mps">
                <div className="md:flex md:space-x-8" data-oid="o84:k5m">
                    {/* Main content area */}
                    <div className="md:w-2/3" data-oid="dgc-r.-">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="5ot0bih">
                            {activeTab === 'overview' && (
                                <div data-oid="iru5ah3">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="t70cetd">
                                        专业介绍
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="4z3x9xx"
                                    >
                                        {major.description}
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="c4cp3ob">
                                        基本信息
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="z_j1_3:"
                                    >
                                        <div className="flex" data-oid="14qol-d">
                                            <span className="text-gray-500 w-24" data-oid="y6036:h">
                                                专业名称：
                                            </span>
                                            <span className="text-gray-900" data-oid="vdw4q71">
                                                {major.name}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="_zpjldl">
                                            <span className="text-gray-500 w-24" data-oid="qw532rb">
                                                专业代码：
                                            </span>
                                            <span className="text-gray-900" data-oid="97g4jt1">
                                                {major.code}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="t:s2wpu">
                                            <span className="text-gray-500 w-24" data-oid="lyjou63">
                                                学科门类：
                                            </span>
                                            <span className="text-gray-900" data-oid="w65-w.t">
                                                {major.category}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="fv0wf:n">
                                            <span className="text-gray-500 w-24" data-oid="b7h65kn">
                                                授予学位：
                                            </span>
                                            <span className="text-gray-900" data-oid="vl3vr6j">
                                                {major.degree}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="nbzjomv">
                                            <span className="text-gray-500 w-24" data-oid="uwojjhy">
                                                修业年限：
                                            </span>
                                            <span className="text-gray-900" data-oid="kh3_:-7">
                                                {major.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'courses' && (
                                <div data-oid=".r9w.2j">
                                    <h2 className="text-xl font-semibold mb-4" data-oid=".0fn.x6">
                                        主要课程
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="gfi.2f0">
                                        {major.name}专业的学生需要学习以下核心课程：
                                    </p>

                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="1l.sya0"
                                    >
                                        {major.courses.map((course, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-50 p-3 rounded-md"
                                                data-oid="x37z521"
                                            >
                                                <span className="text-gray-800" data-oid="b.ijhky">
                                                    {course}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400"
                                        data-oid="0_qdmnp"
                                    >
                                        <h4
                                            className="text-yellow-800 font-medium mb-2"
                                            data-oid="ekre1vx"
                                        >
                                            学习提示
                                        </h4>
                                        <p className="text-yellow-700" data-oid="bvo1l62">
                                            本专业需要较强的数学基础和逻辑思维能力，建议有志于学习本专业的学生在高中阶段注重数学和物理学科的学习。
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'universities' && (
                                <div data-oid="t3.m2pq">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="o47vmgy">
                                        开设院校
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="yeje68_">
                                        以下是开设{major.name}
                                        专业的部分高校及其在河北省的录取分数线：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="1oi94mx">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid=":y7zrwr"
                                        >
                                            <thead className="bg-gray-50" data-oid="ap0x3hb">
                                                <tr data-oid="pfcaq6a">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="2k18qnp"
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="ddotpq5"
                                                    >
                                                        专业排名
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="lr5xrm:"
                                                    >
                                                        录取批次
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="o9ws70g"
                                                    >
                                                        最低分数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="fziplsp"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="3r7i9lr"
                                            >
                                                {major.universities.map((uni) => (
                                                    <tr key={uni.id} data-oid="sjhqkw.">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="07d1utx"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="lyh4di-"
                                                            >
                                                                {uni.name}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="j8r1qu7"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="ksarg6e"
                                                            >
                                                                {uni.ranking}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="_mr7hfj"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="dhxhxsi"
                                                            >
                                                                {uni.batch}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="r47s1j5"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="yxg8d4u"
                                                            >
                                                                {uni.score}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="d8rs6zn"
                                                        >
                                                            <Link
                                                                href={`/university/${uni.id}`}
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="rlxorof"
                                                            >
                                                                查看院校
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'career' && (
                                <div data-oid="xip.u86">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="2yq5-8h">
                                        就业前景
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="q30mgpm"
                                    >
                                        {major.name}
                                        专业毕业生就业前景广阔，可在IT、互联网、金融、通信等多个行业就业。随着人工智能、大数据、云计算等技术的发展，本专业人才需求持续增长。
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="g4guxom">
                                        薪资水平
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                                        data-oid=":5d9np:"
                                    >
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="gf8p4gk"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="da:qxd0"
                                            >
                                                应届毕业生平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="9jvrql0"
                                            >
                                                {major.salaryInfo.averageStarting}
                                            </p>
                                        </div>
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="ke0rb-g"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="6ddga-8"
                                            >
                                                工作3年后平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="-xa6d8:"
                                            >
                                                {major.salaryInfo.averageAfter3Years}
                                            </p>
                                        </div>
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="ju6itmh"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="q05h6zw"
                                            >
                                                工作5年后平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="qcuz6o1"
                                            >
                                                {major.salaryInfo.averageAfter5Years}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="ky0_5y2">
                                        就业方向
                                    </h3>
                                    <div className="mb-6" data-oid="35:u3t8">
                                        <div
                                            className="flex flex-wrap gap-2 mb-4"
                                            data-oid="9:5i53d"
                                        >
                                            {major.salaryInfo.topIndustries.map(
                                                (industry, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                                        data-oid="7jq7vf8"
                                                    >
                                                        {industry}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <h4 className="text-md font-medium mb-2" data-oid="enf6s1u">
                                            常见职位
                                        </h4>
                                        <ul
                                            className="list-disc pl-5 space-y-1 text-gray-700"
                                            data-oid="uo7b1ye"
                                        >
                                            {major.careerProspects.map((position, index) => (
                                                <li key={index} data-oid="18e28i8">
                                                    {position}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:w-1/3 mt-6 md:mt-0" data-oid="y885zdo">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="65emdx3">
                            <h3 className="text-lg font-medium mb-4" data-oid=".zfrkkc">
                                快速操作
                            </h3>
                            <div className="space-y-3" data-oid="bsonarp">
                                <button
                                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                    data-oid="hrag15r"
                                >
                                    收藏该专业
                                </button>
                                <button
                                    className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                    data-oid="28yf08w"
                                >
                                    对比其他专业
                                </button>
                                <button
                                    className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                    data-oid="w9:iorz"
                                >
                                    查看录取概率
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="yo3vf9b">
                            <h3 className="text-lg font-medium mb-4" data-oid="pa-td4.">
                                专业适合度测评
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid="rt75dpy">
                                不确定这个专业是否适合你？参加我们的专业适合度测评，了解你的兴趣和能力是否与该专业匹配。
                            </p>
                            <button
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="qq83dpo"
                            >
                                开始测评
                            </button>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6" data-oid="8fofbc6">
                            <h3 className="text-lg font-medium mb-4" data-oid="rfg348b">
                                相似专业推荐
                            </h3>
                            <ul className="space-y-3" data-oid="gic0wv6">
                                <li data-oid="f6gu5r9">
                                    <Link
                                        href="/major/2"
                                        className="text-green-600 hover:underline"
                                        data-oid="-374l9a"
                                    >
                                        软件工程
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="e4a24t9">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="97r4ke1">
                                    <Link
                                        href="/major/3"
                                        className="text-green-600 hover:underline"
                                        data-oid="2ci9-k_"
                                    >
                                        人工智能
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid=":hmnxq3">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="jb1jme6">
                                    <Link
                                        href="/major/4"
                                        className="text-green-600 hover:underline"
                                        data-oid="-i6f-cp"
                                    >
                                        数据科学与大数据技术
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="2b-tpa7">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="axfx:gh">
                                    <Link
                                        href="/major/5"
                                        className="text-green-600 hover:underline"
                                        data-oid="ct64ejc"
                                    >
                                        网络工程
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="ec7iu6e">
                                        工学 | 就业前景：良好
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="t:rif06">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="cw1hr1y">
                    <div className="text-center text-gray-500" data-oid="iz78xlh">
                        <p data-oid="w4unaf.">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
