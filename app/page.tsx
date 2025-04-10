'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [yearFilter, setYearFilter] = useState('all');
    const [scoreFilter, setScoreFilter] = useState('');
    const [rankFilter, setRankFilter] = useState('');

    // Mock data for demonstration
    const latestNews = [
        { id: 1, title: '2023年河北省高考志愿填报指南', date: '2023-06-20', category: '政策解读' },
        {
            id: 2,
            title: '河北省2023年本科批次录取分数线公布',
            date: '2023-06-25',
            category: '分数线',
        },
        { id: 3, title: '如何科学填报志愿：专家建议', date: '2023-06-22', category: '志愿指导' },
        { id: 4, title: '2023年河北省高校招生计划一览', date: '2023-05-15', category: '招生计划' },
    ];

    const universities = [
        { id: 1, name: '清华大学', location: '北京', type: '985/211', tags: ['综合', '研究型'] },
        { id: 2, name: '河北大学', location: '河北保定', type: '省属重点', tags: ['综合'] },
        { id: 3, name: '河北工业大学', location: '天津', type: '211', tags: ['工科', '研究型'] },
    ];

    const majors = [
        { id: 1, name: '计算机科学与技术', category: '工学', tags: ['热门', '高薪'] },
        { id: 2, name: '软件工程', category: '工学', tags: ['热门', '高薪'] },
        { id: 3, name: '临床医学', category: '医学', tags: ['难度高', '就业稳定'] },
    ];

    const scoreLines = [
        {
            university: '清华大学',
            major: '计算机科学与技术',
            year: 2022,
            score: 680,
            batch: '本科提前批',
        },
        { university: '河北大学', major: '软件工程', year: 2022, score: 590, batch: '本科一批' },
        {
            university: '河北工业大学',
            major: '电气工程',
            year: 2022,
            score: 610,
            batch: '本科一批',
        },
    ];

    const scoreRankings = [
        { score: 700, rank: 100, year: 2022 },
        { score: 650, rank: 5000, year: 2022 },
        { score: 600, rank: 20000, year: 2022 },
        { score: 550, rank: 50000, year: 2022 },
    ];

    const admissionPlans = [
        { university: '清华大学', major: '计算机科学与技术', year: 2022, plan: 15, actual: 15 },
        { university: '河北大学', major: '软件工程', year: 2022, plan: 120, actual: 120 },
        { university: '河北工业大学', major: '电气工程', year: 2022, plan: 90, actual: 90 },
    ];

    const renderHome = () => (
        <div className="space-y-8" data-oid=".i5b_-e">
            <section className="bg-blue-50 p-8 rounded-lg" data-oid="2mp0o_y">
                <h2 className="text-2xl font-bold text-blue-800 mb-4" data-oid="c-bls-5">
                    河北高考志愿填报服务平台
                </h2>
                <p className="text-gray-700 mb-6" data-oid="bwh1ly1">
                    为河北考生提供全面的高考志愿填报服务，包括政策解读、院校专业查询、分数线查询、一分一档查询和招生计划查询等。
                </p>
                <div className="flex space-x-4" data-oid="5291c2b">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => setActiveTab('universities')}
                        data-oid="hqjdxnz"
                    >
                        开始查询
                    </button>
                    <button
                        className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
                        data-oid="-ngchf."
                    >
                        联系咨询师
                    </button>
                </div>
            </section>

            <section data-oid="f7y5lja">
                <div className="flex justify-between items-center mb-4" data-oid="8i-dj1v">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="kvlbywo">
                        河北考试院最新资讯
                    </h2>
                    <a href="#" className="text-blue-600 hover:underline" data-oid="mlaql2u">
                        查看全部
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="4jdipt7">
                    {latestNews.map((news) => (
                        <div
                            key={news.id}
                            className="border p-4 rounded-md hover:shadow-md transition"
                            data-oid="95up1zs"
                        >
                            <div className="flex justify-between" data-oid="3gq2j5d">
                                <span
                                    className="text-sm text-white bg-blue-500 px-2 py-0.5 rounded-full"
                                    data-oid="xn8he3h"
                                >
                                    {news.category}
                                </span>
                                <span className="text-sm text-gray-500" data-oid="1c6:_g3">
                                    {news.date}
                                </span>
                            </div>
                            <h3 className="text-lg font-medium mt-2 mb-1" data-oid="jk41084">
                                {news.title}
                            </h3>
                            <a
                                href="#"
                                className="text-blue-600 text-sm hover:underline"
                                data-oid="61ac0k."
                            >
                                阅读详情
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="l_begc8">
                <div className="bg-green-50 p-6 rounded-lg" data-oid="s6kzvub">
                    <h3 className="text-lg font-bold text-green-800 mb-3" data-oid="njpscza">
                        院校专业解读
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="xys_r35">
                        深度解析各高校特色和热门专业，助您做出明智选择。
                    </p>
                    <button
                        className="text-green-600 hover:underline"
                        onClick={() => setActiveTab('universities')}
                        data-oid="ecoqyta"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg" data-oid="lrlrp_:">
                    <h3 className="text-lg font-bold text-purple-800 mb-3" data-oid="b0ueptb">
                        历年分数线查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="rkhcgj7">
                        查询各高校在河北的历年录取分数线，精准定位目标院校。
                    </p>
                    <button
                        className="text-purple-600 hover:underline"
                        onClick={() => setActiveTab('scoreLines')}
                        data-oid="x7nn79a"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg" data-oid="urlee-d">
                    <h3 className="text-lg font-bold text-orange-800 mb-3" data-oid="iqua_rq">
                        一分一档查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="nzhj3t7">
                        根据分数查询历年排名，科学评估录取可能性。
                    </p>
                    <button
                        className="text-orange-600 hover:underline"
                        onClick={() => setActiveTab('scoreRankings')}
                        data-oid="l99b5n6"
                    >
                        查看详情 →
                    </button>
                </div>
            </section>
        </div>
    );

    const renderUniversities = () => (
        <div data-oid="t6yzzzm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="p8jctzn">
                高校信息查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="9m4t3xu">
                <div className="flex-grow" data-oid="41yfqd:">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="tb.:dvg"
                    />
                </div>
                <div className="flex gap-2" data-oid="3prgwq0">
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('all')}
                        data-oid="g2imcw1"
                    >
                        全部
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'universities' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('universities')}
                        data-oid="kgfa57s"
                    >
                        高校
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'majors' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('majors')}
                        data-oid="vd0idn5"
                    >
                        专业
                    </button>
                </div>
            </div>

            {(filterType === 'all' || filterType === 'universities') && (
                <div className="mb-8" data-oid="ml-hjn5">
                    <h3 className="text-xl font-semibold mb-4" data-oid="5-le25e">
                        高校列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="wy_as1w"
                    >
                        {universities.map((uni) => (
                            <div
                                key={uni.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid=":az91ag"
                            >
                                <h4
                                    className="text-lg font-medium text-blue-800"
                                    data-oid="dmql63f"
                                >
                                    {uni.name}
                                </h4>
                                <div
                                    className="flex justify-between text-sm text-gray-600 my-2"
                                    data-oid="g64qrq2"
                                >
                                    <span data-oid="3zl4ewz">{uni.location}</span>
                                    <span data-oid="-mxvt5j">{uni.type}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="2k:cg3v">
                                    {uni.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="wq5nz8j"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-between" data-oid="8b54riu">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="c-a5rns"
                                    >
                                        查看分数线
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid="wdt48x3"
                                    >
                                        查看招生计划
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(filterType === 'all' || filterType === 'majors') && (
                <div data-oid="g::_73-">
                    <h3 className="text-xl font-semibold mb-4" data-oid="w9coqwm">
                        专业列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="5yu7l21"
                    >
                        {majors.map((major) => (
                            <div
                                key={major.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid="8oqmrhv"
                            >
                                <h4
                                    className="text-lg font-medium text-green-800"
                                    data-oid="fy2:97x"
                                >
                                    {major.name}
                                </h4>
                                <div className="text-sm text-gray-600 my-2" data-oid="s51okz0">
                                    <span data-oid="7z:y:a1">学科门类：{major.category}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="eacbavd">
                                    {major.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="1tsbpfl"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4" data-oid="s:dkbsx">
                                    <button
                                        className="text-green-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="e4r5ttj"
                                    >
                                        查看开设院校及分数线
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    const renderScoreLines = () => (
        <div data-oid="zg37yrz">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="0ya2:lo">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="yj1:t90">
                <div className="flex-grow" data-oid="wddty_q">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="fd6e82e"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="w8zitrx"
                >
                    <option value="all" data-oid="nb9_h9n">
                        全部年份
                    </option>
                    <option value="2022" data-oid="rbr38pz">
                        2022年
                    </option>
                    <option value="2021" data-oid="menjk-5">
                        2021年
                    </option>
                    <option value="2020" data-oid="bj2z-ck">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="g2_7lzn">
                <table className="min-w-full bg-white" data-oid="tr1c:2f">
                    <thead className="bg-gray-100" data-oid="69k4gs9">
                        <tr data-oid="d:htj-n">
                            <th className="py-3 px-4 text-left" data-oid="89rjdq1">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="n2x73gr">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid=":1vlsrv">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="o90z5dc">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="3_72jfa">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="diglu9a">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="ai7.8ti">
                        {scoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="8hy06c6">
                                <td className="py-3 px-4" data-oid="tbbcq6c">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="jeftwww">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="zuz84lu">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="uh0b9ik">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="bk5sc7j"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="zil7rct">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="web.-bf"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid="ox047p4"
                                    >
                                        查看招生计划
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderScoreRankings = () => (
        <div data-oid="9p:lvdg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="8box5:x">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="kj2ewew">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="shifu97"
                >
                    <option value="all" data-oid="4lv-dsn">
                        全部年份
                    </option>
                    <option value="2022" data-oid="ktchtf4">
                        2022年
                    </option>
                    <option value="2021" data-oid="yt4rqn:">
                        2021年
                    </option>
                    <option value="2020" data-oid="90dksjk">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="l3lqe3l">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="gsepjtl"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid="ymrn.po"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="q0v2u5o"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="4k_5cco">
                <table className="min-w-full bg-white" data-oid="9.gidxi">
                    <thead className="bg-gray-100" data-oid="eiod6mp">
                        <tr data-oid="xpc1_tb">
                            <th className="py-3 px-4 text-left" data-oid="4ago8m:">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="k0cwjj8">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="8xjw95a">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="ia38q16">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid=".p033y9">
                        {scoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="7qmir33">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="lta-0ml"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid="pz.sbm7">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid="gfpq40k">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid="pgcr2ev">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="7rjeogr"
                                    >
                                        查看可报考院校
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderAdmissionPlans = () => (
        <div data-oid="uw68s4c">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="u0vb885">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="ztg0azq">
                <div className="flex-grow" data-oid="gjclhjr">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="_dj3yov"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid=".h1a6o3"
                >
                    <option value="all" data-oid="5k2odo4">
                        全部年份
                    </option>
                    <option value="2022" data-oid="g:l_hy6">
                        2022年
                    </option>
                    <option value="2021" data-oid="7k623n3">
                        2021年
                    </option>
                    <option value="2020" data-oid="m7z3-jn">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="shntkkm">
                <table className="min-w-full bg-white" data-oid="q_ked9:">
                    <thead className="bg-gray-100" data-oid="schib39">
                        <tr data-oid="8ityfh6">
                            <th className="py-3 px-4 text-left" data-oid="_ks5n5.">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="oa_b-lr">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="m_gitff">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="8lmtagq">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid=".wjn0m8">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="7wknt-y">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="m.9gbmd">
                        {admissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="xav8wkn">
                                <td className="py-3 px-4" data-oid="h2-eiqh">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="b9.olqi">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid="nd7fq_9">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="nbaycmg">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="::9o-5i">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid="3y39j_7">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="ukrxola"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="xavk0l9"
                                    >
                                        查看分数线
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50" data-oid="shokyzb">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="x8f_:3m">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="didv66v">
                    <div className="flex justify-between items-center py-4" data-oid="8bsljx5">
                        <div className="flex items-center" data-oid="cvtkzdc">
                            <div className="text-2xl font-bold text-blue-700" data-oid="u:-645w">
                                河北高考志愿填报
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="e3we5ya">
                            <button
                                className={`px-3 py-2 ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('home')}
                                data-oid="-6g0bm1"
                            >
                                首页
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('universities')}
                                data-oid="gjwh8if"
                            >
                                高校信息查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreLines')}
                                data-oid="jt8g644"
                            >
                                历年分数线
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreRankings')}
                                data-oid="jht70.3"
                            >
                                一分一档查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('admissionPlans')}
                                data-oid="8xqdx6o"
                            >
                                招生计划查询
                            </button>
                        </nav>
                        <div data-oid="5qwn:sl">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="wm0.5z."
                            >
                                登录/注册
                            </button>
                        </div>
                    </div>
                    {/* Mobile navigation */}
                    <div
                        className="md:hidden flex overflow-x-auto space-x-4 py-2"
                        data-oid="cy53a-g"
                    >
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('home')}
                            data-oid="f_94zf:"
                        >
                            首页
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="v-iepmr"
                        >
                            高校信息
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="h64pceb"
                        >
                            分数线
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreRankings')}
                            data-oid="m72q_8w"
                        >
                            一分一档
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('admissionPlans')}
                            data-oid="jzvzu:j"
                        >
                            招生计划
                        </button>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="eghc53m">
                {activeTab === 'home' && renderHome()}
                {activeTab === 'universities' && renderUniversities()}
                {activeTab === 'scoreLines' && renderScoreLines()}
                {activeTab === 'scoreRankings' && renderScoreRankings()}
                {activeTab === 'admissionPlans' && renderAdmissionPlans()}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="98498_q">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="g2r8qqi">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="3kmv8bn">
                        <div data-oid="dmnzqsx">
                            <h3 className="text-lg font-semibold mb-4" data-oid="jqrkca5">
                                关于我们
                            </h3>
                            <p className="text-gray-600" data-oid="xia29c0">
                                河北高考志愿填报服务平台致力于为河北考生提供专业、精准的高考志愿填报服务。
                            </p>
                        </div>
                        <div data-oid="064ksx_">
                            <h3 className="text-lg font-semibold mb-4" data-oid="gx_ovo9">
                                快速链接
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="dv84zfd">
                                <li data-oid="7_h.xv8">
                                    <a href="#" className="hover:text-blue-600" data-oid="gi6hm8h">
                                        高校信息查询
                                    </a>
                                </li>
                                <li data-oid="67lae01">
                                    <a href="#" className="hover:text-blue-600" data-oid="te.8t:p">
                                        历年分数线
                                    </a>
                                </li>
                                <li data-oid="w5blq7g">
                                    <a href="#" className="hover:text-blue-600" data-oid="u8jf2cc">
                                        一分一档查询
                                    </a>
                                </li>
                                <li data-oid="v06fc.x">
                                    <a href="#" className="hover:text-blue-600" data-oid="ejk3:p_">
                                        招生计划查询
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="qj.59c9">
                            <h3 className="text-lg font-semibold mb-4" data-oid="m4ru86i">
                                联系方式
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="-wwm216">
                                <li data-oid="fh4onvr">电话：0311-12345678</li>
                                <li data-oid="d7vudjb">邮箱：info@hebeivolunteer.com</li>
                                <li data-oid="0a7m-09">地址：河北省石家庄市桥西区</li>
                            </ul>
                        </div>
                        <div data-oid="kfn56-:">
                            <h3 className="text-lg font-semibold mb-4" data-oid="2txtgga">
                                关注我们
                            </h3>
                            <div className="flex space-x-4" data-oid="l5dsbam">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid=":k28dtb"
                                >
                                    <span className="sr-only" data-oid="39o1xx_">
                                        微信
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="v54y16z"
                                    >
                                        <path
                                            d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                            data-oid="s0n027w"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid="y.k4yhs"
                                >
                                    <span className="sr-only" data-oid="uxzt.tl">
                                        微博
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="dut1qhw"
                                    >
                                        <path
                                            d="M10.8,11.2c-2.5,0-4.5,1.7-4.5,3.8c0,2.1,2,3.8,4.5,3.8c2.5,0,4.5-1.7,4.5-3.8C15.3,12.9,13.3,11.2,10.8,11.2z M12.3,16.5 c-0.5,0.7-1.5,1-2.5,0.6c-1-0.4-1.3-1.2-0.8-1.9c0.5-0.7,1.4-0.9,2.4-0.5C12.4,15,12.8,15.8,12.3,16.5z M10.9,14.6 c-0.2,0.3-0.6,0.4-0.9,0.3c-0.3-0.1-0.4-0.4-0.3-0.7c0.2-0.3,0.6-0.4,0.9-0.3C11,14,11.1,14.3,10.9,14.6z M20,9.9 c-0.4-1.8-1.9-3-3.6-3.2c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.6,0.3,1,0.9,1.1c1,0.1,1.9,0.8,2.1,1.8c0.1,0.6,0.7,0.9,1.3,0.8 C20.2,11.1,20.5,10.5,20,9.9z M18.9,5.5c-1.9-2.1-4.7-2.9-7.3-2.4c-0.7,0.1-1.2,0.8-1,1.5c0.1,0.7,0.8,1.2,1.5,1 c1.9-0.4,3.9,0.2,5.3,1.7c1.3,1.5,1.7,3.5,1.1,5.3c-0.2,0.7,0.2,1.4,0.9,1.6c0.7,0.2,1.4-0.2,1.6-0.9C21.8,10.3,21.2,7.9,18.9,5.5z"
                                            data-oid="y:rgo51"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t mt-8 pt-8 text-center text-gray-500"
                        data-oid="4w70uup"
                    >
                        <p data-oid="q4.4789">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
