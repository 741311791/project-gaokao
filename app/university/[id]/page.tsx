'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import MainLayout from '../../components/layout/MainLayout';
import { universities } from '../../data/mockData';

export default function UniversityPage({ params }: { params: { id: string } }) {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState(tabParam || 'overview');
    const universityId = parseInt(params.id);

    // 从mockData获取大学数据
    const university = universities.find((uni) => uni.id === universityId);

    if (!university) {
        return (
            <MainLayout data-oid="6ue2n-r">
                <div
                    className="min-h-screen bg-gray-50 flex items-center justify-center"
                    data-oid="2fvk-qf"
                >
                    <div className="text-center" data-oid="8l2vqo9">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4" data-oid="ijalns:">
                            未找到大学信息
                        </h1>
                        <p className="text-gray-600 mb-6" data-oid="oe-.l_.">
                            抱歉，我们找不到您查询的大学信息。
                        </p>
                        <Link
                            href="/university"
                            className="text-blue-600 hover:underline"
                            data-oid="o7yjz0s"
                        >
                            返回大学列表
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout data-oid="0mj2bmx">
            {/* University Header */}
            <div className="bg-blue-700 text-white" data-oid="ltperor">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-oid="6d37kl4">
                    <div
                        className="flex flex-col md:flex-row items-center md:items-start"
                        data-oid="jlbcyqx"
                    >
                        <div
                            className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6"
                            data-oid="x421a85"
                        >
                            {/* 在实际应用中，这里应该显示真实的图片 */}
                            <span className="text-blue-700 text-2xl font-bold" data-oid="9uka._-">
                                {university.name.substring(0, 2)}
                            </span>
                        </div>
                        <div data-oid=".bmbe_y">
                            <h1 className="text-3xl font-bold" data-oid="7d2fw45">
                                {university.name}
                            </h1>
                            <p className="text-blue-100 mt-1" data-oid="__7d6m3">
                                {university.englishName}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4" data-oid="gg22ryf">
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="osqzr-h"
                                >
                                    {university.type}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="peuoqpj"
                                >
                                    {university.affiliation}
                                </span>
                                <span
                                    className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm"
                                    data-oid="qvh18cu"
                                >
                                    创建于{university.founded}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow" data-oid="an8urtg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xn9w9__">
                    <div className="flex overflow-x-auto" data-oid="kkm857i">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                            data-oid="0hq67gs"
                        >
                            学校概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'majors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('majors')}
                            data-oid="zdqk:o3"
                        >
                            专业设置
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'admission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('admission')}
                            data-oid="tmoe:ba"
                        >
                            招生信息
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="0.0a5fx"
                        >
                            历年分数线
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'facilities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('facilities')}
                            data-oid="qnwz9an"
                        >
                            校园设施
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:flex md:space-x-8 mt-8" data-oid="iq7:31z">
                {/* Main content area */}
                <div className="md:w-2/3" data-oid="vjh2u3i">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="vzx0a3v">
                        {activeTab === 'overview' && (
                            <div data-oid=".pj.u_v">
                                <h2 className="text-xl font-semibold mb-4" data-oid="-ypzdqo">
                                    学校简介
                                </h2>
                                <p
                                    className="text-gray-700 mb-6 leading-relaxed"
                                    data-oid=":0krele"
                                >
                                    {university.description}
                                </p>

                                <h3 className="text-lg font-medium mb-3" data-oid="stj9b9-">
                                    基本信息
                                </h3>
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                                    data-oid="i_kj:i2"
                                >
                                    <div className="flex" data-oid="at2phxe">
                                        <span className="text-gray-500 w-24" data-oid="5t-n1qk">
                                            学校类型：
                                        </span>
                                        <span className="text-gray-900" data-oid="ug-ii6_">
                                            {university.type}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="h64o5ke">
                                        <span className="text-gray-500 w-24" data-oid="d2b1kn9">
                                            创办时间：
                                        </span>
                                        <span className="text-gray-900" data-oid="xxhj9ap">
                                            {university.founded}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="pg1qe92">
                                        <span className="text-gray-500 w-24" data-oid="s_jcoxh">
                                            隶属关系：
                                        </span>
                                        <span className="text-gray-900" data-oid="4qril2m">
                                            {university.affiliation}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="oqfhvc0">
                                        <span className="text-gray-500 w-24" data-oid="h:iw542">
                                            学校地址：
                                        </span>
                                        <span className="text-gray-900" data-oid="f4qxoas">
                                            {university.location}
                                        </span>
                                    </div>
                                    <div className="flex" data-oid="dhypb_3">
                                        <span className="text-gray-500 w-24" data-oid="2fde6xb">
                                            学校网址：
                                        </span>
                                        <a
                                            href={university.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                            data-oid="n3.9hws"
                                        >
                                            {university.website}
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3" data-oid=".cpsxx3">
                                    知名校友
                                </h3>
                                <ul
                                    className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                    data-oid="qtvnhvp"
                                >
                                    {university.famous.map((person, index) => (
                                        <li key={index} data-oid="hbiuwyx">
                                            {person}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'majors' && (
                            <div data-oid="tqz6qzp">
                                <h2 className="text-xl font-semibold mb-4" data-oid="g0g1gg5">
                                    专业设置
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="2cjxd62">
                                    {university.name}
                                    拥有多个国家级重点学科，以下是部分优势专业：
                                </p>

                                <div className="overflow-x-auto" data-oid="gxeemv2">
                                    <table
                                        className="min-w-full divide-y divide-gray-200"
                                        data-oid="8p2kbf8"
                                    >
                                        <thead className="bg-gray-50" data-oid="_y55264">
                                            <tr data-oid="1_xl1tl">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="w3ynn01"
                                                >
                                                    专业名称
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="q9-v0es"
                                                >
                                                    学科门类
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="cmry:0b"
                                                >
                                                    全国排名
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="v7x3ge2"
                                                >
                                                    操作
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200"
                                            data-oid="_qcw927"
                                        >
                                            {university.majors.map((major) => (
                                                <tr key={major.id} data-oid="vgli0mq">
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid=":5h1nwo"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="zb:ruwj"
                                                        >
                                                            {major.name}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="l1gm1-7"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="zlste9s"
                                                        >
                                                            {major.category}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="s3nc694"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="bxev.rs"
                                                        >
                                                            {major.ranking}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                        data-oid="itrh-d1"
                                                    >
                                                        <Link
                                                            href={`/major/${major.id}`}
                                                            className="text-blue-600 hover:text-blue-900"
                                                            data-oid="k7rao-0"
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
                            <div data-oid="gu:052v">
                                <h2 className="text-xl font-semibold mb-4" data-oid="6ro2fvm">
                                    招生信息
                                </h2>
                                <div className="mb-6" data-oid="o1e6xg9">
                                    <h3 className="text-lg font-medium mb-3" data-oid="59u7jvb">
                                        招生政策
                                    </h3>
                                    <p
                                        className="text-gray-700 mb-4 leading-relaxed"
                                        data-oid="nu7.qe-"
                                    >
                                        {university.admissionInfo}
                                    </p>
                                </div>

                                <div className="mb-6" data-oid="zqmj56v">
                                    <h3 className="text-lg font-medium mb-3" data-oid="41t41xq">
                                        河北省招生计划
                                    </h3>
                                    <div className="overflow-x-auto" data-oid="a5mqyn4">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="wu3-r4r"
                                        >
                                            <thead className="bg-gray-50" data-oid="3aoz8t.">
                                                <tr data-oid="him9.i5">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="a3ra:hu"
                                                    >
                                                        年份
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="s_8gknq"
                                                    >
                                                        计划招生人数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="z2yjy60"
                                                    >
                                                        实际招生人数
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="ch_hjs0"
                                            >
                                                {university.admissionPlans.map((plan, index) => (
                                                    <tr key={index} data-oid="uj7fjk4">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="ol4al41"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="uug.i_5"
                                                            >
                                                                {plan.year}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="d-q2v0o"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="koygqj5"
                                                            >
                                                                {plan.plan}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="s0p2x44"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="a_:ult."
                                                            >
                                                                {plan.actual}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'scoreLines' && (
                            <div data-oid="w850ftr">
                                <h2 className="text-xl font-semibold mb-4" data-oid="_.:zgxr">
                                    历年分数线
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="inxoxre">
                                    以下是{university.name}在河北省的历年录取分数线和位次：
                                </p>

                                <div className="overflow-x-auto" data-oid="_ioku-6">
                                    <table
                                        className="min-w-full divide-y divide-gray-200"
                                        data-oid="brgbzsn"
                                    >
                                        <thead className="bg-gray-50" data-oid="i482u1u">
                                            <tr data-oid="of.no9-">
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="t3qljz3"
                                                >
                                                    年份
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="yit:jov"
                                                >
                                                    批次
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="_nr_v.9"
                                                >
                                                    最低分数
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    data-oid="qdq_qs6"
                                                >
                                                    最低位次
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody
                                            className="bg-white divide-y divide-gray-200"
                                            data-oid="t2zqkp0"
                                        >
                                            {university.scoreLines.map((line, index) => (
                                                <tr key={index} data-oid="0ds3:a0">
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="0x6h5f4"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="chbeq79"
                                                        >
                                                            {line.year}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="t68_87l"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="7kn7rv7"
                                                        >
                                                            {line.batch}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="4nx31fl"
                                                    >
                                                        <div
                                                            className="text-sm font-medium text-blue-600"
                                                            data-oid="5eo3v9y"
                                                        >
                                                            {line.score}
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 whitespace-nowrap"
                                                        data-oid="p:7iwmu"
                                                    >
                                                        <div
                                                            className="text-sm text-gray-900"
                                                            data-oid="y9thtb7"
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
                            <div data-oid="s.ls51c">
                                <h2 className="text-xl font-semibold mb-4" data-oid=":v8f_bj">
                                    校园设施
                                </h2>
                                <p className="text-gray-700 mb-6" data-oid="3pwgn9b">
                                    {university.name}
                                    拥有先进的教学设施和优美的校园环境，为学生提供良好的学习和生活条件。
                                </p>

                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                                    data-oid="539rx1v"
                                >
                                    <div
                                        className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                        data-oid="u5dv8c-"
                                    >
                                        <span className="text-gray-500" data-oid="x0578ju">
                                            校园图片 1
                                        </span>
                                    </div>
                                    <div
                                        className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                        data-oid="2tce4ix"
                                    >
                                        <span className="text-gray-500" data-oid="ixpq1ve">
                                            校园图片 2
                                        </span>
                                    </div>
                                    <div
                                        className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                        data-oid="-pslsn0"
                                    >
                                        <span className="text-gray-500" data-oid="ih_222n">
                                            校园图片 3
                                        </span>
                                    </div>
                                    <div
                                        className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center"
                                        data-oid="lqc58c3"
                                    >
                                        <span className="text-gray-500" data-oid="4s1iqg-">
                                            校园图片 4
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3" data-oid="uyby33m">
                                    主要设施
                                </h3>
                                <ul
                                    className="list-disc pl-5 mb-6 space-y-1 text-gray-700"
                                    data-oid="5t:hhc9"
                                >
                                    {university.facilities.map((facility, index) => (
                                        <li key={index} data-oid="5gzd:t7">
                                            {facility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:w-1/3 mt-6 md:mt-0" data-oid="u1k5esv">
                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="37lhp:6">
                        <h3 className="text-lg font-medium mb-4" data-oid="_tsuo4l">
                            快速操作
                        </h3>
                        <div className="space-y-3" data-oid="qwmwj4i">
                            <button
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="d.jcg4j"
                            >
                                收藏该院校
                            </button>
                            <button
                                className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                data-oid="axtbgfm"
                            >
                                对比其他院校
                            </button>
                            <button
                                className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
                                data-oid="63imaet"
                            >
                                查看录取概率
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="r-_uxca">
                        <h3 className="text-lg font-medium mb-4" data-oid="fxod108">
                            联系方式
                        </h3>
                        <div className="space-y-2 text-gray-700" data-oid="vw:mpww">
                            <p data-oid="-._-h_q">招生办电话：010-12345678</p>
                            <p data-oid="mgo.tfi">招生办邮箱：admission@university.edu.cn</p>
                            <p data-oid="5vwgjvu">学校地址：{university.location}</p>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6" data-oid="h54wtb5">
                        <h3 className="text-lg font-medium mb-4" data-oid="m17gqsw">
                            相似院校推荐
                        </h3>
                        <ul className="space-y-3" data-oid="gxddgod">
                            {universities
                                .filter((uni) => uni.id !== university.id)
                                .filter((uni) =>
                                    uni.tags.some((tag) => university.tags.includes(tag)),
                                )
                                .slice(0, 4)
                                .map((uni) => (
                                    <li key={uni.id} data-oid="mmpa9mn">
                                        <Link
                                            href={`/university/${uni.id}`}
                                            className="text-blue-600 hover:underline"
                                            data-oid="r24cl8f"
                                        >
                                            {uni.name}
                                        </Link>
                                        <p className="text-sm text-gray-500" data-oid="8smb98o">
                                            {uni.tags.join(', ')} {uni.type}
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
