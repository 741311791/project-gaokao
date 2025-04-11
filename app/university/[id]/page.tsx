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
        <div className="min-h-screen bg-gray-50" data-oid="4j0f4tu">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="p-pjil6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="408fup:">
                    <div className="flex justify-between items-center py-4" data-oid="n4o6r_a">
                        <div className="flex items-center" data-oid="x_zckmu">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="q-je_1k"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="66jr.tu">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="n4mwxvx"
                            >
                                首页
                            </Link>
                            <Link
                                href="/#universities"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="bpd6:v."
                            >
                                高校信息查询
                            </Link>
                            <Link
                                href="/#scoreLines"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid=".c2wbr2"
                            >
                                历年分数线
                            </Link>
                            <Link
                                href="/#scoreRankings"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="0931-n1"
                            >
                                一分一档查询
                            </Link>
                            <Link
                                href="/#admissionPlans"
                                className="text-gray-600 hover:text-blue-600"
                                data-oid="1lystj4"
                            >
                                招生计划查询
                            </Link>
                        </nav>
                        <div data-oid="3x3zj.6">
                            <Link
                                href="/login"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="c-c9jvt"
                            >
                                登录/注册
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* University Header */}
            <div className="bg-blue-700 text-white" data-oid="azt28t.">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="yiy:kye">
                    <div
                        className="flex flex-col md:flex-row items-center md:items-start"
                        data-oid="-xktl0:"
                    >
                        <div
                            className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6"
                            data-oid="qvrhdkt"
                        >
                            {/* In a real app, this would be an actual image */}
                            <span className="text-blue-700 text-2xl font-bold" data-oid="gm9:g2x">
                                {university.name.substring(0, 2)}
                            </span>
                        </div>
                        <div data-oid="-umm1jr">
                            <h1 className="text-3xl font-bold" data-oid="x8w26gb">
                                {university.name}
                            </h1>
                            <p className="text-blue-100 mt-1" data-oid="uj7qsy5">
                                {university.englishName}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4" data-oid=".d1u1bw">
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="hi:whzk"
                                >
                                    {university.type}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="sids5w-"
                                >
                                    {university.affiliation}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="u6bg6y0"
                                >
                                    创建于{university.founded}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="y0uexz3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e:fcapb">
                    <div className="flex overflow-x-auto" data-oid="kaesg:z">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="wgjlhif"
                        >
                            学校概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'majors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('majors')}
                            data-oid="saymx:6"
                        >
                            专业设置
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'admission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('admission')}
                            data-oid="oyeuch_"
                        >
                            招生信息
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="5jm2m8o"
                        >
                            历年分数线
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'facilities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('facilities')}
                            data-oid="livj16j"
                        >
                            校园设施
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="x4uldej">
                <div className="md:flex md:space-x-8" data-oid="rbgvbe9">
                    {/* Main content area */}
                    <div className="md:w-2/3" data-oid=".2h0jkz">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="-bvo.2i">
                            {activeTab === 'overview' && (
                                <div data-oid="ppakyzd">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="fez385.">
                                        学校简介
                                    </h2>
                                    <p
                                        className="text-gray-700 mb-6 leading-relaxed"
                                        data-oid="f:v_4qb"
                                    >
                                        {university.description}
                                    </p>

                                    <h3 className="text-lg font-medium mb-3" data-oid="5pjbek:">
                                        基本信息
                                    </h3>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                        data-oid="71p9qu_"
                                    >
                                        <div className="flex" data-oid="b684c4q">
                                            <span className="text-gray-500 w-24" data-oid="orpkw5_">
                                                学校类型：
                                            </span>
                                            <span className="text-gray-900" data-oid="r696e_q">
                                                {university.type}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid=".58nxbz">
                                            <span className="text-gray-500 w-24" data-oid="ffw8khi">
                                                创办时间：
                                            </span>
                                            <span className="text-gray-900" data-oid="jlt6.p2">
                                                {university.founded}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="rvbhont">
                                            <span className="text-gray-500 w-24" data-oid="2ttin.m">
                                                隶属关系：
                                            </span>
                                            <span className="text-gray-900" data-oid="ao.814a">
                                                {university.affiliation}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="wxvsa05">
                                            <span className="text-gray-500 w-24" data-oid="bff3l1c">
                                                学校地址：
                                            </span>
                                            <span className="text-gray-900" data-oid="v:g_pmq">
                                                {university.location}
                                            </span>
                                        </div>
                                        <div className="flex" data-oid="ucvbwx5">
                                            <span className="text-gray-500 w-24" data-oid="u5oit3x">
                                                学校网址：
                                            </span>
                                            <a
                                                href={university.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                                data-oid="ko26u.9"
                                            >
                                                {university.website}
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="3q-sgwz">
                                        知名校友
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                        data-oid="3ww50f."
                                    >
                                        {university.famous.map((person, index) => (
                                            <li key={index} data-oid="qf-g5w9">
                                                {person}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {activeTab === 'majors' && (
                                <div data-oid="_g67cn_">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="qo9wmfw">
                                        专业设置
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="clkk.rp">
                                        {university.name}
                                        拥有多个国家级重点学科，以下是部分优势专业：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="paqe9bg">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="9elfe7-"
                                        >
                                            <thead className="bg-gray-50" data-oid="48697uq">
                                                <tr data-oid="94kmuqy">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="sh5415j"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="32j8rdw"
                                                    >
                                                        学科门类
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="t6l3jdr"
                                                    >
                                                        全国排名
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="im5ik3o"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="8r59x1f"
                                            >
                                                {university.majors.map((major) => (
                                                    <tr key={major.id} data-oid="14uy2ch">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="7ejflgm"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="uud59t4"
                                                            >
                                                                {major.name}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="5gi::fr"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="igzpkny"
                                                            >
                                                                {major.category}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="u_6y9-l"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="c.6ve-1"
                                                            >
                                                                {major.ranking}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="f7a8gm2"
                                                        >
                                                            <Link
                                                                href={`/major/${major.id}`}
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="eivcbd_"
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
                                <div data-oid="b.ii0rw">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="8us727x">
                                        招生信息
                                    </h2>
                                    <div className="mb-6" data-oid="z70ls5:">
                                        <h3 className="text-lg font-medium mb-3" data-oid="4erz9gn">
                                            招生政策
                                        </h3>
                                        <p
                                            className="text-gray-700 mb-4 leading-relaxed"
                                            data-oid="mhij3mo"
                                        >
                                            {university.admissionInfo}
                                        </p>
                                    </div>

                                    <div className="mb-6" data-oid="l56_2is">
                                        <h3 className="text-lg font-medium mb-3" data-oid="r4pm3tf">
                                            河北省招生计划
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="6ech8ws">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="1wge-d2"
                                            >
                                                <thead className="bg-gray-50" data-oid="99i9o.w">
                                                    <tr data-oid="ajxx.1h">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="f-04wk9"
                                                        >
                                                            年份
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="b7lg8uh"
                                                        >
                                                            计划招生人数
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="h:1mq1o"
                                                        >
                                                            实际招生人数
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="8.-ofgn"
                                                >
                                                    {university.admissionPlans.map(
                                                        (plan, index) => (
                                                            <tr key={index} data-oid="8xvrff4">
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="j5_qoe3"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="k9yyb0s"
                                                                    >
                                                                        {plan.year}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="lxc29ps"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="c1u2b1q"
                                                                    >
                                                                        {plan.plan}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    className="px-6 py-4 whitespace-nowrap"
                                                                    data-oid="vtezs3b"
                                                                >
                                                                    <div
                                                                        className="text-sm text-gray-900"
                                                                        data-oid="rstspdn"
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
                                <div data-oid="gjm1uw8">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="4onz9vt">
                                        历年分数线
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="9fxsf2q">
                                        以下是{university.name}在河北省的历年录取分数线和位次：
                                    </p>

                                    <div className="overflow-x-auto" data-oid="20857gw">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="r4-pgdf"
                                        >
                                            <thead className="bg-gray-50" data-oid="q87a4.r">
                                                <tr data-oid="yi.kn:k">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="jvw40-h"
                                                    >
                                                        年份
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="1zztok3"
                                                    >
                                                        批次
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="feriowc"
                                                    >
                                                        最低分数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="g4t3qdu"
                                                    >
                                                        最低位次
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="so6nx5a"
                                            >
                                                {university.scoreLines.map((line, index) => (
                                                    <tr key={index} data-oid="i90gi08">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="zhy7lfr"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="apmwn:."
                                                            >
                                                                {line.year}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="8y9..7b"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="jg36f-n"
                                                            >
                                                                {line.batch}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid=":hvhca6"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="zsx:xj-"
                                                            >
                                                                {line.score}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="z1t..x3"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="8n_6hi2"
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
                                <div data-oid="dbqu.:m">
                                    <h2 className="text-xl font-semibold mb-4" data-oid="i1fw8tw">
                                        校园设施
                                    </h2>
                                    <p className="text-gray-700 mb-6" data-oid="dszrpi9">
                                        {university.name}
                                        拥有先进的教学设施和优美的校园环境，为学生提供良好的学习和生活条件。
                                    </p>

                                    <div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                        data-oid="8yb:q1b"
                                    >
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="krt73gi"
                                        >
                                            <span className="text-gray-500" data-oid="v11zrfm">
                                                校园图片 1
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="g0gd-2i"
                                        >
                                            <span className="text-gray-500" data-oid="9nnj:.s">
                                                校园图片 2
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="ehsac6b"
                                        >
                                            <span className="text-gray-500" data-oid=".kgzdah">
                                                校园图片 3
                                            </span>
                                        </div>
                                        <div
                                            className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                            data-oid="hu0pl1k"
                                        >
                                            <span className="text-gray-500" data-oid="yeve5.e">
                                                校园图片 4
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-medium mb-3" data-oid="5_j11z9">
                                        主要设施
                                    </h3>
                                    <ul
                                        className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                        data-oid="at:n_6u"
                                    >
                                        {university.facilities.map((facility, index) => (
                                            <li key={index} data-oid="96o:ibg">
                                                {facility}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="md:w-1/3 mt-6 md:mt-0" data-oid="7sy.mcw">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="9xg046.">
                            <h3 className="text-lg font-medium mb-4" data-oid="c0h4yc1">
                                快速操作
                            </h3>
                            <div className="space-y-3" data-oid="cjfnw75">
                                <button
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    data-oid="nq7c-kt"
                                >
                                    收藏该院校
                                </button>
                                <button
                                    className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                    data-oid="at3ljeo"
                                >
                                    对比其他院校
                                </button>
                                <button
                                    className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                    data-oid="wfbnmlu"
                                >
                                    查看录取概率
                                </button>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="ab..l0d">
                            <h3 className="text-lg font-medium mb-4" data-oid="jg9.nqd">
                                联系方式
                            </h3>
                            <div className="space-y-2 text-gray-700" data-oid="dfqsi73">
                                <p data-oid="q1rtwp4">招生办电话：010-12345678</p>
                                <p data-oid="go6z7.u">招生办邮箱：admission@tsinghua.edu.cn</p>
                                <p data-oid="kx8e_3j">学校地址：{university.location}</p>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg p-6" data-oid="t91kiiy">
                            <h3 className="text-lg font-medium mb-4" data-oid="e9ip0-y">
                                相似院校推荐
                            </h3>
                            <ul className="space-y-3" data-oid="up85dc9">
                                <li data-oid="gaaop49">
                                    <Link
                                        href="/university/2"
                                        className="text-blue-600 hover:underline"
                                        data-oid="touxs3s"
                                    >
                                        北京大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="sp.a:wc">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="6-5g_0u">
                                    <Link
                                        href="/university/3"
                                        className="text-blue-600 hover:underline"
                                        data-oid="9uz_nab"
                                    >
                                        浙江大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="7h.kwtn">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="5t:dcfm">
                                    <Link
                                        href="/university/4"
                                        className="text-blue-600 hover:underline"
                                        data-oid="vw0wvcb"
                                    >
                                        复旦大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="grcaiq-">
                                        综合类 985/211
                                    </p>
                                </li>
                                <li data-oid="7t6.hoa">
                                    <Link
                                        href="/university/5"
                                        className="text-blue-600 hover:underline"
                                        data-oid="ll18.jm"
                                    >
                                        上海交通大学
                                    </Link>
                                    <p className="text-sm text-gray-500" data-oid="xbw_w3v">
                                        综合类 985/211
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="2_xalas">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid=":9-39on">
                    <div className="text-center text-gray-500" data-oid="0k46x65">
                        <p data-oid="kcnwtyv">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
