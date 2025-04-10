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
        <div className="min-h-screen bg-gray-50" data-oid="14.wml5">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="sshux3s">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fluvahb">
                    <div className="flex justify-between items-center py-4" data-oid="lfjzizt">
                        <div className="flex items-center" data-oid="r5r6lyx">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="kn5e7ix"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <div data-oid="czcu0u3">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600 mr-4"
                                data-oid="a-snjr4"
                            >
                                返回首页
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="-dp_ttq">
                <div className="md:flex md:space-x-8" data-oid="44fvh2p">
                    {/* Sidebar */}
                    <div className="md:w-1/4" data-oid="xp166d.">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="6utb_d0">
                            <div className="text-center mb-6" data-oid=".1y6u1c">
                                <div
                                    className="h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center"
                                    data-oid="07ar:ob"
                                >
                                    <span className="text-3xl text-blue-600" data-oid="f3nvj38">
                                        {userData.name.charAt(0)}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold" data-oid="3ismzi7">
                                    {userData.name}
                                </h2>
                                <p className="text-gray-600" data-oid="tbgzxq:">
                                    {userData.school}
                                </p>
                            </div>
                            <div className="space-y-2" data-oid="8-cj6.6">
                                <div className="flex justify-between" data-oid="2r0-igz">
                                    <span className="text-gray-600" data-oid="-zjaowy">
                                        高考分数:
                                    </span>
                                    <span className="font-medium" data-oid="m6:emf1">
                                        {userData.examScore}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="17pg3:s">
                                    <span className="text-gray-600" data-oid="rfulo1m">
                                        位次:
                                    </span>
                                    <span className="font-medium" data-oid="1yh2smn">
                                        {userData.examRank}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="btxm9yi">
                                    <span className="text-gray-600" data-oid="qtvxo.o">
                                        考试年份:
                                    </span>
                                    <span className="font-medium" data-oid="_d7419a">
                                        {userData.examYear}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white shadow rounded-lg overflow-hidden"
                            data-oid="v32yxtp"
                        >
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'info' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('info')}
                                data-oid="rrkfiuz"
                            >
                                个人信息
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('saved')}
                                data-oid="majuj-8"
                            >
                                收藏院校/专业
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('applications')}
                                data-oid="7p6ejs_"
                            >
                                志愿申请记录
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('settings')}
                                data-oid="7d:x-0a"
                            >
                                账户设置
                            </button>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 mt-6 md:mt-0" data-oid="d1qthvs">
                        <div className="bg-white shadow rounded-lg p-6" data-oid="rdcgiif">
                            {activeTab === 'info' && (
                                <div data-oid="ufrfu8c">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="mltju6a">
                                        个人信息
                                    </h2>
                                    <div className="space-y-6" data-oid="cr6n.bp">
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                            data-oid="sz_b7z_"
                                        >
                                            <div data-oid="khsrmv2">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="hy1x7w8"
                                                >
                                                    姓名
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.name}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="d-gq4xm"
                                                />
                                            </div>
                                            <div data-oid="_e79am0">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="85bd:zw"
                                                >
                                                    学校
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.school}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="vskwr26"
                                                />
                                            </div>
                                            <div data-oid="vmhkpm7">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="cp25r2p"
                                                >
                                                    邮箱
                                                </label>
                                                <input
                                                    type="email"
                                                    value={userData.email}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="qmjffja"
                                                />
                                            </div>
                                            <div data-oid="ogyjrm3">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="hoa0tf8"
                                                >
                                                    手机号码
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={userData.phone}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="2-kwh8l"
                                                />
                                            </div>
                                        </div>

                                        <div data-oid="kumpfi6">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="o6.tgcz"
                                            >
                                                高考信息
                                            </h3>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                                data-oid="bq-ei-5"
                                            >
                                                <div data-oid="p9j3mz5">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="1b:f-nc"
                                                    >
                                                        高考分数
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examScore}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="0_9v6s6"
                                                    />
                                                </div>
                                                <div data-oid="ys4hjnb">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="fjyokag"
                                                    >
                                                        位次
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examRank}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="l1dxzj6"
                                                    />
                                                </div>
                                                <div data-oid="cm.7b_m">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="8:_6hk_"
                                                    >
                                                        考试年份
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examYear}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid=":kl3:g5"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end" data-oid="4wj1-0:">
                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                data-oid="h4ge9v_"
                                            >
                                                编辑信息
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'saved' && (
                                <div data-oid="zvm5ta1">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="x54a1j_">
                                        收藏院校/专业
                                    </h2>

                                    <div className="mb-8" data-oid="sqd7un_">
                                        <h3 className="text-lg font-medium mb-4" data-oid="88e86dn">
                                            收藏的院校
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="km2iefi">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="7y5w8hv"
                                            >
                                                <thead className="bg-gray-50" data-oid="fkuoq9z">
                                                    <tr data-oid="rgkscgc">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="_6y49ee"
                                                        >
                                                            院校名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="l5z4hpu"
                                                        >
                                                            所在地
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="475vsg."
                                                        >
                                                            类型
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="tx38pn7"
                                                        >
                                                            录取概率
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="ni1q9is"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="ndbhpr2"
                                                >
                                                    {savedUniversities.map((uni) => (
                                                        <tr key={uni.id} data-oid="k14:lw6">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="f0x64lr"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-blue-600"
                                                                    data-oid="hmk8jnk"
                                                                >
                                                                    {uni.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="sctwb2i"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="2eoi4_4"
                                                                >
                                                                    {uni.location}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="nisblri"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="hhc:rav"
                                                                >
                                                                    {uni.type}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="0wkni1u"
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
                                                                    data-oid="kzhe.fb"
                                                                >
                                                                    {uni.probability}
                                                                </span>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid="892.qrk"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="_ip.f60"
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="8jtcqok"
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

                                    <div data-oid="ggqkk1f">
                                        <h3 className="text-lg font-medium mb-4" data-oid="gg1j_6c">
                                            收藏的专业
                                        </h3>
                                        <div className="overflow-x-auto" data-oid=".507jdr">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="oudrute"
                                            >
                                                <thead className="bg-gray-50" data-oid="latqv.u">
                                                    <tr data-oid="..l5god">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="-s:3b5h"
                                                        >
                                                            专业名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid=":7d_.1h"
                                                        >
                                                            学科门类
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="7ixly9u"
                                                        >
                                                            开设院校
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="admttxk"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="tj:kn:s"
                                                >
                                                    {savedMajors.map((major) => (
                                                        <tr key={major.id} data-oid=".qffghi">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="0hf0ctc"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-green-600"
                                                                    data-oid="as94lok"
                                                                >
                                                                    {major.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="l5a8cae"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="cz:9ine"
                                                                >
                                                                    {major.category}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="9ffydou"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="-67ee-8"
                                                                >
                                                                    {major.universities.join(', ')}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid="-8ogw.3"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="gvveeex"
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="j0xoqol"
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
                                <div data-oid="5aks3d9">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="oqtx-hn">
                                        志愿申请记录
                                    </h2>
                                    <div className="overflow-x-auto" data-oid="kdo1vye">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="h19q6rk"
                                        >
                                            <thead className="bg-gray-50" data-oid="-e_71l9">
                                                <tr data-oid="funvhak">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="4uwc4i1"
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="_ch-1yq"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="6uvj.21"
                                                    >
                                                        申请日期
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="bs-vjxd"
                                                    >
                                                        状态
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="qeq2.jk"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="bmia5xy"
                                            >
                                                {applicationHistory.map((app) => (
                                                    <tr key={app.id} data-oid="kfy0z40">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="52bwn5e"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="s4.:.d4"
                                                            >
                                                                {app.university}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="lbc_ehv"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="n9ki01_"
                                                            >
                                                                {app.major}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="ckgly7l"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="ql02rmv"
                                                            >
                                                                {app.date}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="zjpcmp4"
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
                                                                data-oid="sdxlqys"
                                                            >
                                                                {app.status}
                                                            </span>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="4141c15"
                                                        >
                                                            <button
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="-bek0cz"
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
                                <div data-oid="nyh90xp">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="xvx-7__">
                                        账户设置
                                    </h2>
                                    <div className="space-y-6" data-oid="ujwjpb9">
                                        <div data-oid="v4ow:uo">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="gj2c9b1"
                                            >
                                                修改密码
                                            </h3>
                                            <div className="space-y-4" data-oid=".de:972">
                                                <div data-oid="otux2jk">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="k491:c5"
                                                    >
                                                        当前密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="5w7fw3g"
                                                    />
                                                </div>
                                                <div data-oid="18_wz9t">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="vws7i.b"
                                                    >
                                                        新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="qkczdca"
                                                    />
                                                </div>
                                                <div data-oid="-640mw:">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="2lt0dbh"
                                                    >
                                                        确认新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="x96z3-j"
                                                    />
                                                </div>
                                                <div data-oid="-8vq4-t">
                                                    <button
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                        data-oid="1y6dl4s"
                                                    >
                                                        更新密码
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="pt-6 border-t border-gray-200"
                                            data-oid="qyn9e0u"
                                        >
                                            <h3
                                                className="text-lg font-medium mb-3 text-red-600"
                                                data-oid="jsz6w01"
                                            >
                                                危险操作
                                            </h3>
                                            <button
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                                data-oid="0s7ikh8"
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
            <footer className="bg-white border-t mt-12" data-oid="um7dfol">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="woj_w-v">
                    <div className="text-center text-gray-500" data-oid="x6my96e">
                        <p data-oid="-074fsy">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
