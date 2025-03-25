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
        <div className="space-y-8" data-oid="_t530qh">
            <section className="bg-blue-50 p-8 rounded-lg" data-oid="w0lr7v3">
                <h2 className="text-2xl font-bold text-blue-800 mb-4" data-oid="pz3cnwk">
                    河北高考志愿填报服务平台
                </h2>
                <p className="text-gray-700 mb-6" data-oid="h1g76f:">
                    为河北考生提供全面的高考志愿填报服务，包括政策解读、院校专业查询、分数线查询、一分一档查询和招生计划查询等。
                </p>
                <div className="flex space-x-4" data-oid="x3t:zs4">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => setActiveTab('universities')}
                        data-oid="a85l7h:"
                    >
                        开始查询
                    </button>
                    <button
                        className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
                        data-oid="cs-w-7g"
                    >
                        联系咨询师
                    </button>
                </div>
            </section>

            <section data-oid="vjn0pxs">
                <div className="flex justify-between items-center mb-4" data-oid="7ty0r83">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="fyeiu1z">
                        河北考试院最新资讯
                    </h2>
                    <a href="#" className="text-blue-600 hover:underline" data-oid="ejsm_yi">
                        查看全部
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="ftqv918">
                    {latestNews.map((news) => (
                        <div
                            key={news.id}
                            className="border p-4 rounded-md hover:shadow-md transition"
                            data-oid="sz71yta"
                        >
                            <div className="flex justify-between" data-oid="8f_x8gd">
                                <span
                                    className="text-sm text-white bg-blue-500 px-2 py-0.5 rounded-full"
                                    data-oid="ma0j8uu"
                                >
                                    {news.category}
                                </span>
                                <span className="text-sm text-gray-500" data-oid="4ue44lk">
                                    {news.date}
                                </span>
                            </div>
                            <h3 className="text-lg font-medium mt-2 mb-1" data-oid="jkw74jm">
                                {news.title}
                            </h3>
                            <a
                                href="#"
                                className="text-blue-600 text-sm hover:underline"
                                data-oid="m8etee8"
                            >
                                阅读详情
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="qdv0uor">
                <div className="bg-green-50 p-6 rounded-lg" data-oid="xmdlm36">
                    <h3 className="text-lg font-bold text-green-800 mb-3" data-oid="s32wo_a">
                        院校专业解读
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="58r.-e5">
                        深度解析各高校特色和热门专业，助您做出明智选择。
                    </p>
                    <button
                        className="text-green-600 hover:underline"
                        onClick={() => setActiveTab('universities')}
                        data-oid="q1j7auc"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg" data-oid="gc3kxf0">
                    <h3 className="text-lg font-bold text-purple-800 mb-3" data-oid="v55zq3s">
                        历年分数线查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="_2p0swg">
                        查询各高校在河北的历年录取分数线，精准定位目标院校。
                    </p>
                    <button
                        className="text-purple-600 hover:underline"
                        onClick={() => setActiveTab('scoreLines')}
                        data-oid="alzg4oh"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg" data-oid="g4_o9wx">
                    <h3 className="text-lg font-bold text-orange-800 mb-3" data-oid=".np:x96">
                        一分一档查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid=":mh.znl">
                        根据分数查询历年排名，科学评估录取可能性。
                    </p>
                    <button
                        className="text-orange-600 hover:underline"
                        onClick={() => setActiveTab('scoreRankings')}
                        data-oid="ceg84yq"
                    >
                        查看详情 →
                    </button>
                </div>
            </section>
        </div>
    );

    const renderUniversities = () => (
        <div data-oid=".cl3qte">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="2yi91tr">
                高校信息查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="ezdwg0m">
                <div className="flex-grow" data-oid="514q7tv">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="qug4rve"
                    />
                </div>
                <div className="flex gap-2" data-oid="6oy77dp">
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('all')}
                        data-oid="qqf-q8f"
                    >
                        全部
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'universities' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('universities')}
                        data-oid=".ekrk3v"
                    >
                        高校
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'majors' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('majors')}
                        data-oid="eec8c4b"
                    >
                        专业
                    </button>
                </div>
            </div>

            {(filterType === 'all' || filterType === 'universities') && (
                <div className="mb-8" data-oid="3:r:mzc">
                    <h3 className="text-xl font-semibold mb-4" data-oid="dqsvak5">
                        高校列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="v:.knzl"
                    >
                        {universities.map((uni) => (
                            <div
                                key={uni.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid=".iwas08"
                            >
                                <h4
                                    className="text-lg font-medium text-blue-800"
                                    data-oid="rztmqjp"
                                >
                                    {uni.name}
                                </h4>
                                <div
                                    className="flex justify-between text-sm text-gray-600 my-2"
                                    data-oid="mlr9.8v"
                                >
                                    <span data-oid="t.j2l_1">{uni.location}</span>
                                    <span data-oid="mbomqrr">{uni.type}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="6p2.ukn">
                                    {uni.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="up:vh4i"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-between" data-oid=":n:.l55">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="7.6nemd"
                                    >
                                        查看分数线
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid="p.xm6we"
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
                <div data-oid="4.a-pfn">
                    <h3 className="text-xl font-semibold mb-4" data-oid="tsc-c7z">
                        专业列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="lip.z1s"
                    >
                        {majors.map((major) => (
                            <div
                                key={major.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid="um3zfoa"
                            >
                                <h4
                                    className="text-lg font-medium text-green-800"
                                    data-oid="x2aa7um"
                                >
                                    {major.name}
                                </h4>
                                <div className="text-sm text-gray-600 my-2" data-oid="m32a:.q">
                                    <span data-oid="j.9cys3">学科门类：{major.category}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="fgxb00t">
                                    {major.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="34r41uh"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4" data-oid="w01j_u9">
                                    <button
                                        className="text-green-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="my2g8eh"
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
        <div data-oid="ak83ecw">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="cw:crgh">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="xwwr8_:">
                <div className="flex-grow" data-oid="vk-:-vh">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="3fbvs75"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="b.nx9ad"
                >
                    <option value="all" data-oid="z-sm00c">
                        全部年份
                    </option>
                    <option value="2022" data-oid="q2:siiz">
                        2022年
                    </option>
                    <option value="2021" data-oid="pi1sen6">
                        2021年
                    </option>
                    <option value="2020" data-oid="gax18-x">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="ibi4bi-">
                <table className="min-w-full bg-white" data-oid=".jg2tbm">
                    <thead className="bg-gray-100" data-oid="qtu:8..">
                        <tr data-oid="266x04t">
                            <th className="py-3 px-4 text-left" data-oid="6klbh95">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="oe19z0t">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="-g:yb5u">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="m94qp8g">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="kd.u0m1">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="rofu40l">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="auqg.ud">
                        {scoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="g4:8l6:">
                                <td className="py-3 px-4" data-oid="p_v4ifm">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="c.pxwk9">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="0e:z_kn">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="af5g03i">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid=":z5qbum"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="jyiuoy5">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="xxsjas1"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid=".t8o94z"
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
        <div data-oid="ormt5p-">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="ev:z-jh">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="d18p-v_">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="9:4-16."
                >
                    <option value="all" data-oid="2j2m78y">
                        全部年份
                    </option>
                    <option value="2022" data-oid="o08h88-">
                        2022年
                    </option>
                    <option value="2021" data-oid="-f.qi3o">
                        2021年
                    </option>
                    <option value="2020" data-oid="jwfvia1">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="91c65_j">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="9eqf1ns"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid=".m1e-ba"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="k::y-hh"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="51dlmpp">
                <table className="min-w-full bg-white" data-oid="eq_yqz8">
                    <thead className="bg-gray-100" data-oid="w7wrrmj">
                        <tr data-oid="c4ar6x3">
                            <th className="py-3 px-4 text-left" data-oid="zdb0eho">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="325hf2d">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="94eobr4">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="v09evw3">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="n0aw4br">
                        {scoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="g9bjri0">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="w7eaahi"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid=".9598pw">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid="fwmajh6">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid="idlhu2n">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="5p8c2w_"
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
        <div data-oid="eyhyeyk">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="wjijfsf">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="fk4n4xs">
                <div className="flex-grow" data-oid="tn8215w">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="u-y8di_"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="cs:wk3p"
                >
                    <option value="all" data-oid="j7dw73l">
                        全部年份
                    </option>
                    <option value="2022" data-oid="1zb:6_a">
                        2022年
                    </option>
                    <option value="2021" data-oid="8f7e623">
                        2021年
                    </option>
                    <option value="2020" data-oid="-9ee9-_">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="ffad9.c">
                <table className="min-w-full bg-white" data-oid="pfzbvdb">
                    <thead className="bg-gray-100" data-oid="brn6xyi">
                        <tr data-oid=".w-8xml">
                            <th className="py-3 px-4 text-left" data-oid="n40:ns2">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="hf3onul">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="zdbory6">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="repq._l">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid=".tzi2j:">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="yx-r2k5">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="fm_zyq6">
                        {admissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="qxn:r3s">
                                <td className="py-3 px-4" data-oid="w.2f9j-">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="y5h4pch">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid="273t_1.">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="cltskew">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="vo5on44">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid="-eh.otm">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="v05d9_k"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="t28.6r1"
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
        <div className="min-h-screen bg-gray-50" data-oid="pvx5id_">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="p9zvf00">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="dhfwyq6">
                    <div className="flex justify-between items-center py-4" data-oid="03bu8-6">
                        <div className="flex items-center" data-oid=".4rf392">
                            <div className="text-2xl font-bold text-blue-700" data-oid="uzl1p7n">
                                河北高考志愿填报
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="wxs9tgx">
                            <button
                                className={`px-3 py-2 ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('home')}
                                data-oid="wx_p2ya"
                            >
                                首页
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('universities')}
                                data-oid="i8:4l4q"
                            >
                                高校信息查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreLines')}
                                data-oid="ywj0c2e"
                            >
                                历年分数线
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreRankings')}
                                data-oid="u79glk8"
                            >
                                一分一档查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('admissionPlans')}
                                data-oid=":gzaupk"
                            >
                                招生计划查询
                            </button>
                        </nav>
                        <div data-oid="19izuqj">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="o72w4ur"
                            >
                                登录/注册
                            </button>
                        </div>
                    </div>
                    {/* Mobile navigation */}
                    <div
                        className="md:hidden flex overflow-x-auto space-x-4 py-2"
                        data-oid="dc3jfu0"
                    >
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('home')}
                            data-oid="2_41l4j"
                        >
                            首页
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="3iuav3b"
                        >
                            高校信息
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="0e.6l0p"
                        >
                            分数线
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreRankings')}
                            data-oid="ktk9vza"
                        >
                            一分一档
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('admissionPlans')}
                            data-oid="rzkbsek"
                        >
                            招生计划
                        </button>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="agd47c5">
                {activeTab === 'home' && renderHome()}
                {activeTab === 'universities' && renderUniversities()}
                {activeTab === 'scoreLines' && renderScoreLines()}
                {activeTab === 'scoreRankings' && renderScoreRankings()}
                {activeTab === 'admissionPlans' && renderAdmissionPlans()}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="nk-md5y">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="hdawwhl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="yxpzmyd">
                        <div data-oid="gkkdd:z">
                            <h3 className="text-lg font-semibold mb-4" data-oid="oh79ikq">
                                关于我们
                            </h3>
                            <p className="text-gray-600" data-oid="3u5gwkn">
                                河北高考志愿填报服务平台致力于为河北考生提供专业、精准的高考志愿填报服务。
                            </p>
                        </div>
                        <div data-oid="8mtdvc9">
                            <h3 className="text-lg font-semibold mb-4" data-oid="2pcvzyf">
                                快速链接
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="1r0pzey">
                                <li data-oid="q5:_6t_">
                                    <a href="#" className="hover:text-blue-600" data-oid="uqm-yv8">
                                        高校信息查询
                                    </a>
                                </li>
                                <li data-oid="7lxqx8t">
                                    <a href="#" className="hover:text-blue-600" data-oid="5td2dg7">
                                        历年分数线
                                    </a>
                                </li>
                                <li data-oid="ybimhu6">
                                    <a href="#" className="hover:text-blue-600" data-oid="4azw2y6">
                                        一分一档查询
                                    </a>
                                </li>
                                <li data-oid="co5thpn">
                                    <a href="#" className="hover:text-blue-600" data-oid="v6nytbt">
                                        招生计划查询
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="b95ow-x">
                            <h3 className="text-lg font-semibold mb-4" data-oid="04dg7wx">
                                联系方式
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="m085plb">
                                <li data-oid="x61sb:_">电话：0311-12345678</li>
                                <li data-oid="5.69fye">邮箱：info@hebeivolunteer.com</li>
                                <li data-oid="29b.jp5">地址：河北省石家庄市桥西区</li>
                            </ul>
                        </div>
                        <div data-oid="v3i6vat">
                            <h3 className="text-lg font-semibold mb-4" data-oid="0_4t-4s">
                                关注我们
                            </h3>
                            <div className="flex space-x-4" data-oid="8z4mzpd">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid="h47re_3"
                                >
                                    <span className="sr-only" data-oid="bbdkeh5">
                                        微信
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="g1ailtd"
                                    >
                                        <path
                                            d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                            data-oid=":8grrg4"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid="7p84k0j"
                                >
                                    <span className="sr-only" data-oid="qh0we7z">
                                        微博
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="am0_-t3"
                                    >
                                        <path
                                            d="M10.8,11.2c-2.5,0-4.5,1.7-4.5,3.8c0,2.1,2,3.8,4.5,3.8c2.5,0,4.5-1.7,4.5-3.8C15.3,12.9,13.3,11.2,10.8,11.2z M12.3,16.5 c-0.5,0.7-1.5,1-2.5,0.6c-1-0.4-1.3-1.2-0.8-1.9c0.5-0.7,1.4-0.9,2.4-0.5C12.4,15,12.8,15.8,12.3,16.5z M10.9,14.6 c-0.2,0.3-0.6,0.4-0.9,0.3c-0.3-0.1-0.4-0.4-0.3-0.7c0.2-0.3,0.6-0.4,0.9-0.3C11,14,11.1,14.3,10.9,14.6z M20,9.9 c-0.4-1.8-1.9-3-3.6-3.2c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.6,0.3,1,0.9,1.1c1,0.1,1.9,0.8,2.1,1.8c0.1,0.6,0.7,0.9,1.3,0.8 C20.2,11.1,20.5,10.5,20,9.9z M18.9,5.5c-1.9-2.1-4.7-2.9-7.3-2.4c-0.7,0.1-1.2,0.8-1,1.5c0.1,0.7,0.8,1.2,1.5,1 c1.9-0.4,3.9,0.2,5.3,1.7c1.3,1.5,1.7,3.5,1.1,5.3c-0.2,0.7,0.2,1.4,0.9,1.6c0.7,0.2,1.4-0.2,1.6-0.9C21.8,10.3,21.2,7.9,18.9,5.5z"
                                            data-oid="wfzwd6o"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t mt-8 pt-8 text-center text-gray-500"
                        data-oid="e.kt0kg"
                    >
                        <p data-oid="bmao7tb">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
