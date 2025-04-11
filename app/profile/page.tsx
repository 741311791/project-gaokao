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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold text-blue-700">
                                河北高考志愿填报
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="text-gray-600 hover:text-blue-600 mr-4">
                                返回首页
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="md:flex md:space-x-8">
                    {/* Sidebar */}
                    <div className="md:w-1/4">
                        <div className="bg-white shadow rounded-lg p-6 mb-6">
                            <div className="text-center mb-6">
                                <div className="h-24 w-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-3xl text-blue-600">
                                        {userData.name.charAt(0)}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold">{userData.name}</h2>
                                <p className="text-gray-600">{userData.school}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">高考分数:</span>
                                    <span className="font-medium">{userData.examScore}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">位次:</span>
                                    <span className="font-medium">{userData.examRank}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">考试年份:</span>
                                    <span className="font-medium">{userData.examYear}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'info' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('info')}
                            >
                                个人信息
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('saved')}
                            >
                                收藏院校/专业
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'applications' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('applications')}
                            >
                                志愿申请记录
                            </button>
                            <button
                                className={`w-full py-3 px-4 text-left ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                                onClick={() => setActiveTab('settings')}
                            >
                                账户设置
                            </button>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="md:w-3/4 mt-6 md:mt-0">
                        <div className="bg-white shadow rounded-lg p-6">
                            {activeTab === 'info' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">个人信息</h2>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    姓名
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.name}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    学校
                                                </label>
                                                <input
                                                    type="text"
                                                    value={userData.school}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    邮箱
                                                </label>
                                                <input
                                                    type="email"
                                                    value={userData.email}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    手机号码
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={userData.phone}
                                                    readOnly
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium mb-3">高考信息</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        高考分数
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examScore}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        位次
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examRank}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        考试年份
                                                    </label>
                                                    <input
                                                        type="number"
                                                        value={userData.examYear}
                                                        readOnly
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                                编辑信息
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'saved' && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">收藏院校/专业</h2>

                                    <div className="mb-8">
                                        <h3 className="text-lg font-medium mb-4">收藏的院校</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            院校名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            所在地
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            类型
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            录取概率
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {savedUniversities.map((uni) => (
                                                        <tr key={uni.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm font-medium text-blue-600">
                                                                    {uni.name}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">
                                                                    {uni.location}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">
                                                                    {uni.type}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
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
                                                                >
                                                                    {uni.probability}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                                    查看详情
                                                                </button>
                                                                <button className="text-red-600 hover:text-red-900">
                                                                    取消收藏
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-4">收藏的专业</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            专业名称
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            学科门类
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            开设院校
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                            操作
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {savedMajors.map((major) => (
                                                        <tr key={major.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm font-medium text-green-600">
                                                                    {major.name}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">
                                                                    {major.category}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">
                                                                    {major.universities.join(', ')}
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                <button className="text-blue-600 hover:text-blue-900 mr-3">
                                                                    查看详情
                                                                </button>
                                                                <button className="text-red-600 hover:text-red-900">
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
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">志愿申请记录</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        院校名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        专业名称
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        申请日期
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        状态
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        操作
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {applicationHistory.map((app) => (
                                                    <tr key={app.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-blue-600">
                                                                {app.university}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {app.major}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {app.date}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span
                                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                                ${
                                                                    app.status === '已录取'
                                                                        ? 'bg-green-100 text-green-800'
                                                                        : app.status === '待审核'
                                                                          ? 'bg-yellow-100 text-yellow-800'
                                                                          : 'bg-red-100 text-red-800'
                                                                }`}
                                                            >
                                                                {app.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            <button className="text-blue-600 hover:text-blue-900">
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
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">账户设置</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-medium mb-3">修改密码</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        当前密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        确认新密码
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                                        更新密码
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-gray-200">
                                            <h3 className="text-lg font-medium mb-3 text-red-600">
                                                危险操作
                                            </h3>
                                            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
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
            <footer className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="text-center text-gray-500">
                        <p>© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
