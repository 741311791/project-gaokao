'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import MainLayout from '../../components/layout/MainLayout';
import { majors } from '../../data/mockData';

export default function MajorPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState(tabParam || 'overview');
    const majorId = parseInt(params.id);

    // 从mockData获取专业数据
    const major = majors.find((m) => m.id === majorId);

    if (!major) {
        return (
            <MainLayout data-oid="h_13b2p">
                <div
                    className="min-h-screen bg-gray-50 flex items-center justify-center"
                    data-oid="j3r2pwl"
                >
                    <div className="text-center" data-oid="7s.q.lo">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-oid="mq9li68">
                            未找到专业信息
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="mimbs.w">
                            抱歉，我们找不到您查询的专业信息。
                        </p>
                        <Link
                            href="/university"
                            className="text-blue-600 hover:underline"
                            data-oid="9gwyu1l"
                        >
                            返回专业列表
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout data-oid="ra:n6-4">
            {/* Major Header */}
            <div className="bg-green-700 text-white" data-oid="4dm41ng">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="ddfid8m">
                    <div className="flex flex-col" data-oid="m-_98aw">
                        <h1 className="text-3xl font-bold" data-oid="twsccek">
                            {major.name}
                        </h1>
                        <p className="text-green-100 mt-1" data-oid="1ash3tb">
                            专业代码：{major.code} | 学科门类：{major.category}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4" data-oid="n7t0tnm">
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="5b6nt29"
                            >
                                {major.degree}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="1j203z9"
                            >
                                学制{major.duration}
                            </span>
                            {major.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="610hyg2"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="m7bamex">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tiwhrll">
                    <div className="flex overflow-x-auto" data-oid="4xppenc">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="._m26k-"
                        >
                            专业概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('courses')}
                            data-oid="d:8lgr4"
                        >
                            主要课程
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'universities' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="0ul7x44"
                        >
                            开设院校
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'career' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('career')}
                            data-oid="wi5yubp"
                        >
                            就业前景
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:flex md:space-x-8 mt-8" data-oid="-x-3ncq">
                {/* Main content area */}
                <div className="md:w-2/3" data-oid="m33-7rn">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="-dj6s7k">
                        {activeTab === 'overview' && (
                            <div data-oid="l1jlpnw">
                                <h2 className="text-xl font-semibold mb-4" data-oid="wvrk2r9">
                                    专业介绍
                                </h2>
                                <p
                                    className="text-gray-700 mb-6 leading-relaxed"
                                    data-oid="klwiiia"
                                >
                                    {major.description}
                                </p>

                                <h3 className="text-lg font-medium mb-3" data-oid="bqwi544">
                                    基本信息
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                    data-oid="mllbvlc"
                                >
                                    <div className="flex" data-oid="5pdbr2c">
                                        <span className="text-gray-500 w-24" data-oid="78epbao">
                                            专业名称：
                                        </span>
                                        <span className="text-gray-900" data-oid="kxjwime">
                                            {major.name}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="ijgiuq0">
                                        <span className="text-gray-500 w-24" data-oid="f7xyekw">
                                            专业代码：
                                        </span>
                                        <span className="text-gray-900" data-oid="6yxbcdq">
                                            {major.code}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="zhabwu-">
                                        <span className="text-gray-500 w-24" data-oid="yy3y75h">
                                            学科门类：
                                        </span>
                                        <span className="text-gray-900" data-oid="2djejf1">
                                            {major.category}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid=".s4dhcf">
                                        <span className="text-gray-500 w-24" data-oid="ojaxgn5">
                                            授予学位：
                                        </span>
                                        <span className="text-gray-900" data-oid="-o_m0e0">
                                            {major.degree}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="1n6s_.l">
                                        <span className="text-gray-500 w-24" data-oid=":0o:ds9">
                                            修业年限：
                                        </span>
                                        <span className="text-gray-900" data-oid="f2p-rjb">
                                            {major.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'courses' && (
                            <div data-oid="q:vi768">
                                <h2 className="text-xl font-semibold mb-4" data-oid=".oy.blx">
                                    主要课程
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="5yo5eh9">
                                    {major.name}专业的学生需要学习以下核心课程：
                                </p>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                    data-oid="gcrw:fq"
                                >
                                    {major.courses?.map((course, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 p-3 rounded-md"
                                            data-oid="wvbyy9q"
                                        >
                                            <span className="text-gray-800" data-oid="j_irheh">
                                                {course}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400"
                                    data-oid="637zapx"
                                >
                                    <h4
                                        className="text-yellow-800 font-medium mb-2"
                                        data-oid="2_srosw"
                                    >
                                        学习提示
                                    </h4>
                                    <p className="text-yellow-700" data-oid="q_ck-y8">
                                        本专业需要较强的数学基础和逻辑思维能力，建议有志于学习本专业的学生在高中阶段注重数学和物理学科的学习。
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'universities' && (
                            <div data-oid="z:c2dfg">
                                <h2 className="text-xl font-semibold mb-4" data-oid="89ha0qg">
                                    开设院校
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="ayv6i09">
                                    以下是开设{major.name}专业的部分高校及其在河北省的录取分数线：
                                </p>

                                <div className="overflow-x-auto" data-oid="5fhcbwv">
                                    <table
                                        className="min-w-full divide-y divide-gray-200"
                                        data-oid="p-n4oec"
                                    >
                                        <thead className="bg-gray-50" data-oid="znwjir1">
                                            <tr data-oid="8wnj55i">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="e.2iy5w"
                                                >
                                                    院校名称
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="p.6hiaf"
                                                >
                                                    专业排名
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="zfy3boy"
                                                >
                                                    录取批次
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="hobzraw"
                                                >
                                                    最低分数
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="g9e416u"
                                                >
                                                    操作
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200"
                                            data-oid="tcd6dek"
                                        >
                                            {major.universities?.map((uni) => (
                                                <tr key={uni.id} data-oid="y3fqb35">
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="8ipi2tz"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="9x:k3es"
                                                        >
                                                            {uni.name}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="2kprauq"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="x03977_"
                                                        >
                                                            {uni.ranking}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="un4fydu"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="g1dnc17"
                                                        >
                                                            {uni.batch}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="m7q6:k9"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="yb90t3a"
                                                        >
                                                            {uni.score}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                        data-oid="4df0rcp"
                                                    >
                                                        <Link
                                                            href={`/university/${uni.id}`}
                                                            className="text-blue-600 hover:text-blue-900"
                                                            data-oid="qfaz_3i"
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
                            <div data-oid="2.vqz:c">
                                <h2 className="text-xl font-semibold mb-4" data-oid="rvs6av_">
                                    就业前景
                                </h2>
                                <p
                                    className="text-gray-700 mb-6 leading-relaxed"
                                    data-oid="j41-p4k"
                                >
                                    {major.name}
                                    专业毕业生就业前景广阔，可在IT、互联网、金融、通信等多个行业就业。随着人工智能、大数据、云计算等技术的发展，本专业人才需求持续增长。
                                </p>

                                <h3 className="text-lg font-medium mb-3" data-oid="s55svye">
                                    薪资水平
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                                    data-oid="3__:gq8"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="_gt2-hb"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="axw-hg2"
                                        >
                                            应届毕业生平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="xdkx:jk"
                                        >
                                            {major.salaryInfo?.averageStarting}
                                        </p>
                                    </div>
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="94hurbz"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="c2u_sz4"
                                        >
                                            工作3年后平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="qiz3r3d"
                                        >
                                            {major.salaryInfo?.averageAfter3Years}
                                        </p>
                                    </div>
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="eirre4z"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="vfd7l3a"
                                        >
                                            工作5年后平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="duqecry"
                                        >
                                            {major.salaryInfo?.averageAfter5Years}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3" data-oid="1fknmp8">
                                    就业方向
                                </h3>
                                <div className="mb-6" data-oid="flq5qba">
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="y:a8cul">
                                        {major.salaryInfo?.topIndustries?.map((industry, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                                data-oid=":r1dh6t"
                                            >
                                                {industry}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-md font-medium mb-2" data-oid="v8qdg:4">
                                        常见职位
                                    </h4>
                                    <ul
                                        className="list-disc pl-5 space-y-1 text-gray-700"
                                        data-oid="ux04gtw"
                                    >
                                        {major.careerProspects?.map((position, index) => (
                                            <li key={index} data-oid="o8p1mtb">
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
                <div className="md:w-1/3 mt-6 md:mt-0" data-oid="9soqfvk">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="996.y80">
                        <h3 className="text-lg font-medium mb-4" data-oid="lgo:v31">
                            快速操作
                        </h3>
                        <div className="space-y-3" data-oid="2ffp3g7">
                            <button
                                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                data-oid="yk.wjha"
                            >
                                收藏该专业
                            </button>
                            <button
                                className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                data-oid="6y-806h"
                            >
                                对比其他专业
                            </button>
                            <button
                                className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                data-oid="2li8tqp"
                            >
                                查看录取概率
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="i:.73-g">
                        <h3 className="text-lg font-medium mb-4" data-oid="fmw67ql">
                            专业适合度测评
                        </h3>
                        <p className="text-gray-700 mb-4" data-oid="awy:sx1">
                            不确定这个专业是否适合你？参加我们的专业适合度测评，了解你的兴趣和能力是否与该专业匹配。
                        </p>
                        <button
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            data-oid="xmb0-u6"
                        >
                            开始测评
                        </button>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6" data-oid="10bplql">
                        <h3 className="text-lg font-medium mb-4" data-oid="tp78y65">
                            相似专业推荐
                        </h3>
                        <ul className="space-y-3" data-oid="ddr68xe">
                            {major.similarMajors &&
                                major.similarMajors.map((similar) => (
                                    <li key={similar.id} data-oid="6evn1m:">
                                        <Link
                                            href={`/major/${similar.id}`}
                                            className="text-green-600 hover:underline"
                                            data-oid="ki5-hgj"
                                        >
                                            {similar.name}
                                        </Link>
                                        <p className="text-sm text-gray-500" data-oid="fow41wb">
                                            {similar.category} | 就业前景：
                                            {similar.employmentProspect}
                                        </p>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
