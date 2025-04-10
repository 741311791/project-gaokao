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
        <div className="min-h-screen bg-gray-50" data-oid="hyfg3lq">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="s:.y8y-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="f.kzi.e">
                    <div className="flex justify-between items-center py-4" data-oid="ltrypvg">
                        <div className="flex items-center" data-oid="09dk2wj">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="o6:u:ge"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="-6kte7s">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="-ucs7dp"
                            >
                                首页
                            </Link>
                            <Link
                                href="/#universities"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="7:r5cxl"
                            >
                                高校信息查询
                            </Link>
                            <Link
                                href="/#scoreLines"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1lub.n9"
                            >
                                历年分数线
                            </Link>
                            <Link
                                href="/#scoreRankings"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1z:u6_t"
                            >
                                一分一档查询
                            </Link>
                            <Link
                                href="/#admissionPlans"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="74u1oik"
                            >
                                招生计划查询
                            </Link>
                        </nav>
                        <div data-oid="_1lkd2m">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="nzheqkl"
                            >
                                登录/注册
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Major Header */}
            <div className="bg-green-700 text-white" data-oid="0x06o-_">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="85p6.gh">
                    <div className="flex flex-col" data-oid="ommsj44">
                        <h1 className="text-3xl font-bold" data-oid="729lijz">
                            {major.name}
                        </h1>
                        <p className="text-green-100 mt-1" data-oid="ru36uvk">
                            专业代码：{major.code} | 学科门类：{major.category}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4" data-oid="h:m30ay">
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="w.w75-f"
                            >
                                {major.degree}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="1fc5.y6"
                            >
                                学制{major.duration}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="kcpklsl"
                            >
                                热门专业
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="z0ak-19">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9gczthb">
                    <div className="flex overflow-x-auto" data-oid="29aayez">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="2qq8l4j"
                        >
                            专业概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('courses')}
                            data-oid="l41bekj"
                        >
                            主要课程
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'universities' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="e9mc00n"
                        >
                            开设院校
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'career' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('career')}
                            data-oid="mb0nr7p"
                        >
                            就业前景
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="43d:467">
                <div className="md:flex md:space-x-8" data-oid=".h7dnet">
                    {/* Main content area */}
                    <div className="md:w-2/3" data-oid="hsadqnm">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="gu-xvz5">
                            {activeTab === 'overview' && (
                                <div data-oid="lvl1fsg">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="my6v7o6">
                                        专业介绍
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="54-fo29"
                                    >
                                        {major.description}
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="4n:gkrc">
                                        基本信息
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="9mcw89h"
                                    >
                                        <div className="flex" data-oid="ah7ze9y">
                                            <span className="text-gray-500 w-24" data-oid="pzemluo">
                                                专业名称：
                                            </span>
                                            <span className="text-gray-900" data-oid="wsoj-se">
                                                {major.name}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="s3p1lpm">
                                            <span className="text-gray-500 w-24" data-oid="i_ha43_">
                                                专业代码：
                                            </span>
                                            <span className="text-gray-900" data-oid="o8yjkw0">
                                                {major.code}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="8hr48iv">
                                            <span className="text-gray-500 w-24" data-oid="d.x1kd8">
                                                学科门类：
                                            </span>
                                            <span className="text-gray-900" data-oid="ze90rwb">
                                                {major.category}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="xs2acwx">
                                            <span className="text-gray-500 w-24" data-oid="6fttcvm">
                                                授予学位：
                                            </span>
                                            <span className="text-gray-900" data-oid="fbu9zd-">
                                                {major.degree}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="ukbpws8">
                                            <span className="text-gray-500 w-24" data-oid="zu:uatq">
                                                修业年限：
                                            </span>
                                            <span className="text-gray-900" data-oid="u4pnqhp">
                                                {major.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'courses' && (
                                <div data-oid="_ag7ahd">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="fcx.08f">
                                        主要课程
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid=":d02kkf">
                                        {major.name}专业的学生需要学习以下核心课程：
                                    </p>

                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="zv6ib45"
                                    >
                                        {major.courses.map((course, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-50 p-3 rounded-md"
                                                data-oid="vttq-25"
                                            >
                                                <span className="text-gray-800" data-oid="0-x1_8j">
                                                    {course}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400"
                                        data-oid=":883:c9"
                                    >
                                        <h4
                                            className="text-yellow-800 font-medium mb-2"
                                            data-oid="w-:in_u"
                                        >
                                            学习提示
                                        </h4>
                                        <p className="text-yellow-700" data-oid="w_oalmq">
                                            本专业需要较强的数学基础和逻辑思维能力，建议有志于学习本专业的学生在高中阶段注重数学和物理学科的学习。
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'universities' && (
                                <div data-oid="bj0je0e">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="wkt_:pg">
                                        开设院校
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid=":vc.b:r">
                                        以下是开设{major.name}
                                        专业的部分高校及其在河北省的录取分数线：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="a3qkxt3">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="t8p986s"
                                        >
                                            <thead className="bg-gray-50" data-oid="t:2bdqd">
                                                <tr data-oid="30o4984">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="b75y9m."
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="yr-l6qc"
                                                    >
                                                        专业排名
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="xaejk2d"
                                                    >
                                                        录取批次
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="nin9s6a"
                                                    >
                                                        最低分数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="7bymr9s"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="v9xgx5."
                                            >
                                                {major.universities.map((uni) => (
                                                    <tr key={uni.id} data-oid="0f:g42c">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="xogbjm:"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="citebb8"
                                                            >
                                                                {uni.name}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="_cga3mu"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="iu731js"
                                                            >
                                                                {uni.ranking}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="wx9lcvr"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="sd1vtn."
                                                            >
                                                                {uni.batch}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="wuhdjv2"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="-_:v4tb"
                                                            >
                                                                {uni.score}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="95d4:-8"
                                                        >
                                                            <Link
                                                                href={`/university/${uni.id}`}
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="ibzk6vk"
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
                                <div data-oid="vn:vyt7">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="6emb.6b">
                                        就业前景
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="35448bj"
                                    >
                                        {major.name}
                                        专业毕业生就业前景广阔，可在IT、互联网、金融、通信等多个行业就业。随着人工智能、大数据、云计算等技术的发展，本专业人才需求持续增长。
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="-gysl-s">
                                        薪资水平
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                                        data-oid="zxokf0x"
                                    >
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="765yfzd"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="wf1-azv"
                                            >
                                                应届毕业生平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="iwdb2i6"
                                            >
                                                {major.salaryInfo.averageStarting}
                                            </p>
                                        </div>
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="ucip2:u"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="n-d1qyx"
                                            >
                                                工作3年后平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="fqpww0q"
                                            >
                                                {major.salaryInfo.averageAfter3Years}
                                            </p>
                                        </div>
                                        <div
                                            className="bg-blue-50 p-4 rounded-lg text-center"
                                            data-oid="tojz590"
                                        >
                                            <p
                                                className="text-sm text-blue-600 mb-1"
                                                data-oid="bx-p.:w"
                                            >
                                                工作5年后平均薪资
                                            </p>
                                            <p
                                                className="text-xl font-bold text-blue-800"
                                                data-oid="quazx.0"
                                            >
                                                {major.salaryInfo.averageAfter5Years}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="a2im_xv">
                                        就业方向
                                    </h3>
                                    <div className="mb-6" data-oid=":34ssl9">
                                        <div
                                            className="flex flex-wrap gap-2 mb-4"
                                            data-oid="hcbosed"
                                        >
                                            {major.salaryInfo.topIndustries.map(
                                                (industry, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                                        data-oid="x3y_7l5"
                                                    >
                                                        {industry}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <h4 className="text-md font-medium mb-2" data-oid="vg-q-ux">
                                            常见职位
                                        </h4>
                                        <ul
                                            className="list-disc pl-5 space-y-1 text-gray-700"
                                            data-oid="ln3p0lu"
                                        >
                                            {major.careerProspects.map((position, index) => (
                                                <li key={index} data-oid="45rptti">
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
                    <div className="md:w-1/3 mt-6 md:mt-0" data-oid="1af4etk">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="ov.f3r6">
                            <h3 className="text-lg font-medium mb-4" data-oid="qifvd3n">
                                快速操作
                            </h3>
                            <div className="space-y-3" data-oid="m84i.cl">
                                <button
                                    className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                    data-oid="182uxy7"
                                >
                                    收藏该专业
                                </button>
                                <button
                                    className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                    data-oid="svkqcp2"
                                >
                                    对比其他专业
                                </button>
                                <button
                                    className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                    data-oid="jg7ul5t"
                                >
                                    查看录取概率
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="55my3ye">
                            <h3 className="text-lg font-medium mb-4" data-oid="ie93m:e">
                                专业适合度测评
                            </h3>
                            <p className="text-gray-700 mb-4" data-oid=":0lh_k3">
                                不确定这个专业是否适合你？参加我们的专业适合度测评，了解你的兴趣和能力是否与该专业匹配。
                            </p>
                            <button
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="q2t3qvn"
                            >
                                开始测评
                            </button>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6" data-oid="i2xfkgf">
                            <h3 className="text-lg font-medium mb-4" data-oid="rpwpk.o">
                                相似专业推荐
                            </h3>
                            <ul className="space-y-3" data-oid=":h7abh9">
                                <li data-oid="gp0mkoi">
                                    <Link
                                        href="/major/2"
                                        className="text-green-600 hover:underline"
                                        data-oid="g4ssunj"
                                    >
                                        软件工程
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="a3kzqmv">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="_lie76j">
                                    <Link
                                        href="/major/3"
                                        className="text-green-600 hover:underline"
                                        data-oid="vrsim7_"
                                    >
                                        人工智能
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="mdxe_kf">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="4fcbxhc">
                                    <Link
                                        href="/major/4"
                                        className="text-green-600 hover:underline"
                                        data-oid="xcmgtw."
                                    >
                                        数据科学与大数据技术
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="eswl155">
                                        工学 | 就业前景：优秀
                                    </p>
                                </li>
                                <li data-oid="usyb99l">
                                    <Link
                                        href="/major/5"
                                        className="text-green-600 hover:underline"
                                        data-oid="9:28bso"
                                    >
                                        网络工程
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid=".l4_cu-">
                                        工学 | 就业前景：良好
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="zptg6w4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="foqe._j">
                    <div className="text-center text-gray-500" data-oid="nydkayo">
                        <p data-oid="bi.m8by">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
