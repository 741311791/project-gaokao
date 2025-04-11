'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('info');

    // Mock user data
    const userData = {
        name: '张三',
        email: 'zhangsan@example.com',
        phone: '13812345678',
        school: '石家庄第一中学',
        examScore: 650,
        examRank: 5000,
        examYear: 2023,
    };

    // Mock saved universities
    const savedUniversities = [
        { id: 1, name: '清华大学', location: '北京', type: '985/211', probability: '低' },
        { id: 2, name: '河北大学', location: '河北保定', type: '省属重点', probability: '高' },
        { id: 3, name: '河北工业大学', location: '天津', type: '211', probability: '中' },
    ];

    // Mock saved majors
    const savedMajors = [
        {
            id: 1,
            name: '计算机科学与技术',
            category: '工学',
            universities: ['清华大学', '河北工业大学'],
        },
        { id: 2, name: '软件工程', category: '工学', universities: ['河北大学', '河北工业大学'] },
    ];

    // Mock application history
    const applicationHistory = [
        {
            id: 1,
            university: '清华大学',
            major: '计算机科学与技术',
            status: '待审核',
            date: '2023-06-25',
        },
        { id: 2, university: '河北大学', major: '软件工程', status: '已录取', date: '2023-06-28' },
    ];

    return (
        <div className="min-h-screen bg-gray-50" data-oid="hkjsb6m">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="_9oyc6d">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":gs_mtw">
                    <div className="flex justify-between items-center py-4" data-oid="rc..b3u">
                        <div className="flex items-center" data-oid="h:z4gbc">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="5lpmso2"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <div data-oid="gi2i_j1">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600 mr-4"
                                data-oid="3_fjben"
                            >
                                返回首页
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="k63vxb-">
                <div className="md:flex md:space-x-8" data-oid="h96g3hk">
                    {/* Sidebar */}
                    <div className="md:w-1/4" data-oid="0m.6xmv">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="9k535k4">
                            <div className="text-center mb-6" data-oid="-2s644m">
                                <div
                                    className="h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center"
                                    data-oid="eydy7gb"
                                >
                                    <span className="text-3xl text-blue-600" data-oid="xvp8sk1">
                                        {userData.name.charAt(0)}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold" data-oid="8s.2:aw">
                                    {userData.name}
                                </h2>
                                <p className="text-gray-600" data-oid=".e..y:2">
                                    {userData.school}
                                </p>
                            </div>
                            <div className="space-y-2" data-oid="dqfd5l2">
                                <div className="flex justify-between" data-oid="-ju3.su">
                                    <span className="text-gray-600" data-oid="h3-q.9d">
                                        高考分数:
                                    </span>
                                    <span className="font-medium" data-oid="u834dil">
                                        {userData.examScore}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="0fg64xh">
                                    <span className="text-gray-600" data-oid="vsz3mn_">
                                        位次:
                                    </span>
                                    <span className="font-medium" data-oid="aao.ds4">
                                        {userData.examRank}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="ps586j1">
                                    <span className="text-gray-600" data-oid="bwbbqa3">
                                        考试年份:
                                    </span>
                                    <span className="font-medium" data-oid="167n9g_">
                                        {userData.examYear}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white shadow rounded-lg overflow-hidden"
                            data-oid="5wnejr0"
                        >
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'info' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('info')}
                                data-oid="coav5ra"
                            >
                                个人信息
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('saved')}
                                data-oid="urdn_sl"
                            >
                                收藏院校/专业
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('applications')}
                                data-oid="hw_sn-p"
                            >
                                志愿申请记录
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('settings')}
                                data-oid="q-:v75u"
                            >
                                账户设置
                            </button>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 mt-6 md:mt-0" data-oid="sh81x54">
                        <div className="bg-white shadow rounded-lg p-6" data-oid="5y6.nvy">
                            {activeTab === 'info' && (
                                <div data-oid="7dvt2vd">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="nj_6dym">
                                        个人信息
                                    </h2>
                                    <div className="space-y-6" data-oid="2yqpg.5">
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                            data-oid="v0n38j0"
                                        >
                                            <div data-oid="89oa:9l">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="r_e6:8f"
                                                >
                                                    姓名
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.name}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="em5otht"
                                                />
                                            </div>
                                            <div data-oid="wpt5n7a">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="04h6:8_"
                                                >
                                                    学校
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.school}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="l6tgboc"
                                                />
                                            </div>
                                            <div data-oid="geyfu3g">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="si:9iz."
                                                >
                                                    邮箱
                                                </label>
                                                <input
                                                    type="email"
                                                    value={userData.email}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="8rx6i0y"
                                                />
                                            </div>
                                            <div data-oid="g4ejq15">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="oln-99y"
                                                >
                                                    手机号码
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={userData.phone}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="eo5w6ns"
                                                />
                                            </div>
                                        </div>

                                        <div data-oid="7760g25">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="a9b9ok7"
                                            >
                                                高考信息
                                            </h3>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                                data-oid="tqqt7d-"
                                            >
                                                <div data-oid="r9jrjh6">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="pip9f9r"
                                                    >
                                                        高考分数
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examScore}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="tk2:vj6"
                                                    />
                                                </div>
                                                <div data-oid="65bkbiy">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="2kf.tur"
                                                    >
                                                        位次
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examRank}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid=":i.5:x."
                                                    />
                                                </div>
                                                <div data-oid="u203lyj">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="qwq046m"
                                                    >
                                                        考试年份
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examYear}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="quuo8ss"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end" data-oid="7_293z4">
                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                data-oid="471ypzi"
                                            >
                                                编辑信息
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'saved' && (
                                <div data-oid="zxzw02n">
                                    <h2 className="text-xl font-semibold mb-6" data-oid=".3gf:6q">
                                        收藏院校/专业
                                    </h2>

                                    <div className="mb-8" data-oid="66n7v:7">
                                        <h3 className="text-lg font-medium mb-4" data-oid="fjftd1s">
                                            收藏的院校
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="xycnyaw">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="re9amel"
                                            >
                                                <thead className="bg-gray-50" data-oid="_usyuxk">
                                                    <tr data-oid="-jkbjbd">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="sk27vxv"
                                                        >
                                                            院校名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="x9oh0s:"
                                                        >
                                                            所在地
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="662uuoc"
                                                        >
                                                            类型
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="n__-dno"
                                                        >
                                                            录取概率
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="81dski-"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="_83892s"
                                                >
                                                    {savedUniversities.map((uni) => (
                                                        <tr key={uni.id} data-oid="q.q8dsu">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="skac9h8"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-blue-600"
                                                                    data-oid="x9c2j0j"
                                                                >
                                                                    {uni.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="v.oqrs5"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="9:f8-ig"
                                                                >
                                                                    {uni.location}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="723pwqx"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid=".7j3mvg"
                                                                >
                                                                    {uni.type}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="z3bthx:"
                                                            >
                                                                <span
                                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                                    ${
                                                                        uni.probability === '高'
                                                                            ? 'bg-green-100 text-green-800'
                                                                            : uni.probability ===
                                                                                '中'
                                                                              ? 'bg-yellow-100 text-yellow-800'
                                                                              : 'bg-red-100 text-red-800'
                                                                    }`}
                                                                    data-oid="lrrze1g"
                                                                >
                                                                    {uni.probability}
                                                                </span>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid="m-o_r-a"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="pt4jn-j"
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="tjtaf2a"
                                                                >
                                                                    取消收藏
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div data-oid="ke-:5w9">
                                        <h3 className="text-lg font-medium mb-4" data-oid="rp4enl1">
                                            收藏的专业
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="kkx0joq">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="5sgj63t"
                                            >
                                                <thead className="bg-gray-50" data-oid="cegal3w">
                                                    <tr data-oid="h3e_7b:">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="e1.2o8t"
                                                        >
                                                            专业名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="e51oc7g"
                                                        >
                                                            学科门类
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="dayp1j6"
                                                        >
                                                            开设院校
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="6abxai4"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="pykq3v8"
                                                >
                                                    {savedMajors.map((major) => (
                                                        <tr key={major.id} data-oid="g36syjk">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="kzt8f_e"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-green-600"
                                                                    data-oid="6hjpuyy"
                                                                >
                                                                    {major.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="n3sct5a"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid=":a8j.d2"
                                                                >
                                                                    {major.category}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="ipo5l00"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="1amvh0d"
                                                                >
                                                                    {major.universities.join(', ')}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid="hykm.27"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="k08i_ah"
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="0-:arnr"
                                                                >
                                                                    取消收藏
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'applications' && (
                                <div data-oid="lk69pai">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="by-bbhp">
                                        志愿申请记录
                                    </h2>
                                    <div className="overflow-x-auto" data-oid="mmr4ez5">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="91xcgaw"
                                        >
                                            <thead className="bg-gray-50" data-oid="hc.rosk">
                                                <tr data-oid="0_djsss">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid=":72gwl7"
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="22ayqgu"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="li5tfzc"
                                                    >
                                                        申请日期
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="gpek-gq"
                                                    >
                                                        状态
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="pgu-c5_"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="kc083st"
                                            >
                                                {applicationHistory.map((app) => (
                                                    <tr key={app.id} data-oid="qkr1y0n">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="dermd4u"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="36vrptq"
                                                            >
                                                                {app.university}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="j2e7oy6"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="0.haj0g"
                                                            >
                                                                {app.major}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="favxmwe"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="nbvy2cb"
                                                            >
                                                                {app.date}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="quy7qfz"
                                                        >
                                                            <span
                                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                                ${
                                                                    app.status === '已录取'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : app.status === '待审核'
                                                                          ? 'bg-yellow-100 text-yellow-800'
                                                                          : 'bg-red-100 text-red-800'
                                                                }`}
                                                                data-oid="3nmn2t4"
                                                            >
                                                                {app.status}
                                                            </span>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="zbvb6r8"
                                                        >
                                                            <button
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="1ari4.g"
                                                            >
                                                                查看详情
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div data-oid="b.bvz89">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="dsgbt1c">
                                        账户设置
                                    </h2>
                                    <div className="space-y-6" data-oid="e14vn3c">
                                        <div data-oid="dvw31bt">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="18haig6"
                                            >
                                                修改密码
                                            </h3>
                                            <div className="space-y-4" data-oid="-wpcw6q">
                                                <div data-oid="3o25wgq">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="i9.7jx5"
                                                    >
                                                        当前密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid=".gdgqyc"
                                                    />
                                                </div>
                                                <div data-oid="1f2-gic">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="1e96gn8"
                                                    >
                                                        新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="5ffm52i"
                                                    />
                                                </div>
                                                <div data-oid="89g5tas">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="xgxd-iq"
                                                    >
                                                        确认新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="unahy3b"
                                                    />
                                                </div>
                                                <div data-oid="37kj7c9">
                                                    <button
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                        data-oid="wbet0jj"
                                                    >
                                                        更新密码
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="pt-6 border-t border-gray-200"
                                            data-oid="794wal5"
                                        >
                                            <h3
                                                className="text-lg font-medium mb-3 text-red-600"
                                                data-oid="d1b_4-m"
                                            >
                                                危险操作
                                            </h3>
                                            <button
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                                data-oid="470srja"
                                            >
                                                注销账户
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="9ad39-m">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="vf5r5fr">
                    <div className="text-center text-gray-500" data-oid="rb7a61t">
                        <p data-oid="k9q7k94">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
