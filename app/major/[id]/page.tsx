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
            <MainLayout data-oid="-sjvj9x">
                <div
                    className="min-h-screen bg-gray-50 flex items-center justify-center"
                    data-oid="wqe_zrb"
                >
                    <div className="text-center" data-oid=".c6khw5">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-oid="b3zhcow">
                            未找到专业信息
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid=".trfr0f">
                            抱歉，我们找不到您查询的专业信息。
                        </p>
                        <Link
                            href="/university"
                            className="text-blue-600 hover:underline"
                            data-oid="e6fcuey"
                        >
                            返回专业列表
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout data-oid="uyddo7h">
            {/* Major Header */}
            <div className="bg-green-700 text-white" data-oid="g3r9v48">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="ttrcftz">
                    <div className="flex flex-col" data-oid="tetmah:">
                        <h1 className="text-3xl font-bold" data-oid="o3346a9">
                            {major.name}
                        </h1>
                        <p className="text-green-100 mt-1" data-oid="n3v:u67">
                            专业代码：{major.code} | 学科门类：{major.category}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4" data-oid=":_vk0jx">
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="3.yailb"
                            >
                                {major.degree}
                            </span>
                            <span
                                className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                data-oid="7ej.3-_"
                            >
                                学制{major.duration}
                            </span>
                            {major.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-green-800 text-green-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="r6ge88z"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="cnnelmf">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="t_xr3an">
                    <div className="flex overflow-x-auto" data-oid="x9zw0lm">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="pyvu64s"
                        >
                            专业概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'courses' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('courses')}
                            data-oid="ddnuc7y"
                        >
                            主要课程
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'universities' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="s2jq2so"
                        >
                            开设院校
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'career' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('career')}
                            data-oid="hkstd3s"
                        >
                            就业前景
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:flex md:space-x-8 mt-8" data-oid="ztd43wx">
                {/* Main content area */}
                <div className="md:w-2/3" data-oid="dbvdh:2">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="rsm2jhr">
                        {activeTab === 'overview' && (
                            <div data-oid="0:y39k8">
                                <h2 className="text-xl font-semibold mb-4" data-oid="p8c24n_">
                                    专业介绍
                                </h2>
                                <p
                                    className="text-gray-700 mb-6 leading-relaxed"
                                    data-oid="hi8qht8"
                                >
                                    {major.description}
                                </p>

                                <h3 className="text-lg font-medium mb-3" data-oid="p83_jm8">
                                    基本信息
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                    data-oid="2omgpx5"
                                >
                                    <div className="flex" data-oid="ntz-isa">
                                        <span className="text-gray-500 w-24" data-oid="7k-va8_">
                                            专业名称：
                                        </span>
                                        <span className="text-gray-900" data-oid="80t52or">
                                            {major.name}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="gxb9507">
                                        <span className="text-gray-500 w-24" data-oid="bglxzq6">
                                            专业代码：
                                        </span>
                                        <span className="text-gray-900" data-oid="bszip14">
                                            {major.code}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="yszup7p">
                                        <span className="text-gray-500 w-24" data-oid="lyt7stw">
                                            学科门类：
                                        </span>
                                        <span className="text-gray-900" data-oid="wbbw.:r">
                                            {major.category}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="z:gvywa">
                                        <span className="text-gray-500 w-24" data-oid="p8_qhie">
                                            授予学位：
                                        </span>
                                        <span className="text-gray-900" data-oid="n3bjsxa">
                                            {major.degree}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="6_svzsa">
                                        <span className="text-gray-500 w-24" data-oid="4y1vjjy">
                                            修业年限：
                                        </span>
                                        <span className="text-gray-900" data-oid="5mz7oe.">
                                            {major.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'courses' && (
                            <div data-oid="li5lkwn">
                                <h2 className="text-xl font-semibold mb-4" data-oid="g9sl4zj">
                                    主要课程
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="a90p35m">
                                    {major.name}专业的学生需要学习以下核心课程：
                                </p>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                    data-oid="s5h_k9o"
                                >
                                    {major.courses?.map((course, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 p-3 rounded-md"
                                            data-oid="ja7-p8q"
                                        >
                                            <span className="text-gray-800" data-oid="sb8l49s">
                                                {course}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400"
                                    data-oid=".t9e3x4"
                                >
                                    <h4
                                        className="text-yellow-800 font-medium mb-2"
                                        data-oid="g4_b833"
                                    >
                                        学习提示
                                    </h4>
                                    <p className="text-yellow-700" data-oid="_yz_v3b">
                                        本专业需要较强的数学基础和逻辑思维能力，建议有志于学习本专业的学生在高中阶段注重数学和物理学科的学习。
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'universities' && (
                            <div data-oid="yp77y3l">
                                <h2 className="text-xl font-semibold mb-4" data-oid="b1sqbxk">
                                    开设院校
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="wgq:p8v">
                                    以下是开设{major.name}专业的部分高校及其在河北省的录取分数线：
                                </p>

                                <div className="overflow-x-auto" data-oid="4y7shr5">
                                    <table
                                        className="min-w-full divide-y divide-gray-200"
                                        data-oid="6:07c7t"
                                    >
                                        <thead className="bg-gray-50" data-oid="7tt72ma">
                                            <tr data-oid="e73gmdn">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="8-o6j2b"
                                                >
                                                    院校名称
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="_.syoge"
                                                >
                                                    专业排名
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="mse8olv"
                                                >
                                                    录取批次
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="vt124y3"
                                                >
                                                    最低分数
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="01emz0_"
                                                >
                                                    操作
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200"
                                            data-oid="nj4xcf7"
                                        >
                                            {major.universities?.map((uni) => (
                                                <tr key={uni.id} data-oid="bokfbb7">
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="62yam-u"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="z2732uk"
                                                        >
                                                            {uni.name}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="81iijoq"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="1mghb4g"
                                                        >
                                                            {uni.ranking}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="b1fxmq5"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="k-9z7-i"
                                                        >
                                                            {uni.batch}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="3sz:vm8"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="rpm:lyc"
                                                        >
                                                            {uni.score}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                        data-oid="qh_i3jh"
                                                    >
                                                        <Link
                                                            href={`/university/${uni.id}`}
                                                            className="text-blue-600 hover:text-blue-900"
                                                            data-oid="isfxtxi"
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
                            <div data-oid="l7c_t1y">
                                <h2 className="text-xl font-semibold mb-4" data-oid="3hqik_z">
                                    就业前景
                                </h2>
                                <p
                                    className="text-gray-700 mb-6 leading-relaxed"
                                    data-oid="qgi0hzd"
                                >
                                    {major.name}
                                    专业毕业生就业前景广阔，可在IT、互联网、金融、通信等多个行业就业。随着人工智能、大数据、云计算等技术的发展，本专业人才需求持续增长。
                                </p>

                                <h3 className="text-lg font-medium mb-3" data-oid="31o-y85">
                                    薪资水平
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
                                    data-oid="g3rv.oi"
                                >
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="jmq2c3q"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="nbsrca_"
                                        >
                                            应届毕业生平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="fkbh9w7"
                                        >
                                            {major.salaryInfo?.averageStarting}
                                        </p>
                                    </div>
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="yts11uy"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="83t2npg"
                                        >
                                            工作3年后平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="bhkhcbm"
                                        >
                                            {major.salaryInfo?.averageAfter3Years}
                                        </p>
                                    </div>
                                    <div
                                        className="bg-blue-50 p-4 rounded-lg text-center"
                                        data-oid="8xobyef"
                                    >
                                        <p
                                            className="text-sm text-blue-600 mb-1"
                                            data-oid="8dg1yoy"
                                        >
                                            工作5年后平均薪资
                                        </p>
                                        <p
                                            className="text-xl font-bold text-blue-800"
                                            data-oid="3qwcuqa"
                                        >
                                            {major.salaryInfo?.averageAfter5Years}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3" data-oid="b2wa.ga">
                                    就业方向
                                </h3>
                                <div className="mb-6" data-oid="jf.kl-4">
                                    <div className="flex flex-wrap gap-2 mb-4" data-oid="o2tieu7">
                                        {major.salaryInfo?.topIndustries?.map((industry, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                                                data-oid="8otj_bq"
                                            >
                                                {industry}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-md font-medium mb-2" data-oid="p9v56qd">
                                        常见职位
                                    </h4>
                                    <ul
                                        className="list-disc pl-5 space-y-1 text-gray-700"
                                        data-oid="nlayrvv"
                                    >
                                        {major.careerProspects?.map((position, index) => (
                                            <li key={index} data-oid="n5jps:7">
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
                <div className="md:w-1/3 mt-6 md:mt-0" data-oid="0:os7bh">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="-tiy8y1">
                        <h3 className="text-lg font-medium mb-4" data-oid="_29ikf_">
                            快速操作
                        </h3>
                        <div className="space-y-3" data-oid="jnc4ive">
                            <button
                                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                data-oid="tn33cf3"
                            >
                                收藏该专业
                            </button>
                            <button
                                className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                data-oid="dxd64l7"
                            >
                                对比其他专业
                            </button>
                            <button
                                className="w-full border border-green-600 text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition"
                                data-oid="uf_wwfy"
                            >
                                查看录取概率
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="one6-1h">
                        <h3 className="text-lg font-medium mb-4" data-oid=":bng1yj">
                            专业适合度测评
                        </h3>
                        <p className="text-gray-700 mb-4" data-oid="g5ba0fl">
                            不确定这个专业是否适合你？参加我们的专业适合度测评，了解你的兴趣和能力是否与该专业匹配。
                        </p>
                        <button
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            data-oid="eng30v8"
                        >
                            开始测评
                        </button>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6" data-oid="vy8uihg">
                        <h3 className="text-lg font-medium mb-4" data-oid="t-7z-az">
                            相似专业推荐
                        </h3>
                        <ul className="space-y-3" data-oid="fir07te">
                            {major.similarMajors &&
                                major.similarMajors.map((similar) => (
                                    <li key={similar.id} data-oid="7_d62fh">
                                        <Link
                                            href={`/major/${similar.id}`}
                                            className="text-green-600 hover:underline"
                                            data-oid="lixtryc"
                                        >
                                            {similar.name}
                                        </Link>
                                        <p className="text-sm text-gray-500" data-oid="hg:9w16">
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
