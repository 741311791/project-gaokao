'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for university details
const universityData = {
    id: 1,
    name: '清华大学',
    englishName: 'Tsinghua University',
    logo: '/tsinghua-logo.png', // This would be a real image path in a production app
    location: '北京市海淀区清华园1号',
    type: '985/211',
    founded: '1911年',
    affiliation: '教育部直属',
    website: 'https://www.tsinghua.edu.cn',
    description:
        '清华大学（Tsinghua University），简称"清华"，是中华人民共和国教育部直属的全国重点大学，位列国家"双一流"A类、"985工程"、"211工程"，为九校联盟、中国大学校长联谊会、亚洲大学联盟、环太平洋大学联盟、清华—剑桥—MIT低碳大学联盟成员，入选"基础学科拔尖学生培养计划"、"高等学校创新能力提升计划"、"高等学校学科创新引智计划"，是一所综合性、研究型大学。',
    admissionInfo:
        '清华大学本科招生以统一高考为基本录取依据，同时也通过自主选拔、保送等多种方式选拔人才。学校注重选拔综合素质高、创新潜质大的优秀学生。',
    majors: [
        { id: 1, name: '计算机科学与技术', category: '工学', ranking: '全国第1' },
        { id: 2, name: '电子信息工程', category: '工学', ranking: '全国第1' },
        { id: 3, name: '机械工程', category: '工学', ranking: '全国第1' },
        { id: 4, name: '建筑学', category: '工学', ranking: '全国第1' },
        { id: 5, name: '经济学', category: '经济学', ranking: '全国第2' },
    ],

    scoreLines: [
        { year: 2022, province: '河北', batch: '本科提前批', score: 680, rank: 100 },
        { year: 2021, province: '河北', batch: '本科提前批', score: 675, rank: 120 },
        { year: 2020, province: '河北', batch: '本科提前批', score: 670, rank: 150 },
    ],

    admissionPlans: [
        { year: 2022, province: '河北', plan: 30, actual: 30 },
        { year: 2021, province: '河北', plan: 28, actual: 28 },
        { year: 2020, province: '河北', plan: 25, actual: 25 },
    ],

    facilities: [
        '图书馆藏书量超过500万册',
        '拥有国家级重点实验室40余个',
        '校园占地面积约4平方公里',
        '体育设施完善，包括游泳馆、田径场、篮球场等',
    ],

    famous: [
        '钱学森 - 中国航天之父',
        '杨振宁 - 诺贝尔物理学奖获得者',
        '朱镕基 - 中国前总理',
        '马化腾 - 腾讯创始人',
    ],
};

export default function UniversityPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('overview');
    const universityId = params.id;

    // In a real app, you would fetch the university data based on the ID
    // const university = fetchUniversityById(universityId);
    const university = universityData; // Using mock data for now

    return (
        <div className="min-h-screen bg-gray-50" data-oid="p9jw:bh">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="cirn4gp">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e2i7e2:">
                    <div className="flex justify-between items-center py-4" data-oid="5jio11z">
                        <div className="flex items-center" data-oid="n03eei8">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="0ha-r97"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="dya.e0s">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="82r6_.5"
                            >
                                首页
                            </Link>
                            <Link
                                href="/#universities"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="5vx:una"
                            >
                                高校信息查询
                            </Link>
                            <Link
                                href="/#scoreLines"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="43mllo_"
                            >
                                历年分数线
                            </Link>
                            <Link
                                href="/#scoreRankings"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="g1a.wvz"
                            >
                                一分一档查询
                            </Link>
                            <Link
                                href="/#admissionPlans"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1dgl-69"
                            >
                                招生计划查询
                            </Link>
                        </nav>
                        <div data-oid=".99a-n4">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="f4w0v57"
                            >
                                登录/注册
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* University Header */}
            <div className="bg-blue-700 text-white" data-oid="o.o7q7e">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="am6hdmx">
                    <div
                        className="flex flex-col md:flex-row items-center md:items-start"
                        data-oid=".z.j.kk"
                    >
                        <div
                            className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6"
                            data-oid="5et_ega"
                        >
                            {/* In a real app, this would be an actual image */}
                            <span className="text-blue-700 text-2xl font-bold" data-oid="b48e9ww">
                                {university.name.substring(0, 2)}
                            </span>
                        </div>
                        <div data-oid=":rcok-d">
                            <h1 className="text-3xl font-bold" data-oid="ii.rxzz">
                                {university.name}
                            </h1>
                            <p className="text-blue-100 mt-1" data-oid="sbdu2.r">
                                {university.englishName}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4" data-oid="_2qjkmn">
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="6saoz0l"
                                >
                                    {university.type}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="x6.l08c"
                                >
                                    {university.affiliation}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="gq4zevc"
                                >
                                    创建于{university.founded}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid=".6rfuzp">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ec6k5z4">
                    <div className="flex overflow-x-auto" data-oid="7goz0zz">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="0065h4u"
                        >
                            学校概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'majors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('majors')}
                            data-oid="imyiet-"
                        >
                            专业设置
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'admission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('admission')}
                            data-oid="8n_t8wg"
                        >
                            招生信息
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="y_-6q8:"
                        >
                            历年分数线
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'facilities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('facilities')}
                            data-oid="9hn39r-"
                        >
                            校园设施
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="fb41i9z">
                <div className="md:flex md:space-x-8" data-oid="y6oo-7w">
                    {/* Main content area */}
                    <div className="md:w-2/3" data-oid="nnh7dx:">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="ed-73z7">
                            {activeTab === 'overview' && (
                                <div data-oid="jcta1dn">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="6gzh4vs">
                                        学校简介
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="2xxx84x"
                                    >
                                        {university.description}
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="7wm5.ke">
                                        基本信息
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="i7ceu5e"
                                    >
                                        <div className="flex" data-oid="v0xkj5h">
                                            <span className="text-gray-500 w-24" data-oid="9djweb5">
                                                学校类型：
                                            </span>
                                            <span className="text-gray-900" data-oid="zw-nppc">
                                                {university.type}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="qfyzazm">
                                            <span className="text-gray-500 w-24" data-oid="cn8zsmq">
                                                创办时间：
                                            </span>
                                            <span className="text-gray-900" data-oid="yu6yt5e">
                                                {university.founded}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="0::iinc">
                                            <span className="text-gray-500 w-24" data-oid="i7bwpek">
                                                隶属关系：
                                            </span>
                                            <span className="text-gray-900" data-oid="it5xwfl">
                                                {university.affiliation}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="ieml.gl">
                                            <span className="text-gray-500 w-24" data-oid="pu64_tr">
                                                学校地址：
                                            </span>
                                            <span className="text-gray-900" data-oid="8ui_gfv">
                                                {university.location}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="85mdy0k">
                                            <span className="text-gray-500 w-24" data-oid="pje:bvh">
                                                学校网址：
                                            </span>
                                            <a
                                                href={university.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                                data-oid="btya_zg"
                                            >
                                                {university.website}
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="z9vh9jb">
                                        知名校友
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                        data-oid="9w5bdrb"
                                    >
                                        {university.famous.map((person, index) => (
                                            <li key={index} data-oid="irc8.m6">
                                                {person}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'majors' && (
                                <div data-oid="pyrq38z">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="zfe3b_7">
                                        专业设置
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="e_r3ppo">
                                        {university.name}
                                        拥有多个国家级重点学科，以下是部分优势专业：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="5vjz7n7">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="hen0aa8"
                                        >
                                            <thead className="bg-gray-50" data-oid="hdc10j4">
                                                <tr data-oid="3edf80:">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="4_jv-uk"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="w82eky1"
                                                    >
                                                        学科门类
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="mjr_1sm"
                                                    >
                                                        全国排名
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="bhhhwmu"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="::mhqi8"
                                            >
                                                {university.majors.map((major) => (
                                                    <tr key={major.id} data-oid="65s-:0l">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="m_168u5"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="grczfjj"
                                                            >
                                                                {major.name}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="otmcw6j"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="jt:ryay"
                                                            >
                                                                {major.category}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="8_mrv1p"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="h7wpz0w"
                                                            >
                                                                {major.ranking}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="gbnqx9s"
                                                        >
                                                            <Link
                                                                href={`/major/${major.id}`}
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="yf3:9tx"
                                                            >
                                                                查看详情
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'admission' && (
                                <div data-oid="lylp2v8">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="pur8-6.">
                                        招生信息
                                    </h2>
                                    <div className="mb-6" data-oid="4pja5w:">
                                        <h3 className="text-lg font-medium mb-3" data-oid="h6s68_t">
                                            招生政策
                                        </h3>
                                        <p
                                            className="text-gray-700 mb-4 leading-relaxed"
                                            data-oid="iah-q9k"
                                        >
                                            {university.admissionInfo}
                                        </p>
                                    </div>

                                    <div className="mb-6" data-oid="ptufujz">
                                        <h3 className="text-lg font-medium mb-3" data-oid="8-1i13n">
                                            河北省招生计划
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="b2qacba">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="3xvvgpe"
                                            >
                                                <thead className="bg-gray-50" data-oid="usbd1v6">
                                                    <tr data-oid=":ynskx9">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="nrbrsq_"
                                                        >
                                                            年份
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="4sha4s7"
                                                        >
                                                            计划招生人数
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="g0k13wi"
                                                        >
                                                            实际招生人数
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="um_.fd3"
                                                >
                                                    {university.admissionPlans.map(
                                                        (plan, index) => (
                                                            <tr key={index} data-oid="asmvw-6">
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="ivvxrrv"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="_n0p_-z"
                                                                    >
                                                                        {plan.year}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="pxa1to2"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="mvi5.6x"
                                                                    >
                                                                        {plan.plan}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="jehb36l"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="lg12:yr"
                                                                    >
                                                                        {plan.actual}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ),
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'scoreLines' && (
                                <div data-oid="a_3cb7w">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="e5mrwrd">
                                        历年分数线
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="mlsmnb2">
                                        以下是{university.name}在河北省的历年录取分数线和位次：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="y17gs3j">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="xs1e5dg"
                                        >
                                            <thead className="bg-gray-50" data-oid=":o9n1s3">
                                                <tr data-oid="cw5kjiu">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid=".ll9cn7"
                                                    >
                                                        年份
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid=":-fa1hs"
                                                    >
                                                        批次
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="wsnzf:j"
                                                    >
                                                        最低分数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="tqvw66-"
                                                    >
                                                        最低位次
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="oyat4kv"
                                            >
                                                {university.scoreLines.map((line, index) => (
                                                    <tr key={index} data-oid="crgeaec">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="0hh8sve"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="j16847l"
                                                            >
                                                                {line.year}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="csy5j:z"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="uv3kioe"
                                                            >
                                                                {line.batch}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="8p:bjf4"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="igs0i.4"
                                                            >
                                                                {line.score}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="ke64:ts"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="ku6id6d"
                                                            >
                                                                {line.rank}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'facilities' && (
                                <div data-oid="3n2rqb7">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="2fqn0c6">
                                        校园设施
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="y3wxxt4">
                                        {university.name}
                                        拥有先进的教学设施和优美的校园环境，为学生提供良好的学习和生活条件。
                                    </p>

                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                        data-oid="om.20vk"
                                    >
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="mud_-h:"
                                        >
                                            <span className="text-gray-500" data-oid=":3t::ho">
                                                校园图片 1
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="66i7n8q"
                                        >
                                            <span className="text-gray-500" data-oid="dnc1y2b">
                                                校园图片 2
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="u.0uown"
                                        >
                                            <span className="text-gray-500" data-oid="719wl.j">
                                                校园图片 3
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="9q3-168"
                                        >
                                            <span className="text-gray-500" data-oid="eb28wr3">
                                                校园图片 4
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="dwb0jz3">
                                        主要设施
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                        data-oid=".74pw24"
                                    >
                                        {university.facilities.map((facility, index) => (
                                            <li key={index} data-oid="ikt.ftr">
                                                {facility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:w-1/3 mt-6 md:mt-0" data-oid="3l.87oz">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="xi2p6-w">
                            <h3 className="text-lg font-medium mb-4" data-oid="s3qql-m">
                                快速操作
                            </h3>
                            <div className="space-y-3" data-oid="snt48v0">
                                <button
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    data-oid="mlq.ps9"
                                >
                                    收藏该院校
                                </button>
                                <button
                                    className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                    data-oid="h.kxjyt"
                                >
                                    对比其他院校
                                </button>
                                <button
                                    className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                    data-oid="v5z2de3"
                                >
                                    查看录取概率
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="btpnn.h">
                            <h3 className="text-lg font-medium mb-4" data-oid="652c81r">
                                联系方式
                            </h3>
                            <div className="space-y-2 text-gray-700" data-oid="7iwnej4">
                                <p data-oid="1y3w0az">招生办电话：010-12345678</p>
                                <p data-oid="mtcdn0f">招生办邮箱：admission@tsinghua.edu.cn</p>
                                <p data-oid="stmodm0">学校地址：{university.location}</p>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6" data-oid="j_j:y:_">
                            <h3 className="text-lg font-medium mb-4" data-oid="w7.o18k">
                                相似院校推荐
                            </h3>
                            <ul className="space-y-3" data-oid="cizb-_j">
                                <li data-oid="yt.1x-h">
                                    <Link
                                        href="/university/2"
                                        className="text-blue-600 hover:underline"
                                        data-oid="4cxmyqf"
                                    >
                                        北京大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="_r7n10h">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="9k1llvx">
                                    <Link
                                        href="/university/3"
                                        className="text-blue-600 hover:underline"
                                        data-oid="0et-tj3"
                                    >
                                        浙江大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="ryw0q3f">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="vz-oom:">
                                    <Link
                                        href="/university/4"
                                        className="text-blue-600 hover:underline"
                                        data-oid="tbim654"
                                    >
                                        复旦大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="lxecdrh">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="43jm0nn">
                                    <Link
                                        href="/university/5"
                                        className="text-blue-600 hover:underline"
                                        data-oid="gvzek17"
                                    >
                                        上海交通大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="9qy3ay:">
                                        综合类 985/211
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="f0wfmfg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid=":pp38u:">
                    <div className="text-center text-gray-500" data-oid="x9-yf1k">
                        <p data-oid="bl.-kgi">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
