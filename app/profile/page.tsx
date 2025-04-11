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
        <div className="min-h-screen bg-gray-50" data-oid="lbmol4s">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="cypdaz-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="gy:901h">
                    <div className="flex justify-between items-center py-4" data-oid="ay6im-6">
                        <div className="flex items-center" data-oid="lu5cdze">
                            <Link
                                href="/"
                                className="text-2xl font-bold text-blue-700"
                                data-oid="wqle5ew"
                            >
                                河北高考志愿填报
                            </Link>
                        </div>
                        <div data-oid="a3wh2g9">
                            <Link
                                href="/"
                                className="text-gray-600 hover:text-blue-600 mr-4"
                                data-oid="k-zmo8n"
                            >
                                返回首页
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="kvi5s:6">
                <div className="md:flex md:space-x-8" data-oid="_7gsard">
                    {/* Sidebar */}
                    <div className="md:w-1/4" data-oid="pkep17a">
                        <div className="bg-white shadow rounded-lg p-6 mb-6" data-oid="_6b1338">
                            <div className="text-center mb-6" data-oid="zoe2sej">
                                <div
                                    className="h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center"
                                    data-oid="dpr7qp9"
                                >
                                    <span className="text-3xl text-blue-600" data-oid="_4jmx0f">
                                        {userData.name.charAt(0)}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold" data-oid="f_xcz09">
                                    {userData.name}
                                </h2>
                                <p className="text-gray-600" data-oid="w4xfddy">
                                    {userData.school}
                                </p>
                            </div>
                            <div className="space-y-2" data-oid="jl7clq4">
                                <div className="flex justify-between" data-oid="1fu9u:x">
                                    <span className="text-gray-600" data-oid="nebbhvf">
                                        高考分数:
                                    </span>
                                    <span className="font-medium" data-oid="u5bo8yg">
                                        {userData.examScore}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="w0uli6c">
                                    <span className="text-gray-600" data-oid="xh1tfa6">
                                        位次:
                                    </span>
                                    <span className="font-medium" data-oid="u55p6qe">
                                        {userData.examRank}
                                    </span>
                                </div>
                                <div className="flex justify-between" data-oid="3jbfey1">
                                    <span className="text-gray-600" data-oid=".z9:woz">
                                        考试年份:
                                    </span>
                                    <span className="font-medium" data-oid="5.qqi-_">
                                        {userData.examYear}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-white shadow rounded-lg overflow-hidden"
                            data-oid="ej9xntj"
                        >
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'info' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('info')}
                                data-oid="4nsh3ej"
                            >
                                个人信息
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('saved')}
                                data-oid="prtal44"
                            >
                                收藏院校/专业
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('applications')}
                                data-oid="fwl9wlh"
                            >
                                志愿申请记录
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('settings')}
                                data-oid="yqoh108"
                            >
                                账户设置
                            </button>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 mt-6 md:mt-0" data-oid="8drnktm">
                        <div className="bg-white shadow rounded-lg p-6" data-oid="s8iw08g">
                            {activeTab === 'info' && (
                                <div data-oid="0luvmcr">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="uvrhi8k">
                                        个人信息
                                    </h2>
                                    <div className="space-y-6" data-oid="x3:ig0y">
                                        <div
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                            data-oid="lrila:l"
                                        >
                                            <div data-oid="25s8khz">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="de-5bn8"
                                                >
                                                    姓名
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.name}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="fm7ctt9"
                                                />
                                            </div>
                                            <div data-oid="rwzo84p">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="c1eel9b"
                                                >
                                                    学校
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.school}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="vdwrfrp"
                                                />
                                            </div>
                                            <div data-oid="taaiv4i">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="t.knr41"
                                                >
                                                    邮箱
                                                </label>
                                                <input
                                                    type="email"
                                                    value={userData.email}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="37lihm-"
                                                />
                                            </div>
                                            <div data-oid="h_vu69p">
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    data-oid="5.f3v1r"
                                                >
                                                    手机号码
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={userData.phone}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    data-oid="wsxrr17"
                                                />
                                            </div>
                                        </div>

                                        <div data-oid="4-sm6a1">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="3o:3:ro"
                                            >
                                                高考信息
                                            </h3>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                                                data-oid="tap:59_"
                                            >
                                                <div data-oid="1d0864q">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="y69h2xk"
                                                    >
                                                        高考分数
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examScore}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="fv16d74"
                                                    />
                                                </div>
                                                <div data-oid="8emn86s">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="pce55s_"
                                                    >
                                                        位次
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examRank}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid="jsfhua-"
                                                    />
                                                </div>
                                                <div data-oid="hbxa64r">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="qbi:l_x"
                                                    >
                                                        考试年份
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examYear}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                        data-oid=".b-7krm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end" data-oid="pn65rgp">
                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                data-oid="to-_ozc"
                                            >
                                                编辑信息
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'saved' && (
                                <div data-oid="r58iz8w">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="pjfvm7r">
                                        收藏院校/专业
                                    </h2>

                                    <div className="mb-8" data-oid="p.b.vxf">
                                        <h3 className="text-lg font-medium mb-4" data-oid="buge_ys">
                                            收藏的院校
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="b.ng3e3">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="-j:358o"
                                            >
                                                <thead className="bg-gray-50" data-oid="6_mfnyi">
                                                    <tr data-oid="5pcp7jf">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="j0:lzzp"
                                                        >
                                                            院校名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="pd33a9_"
                                                        >
                                                            所在地
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="qm9:fqa"
                                                        >
                                                            类型
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid=":yo2jad"
                                                        >
                                                            录取概率
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="oargy-n"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid=".ns8:eg"
                                                >
                                                    {savedUniversities.map((uni) => (
                                                        <tr key={uni.id} data-oid="vs4mh2.">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="gz.nnnv"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-blue-600"
                                                                    data-oid="zgecgcr"
                                                                >
                                                                    {uni.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="40r_t5."
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="-ar2up1"
                                                                >
                                                                    {uni.location}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="tkfx0aj"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="08sdf4e"
                                                                >
                                                                    {uni.type}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="tn8:bj."
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
                                                                    data-oid="n1rpv-8"
                                                                >
                                                                    {uni.probability}
                                                                </span>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid=".nbf7h0"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="nyiyxf_"
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="-bktk.b"
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

                                    <div data-oid="a7hkzjw">
                                        <h3 className="text-lg font-medium mb-4" data-oid="6g__954">
                                            收藏的专业
                                        </h3>
                                        <div className="overflow-x-auto" data-oid="yexgnu0">
                                            <table
                                                className="min-w-full divide-y divide-gray-200"
                                                data-oid="fo1fl3h"
                                            >
                                                <thead className="bg-gray-50" data-oid=":ly7r-w">
                                                    <tr data-oid="3zj_z0y">
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="_9ysk0i"
                                                        >
                                                            专业名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="mw2avlp"
                                                        >
                                                            学科门类
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="urjy_rm"
                                                        >
                                                            开设院校
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                            data-oid="xc796xf"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody
                                                    className="bg-white divide-y divide-gray-200"
                                                    data-oid="23n:-zi"
                                                >
                                                    {savedMajors.map((major) => (
                                                        <tr key={major.id} data-oid="ubl9dc0">
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="4ys7lab"
                                                            >
                                                                <div
                                                                    className="text-sm font-medium text-green-600"
                                                                    data-oid="-g3n-ou"
                                                                >
                                                                    {major.name}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="l:p2m8l"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="gdn7rpa"
                                                                >
                                                                    {major.category}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap"
                                                                data-oid="cakhhn8"
                                                            >
                                                                <div
                                                                    className="text-sm text-gray-900"
                                                                    data-oid="0xqjp43"
                                                                >
                                                                    {major.universities.join(', ')}
                                                                </div>
                                                            </td>
                                                            <td
                                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                                data-oid="bd15pzn"
                                                            >
                                                                <button
                                                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                                                    data-oid="333il:."
                                                                >
                                                                    查看详情
                                                                </button>
                                                                <button
                                                                    className="text-red-600 hover:text-red-900"
                                                                    data-oid="wkkn8o6"
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
                                <div data-oid="d_qad54">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="659sutl">
                                        志愿申请记录
                                    </h2>
                                    <div className="overflow-x-auto" data-oid="bzi..48">
                                        <table
                                            className="min-w-full divide-y divide-gray-200"
                                            data-oid="y:3ceqb"
                                        >
                                            <thead className="bg-gray-50" data-oid=".2t5x1f">
                                                <tr data-oid="3joy42n">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="8ah1kyf"
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid=":8s68_s"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="wg_67g1"
                                                    >
                                                        申请日期
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="6:ahneg"
                                                    >
                                                        状态
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        data-oid="cu6xxkt"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody
                                                className="bg-white divide-y divide-gray-200"
                                                data-oid="3wvv5u7"
                                            >
                                                {applicationHistory.map((app) => (
                                                    <tr key={app.id} data-oid="k2xgi_8">
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="nu7-.-n"
                                                        >
                                                            <div
                                                                className="text-sm font-medium text-blue-600"
                                                                data-oid="dwr7-qn"
                                                            >
                                                                {app.university}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="r7tem9-"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="zk0g77q"
                                                            >
                                                                {app.major}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid=".h:.1kd"
                                                        >
                                                            <div
                                                                className="text-sm text-gray-900"
                                                                data-oid="m1qnh1h"
                                                            >
                                                                {app.date}
                                                            </div>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            data-oid="rdwqeyl"
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
                                                                data-oid="ji5836p"
                                                            >
                                                                {app.status}
                                                            </span>
                                                        </td>
                                                        <td
                                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                                            data-oid="dc6v7_y"
                                                        >
                                                            <button
                                                                className="text-blue-600 hover:text-blue-900"
                                                                data-oid="_af9jl."
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
                                <div data-oid="zpkanuh">
                                    <h2 className="text-xl font-semibold mb-6" data-oid="98zl925">
                                        账户设置
                                    </h2>
                                    <div className="space-y-6" data-oid="lfr9s-a">
                                        <div data-oid="07f8fu.">
                                            <h3
                                                className="text-lg font-medium mb-3"
                                                data-oid="qkk3rbv"
                                            >
                                                修改密码
                                            </h3>
                                            <div className="space-y-4" data-oid="drkfcfs">
                                                <div data-oid="z5yf29x">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="modsxtx"
                                                    >
                                                        当前密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid=":oa2i-5"
                                                    />
                                                </div>
                                                <div data-oid="3kk34e_">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="3dsckc7"
                                                    >
                                                        新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="kgmn7xg"
                                                    />
                                                </div>
                                                <div data-oid="l4jy:j.">
                                                    <label
                                                        className="block text-sm font-medium text-gray-700 mb-1"
                                                        data-oid="44vtf5q"
                                                    >
                                                        确认新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                        data-oid="mr:tcgl"
                                                    />
                                                </div>
                                                <div data-oid="qj8_2.k">
                                                    <button
                                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                                        data-oid="wzlqiew"
                                                    >
                                                        更新密码
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="pt-6 border-t border-gray-200"
                                            data-oid="3yh.9d-"
                                        >
                                            <h3
                                                className="text-lg font-medium mb-3 text-red-600"
                                                data-oid="hr74nsc"
                                            >
                                                危险操作
                                            </h3>
                                            <button
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                                                data-oid="auw7_8o"
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
            <footer className="bg-white border-t mt-12" data-oid="jtdjq5v">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-oid="k6bgtgl">
                    <div className="text-center text-gray-500" data-oid="d7ayys3">
                        <p data-oid="pexsw-x">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
