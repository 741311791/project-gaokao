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
            <MainLayout>
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">未找到大学信息</h1>
                        <p className="text-gray-600 mb-6">抱歉，我们找不到您查询的大学信息。</p>
                        <Link href="/university" className="text-blue-600 hover:underline">
                            返回大学列表
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            {/* University Header */}
            <div className="bg-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                            {/* 在实际应用中，这里应该显示真实的图片 */}
                            <span className="text-blue-700 text-2xl font-bold">
                                {university.name.substring(0, 2)}
                            </span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{university.name}</h1>
                            <p className="text-blue-100 mt-1">{university.englishName}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">
                                    {university.type}
                                </span>
                                <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">
                                    {university.affiliation}
                                </span>
                                <span className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-sm">
                                    创建于{university.founded}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto">
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            学校概况
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'majors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('majors')}
                        >
                            专业设置
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'admission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('admission')}
                        >
                            招生信息
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('scoreLines')}
                        >
                            历年分数线
                        </button>
                        <button
                            className={`px-4 py-4 font-medium text-sm whitespace-nowrap ${activeTab === 'facilities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('facilities')}
                        >
                            校园设施
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="md:flex md:space-x-8 mt-8">
                {/* Main content area */}
                <div className="md:w-2/3">
                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        {activeTab === 'overview' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">学校简介</h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {university.description}
                                </p>

                                <h3 className="text-lg font-medium mb-3">基本信息</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex">
                                        <span className="text-gray-500 w-24">学校类型：</span>
                                        <span className="text-gray-900">{university.type}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-500 w-24">创办时间：</span>
                                        <span className="text-gray-900">{university.founded}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-500 w-24">隶属关系：</span>
                                        <span className="text-gray-900">
                                            {university.affiliation}
                                        </span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-500 w-24">学校地址：</span>
                                        <span className="text-gray-900">{university.location}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-gray-500 w-24">学校网址：</span>
                                        <a
                                            href={university.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            {university.website}
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3">知名校友</h3>
                                <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
                                    {university.famous.map((person, index) => (
                                        <li key={index}>{person}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'majors' && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">专业设置</h2>
                                <p className="text-gray-700 mb-6">
                                    {university.name}
                                    拥有多个国家级重点学科，以下是部分优势专业：
                                </p>

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
                                                    全国排名
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
                                            {university.majors.map((major) => (
                                                <tr key={major.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-blue-600">
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
                                                            {major.ranking}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <Link
                                                            href={`/major/${major.id}`}
                                                            className="text-blue-600 hover:text-blue-900"
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
                            <div>
                                <h2 className="text-xl font-semibold mb-4">招生信息</h2>
                                <div className="mb-6">
                                    <h3 className="text-lg font-medium mb-3">招生政策</h3>
                                    <p className="text-gray-700 mb-4 leading-relaxed">
                                        {university.admissionInfo}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-medium mb-3">河北省招生计划</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        年份
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        计划招生人数
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        实际招生人数
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {university.admissionPlans.map((plan, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {plan.year}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {plan.plan}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
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
                            <div>
                                <h2 className="text-xl font-semibold mb-4">历年分数线</h2>
                                <p className="text-gray-700 mb-6">
                                    以下是{university.name}在河北省的历年录取分数线和位次：
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    年份
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    批次
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    最低分数
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    最低位次
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {university.scoreLines.map((line, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {line.year}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {line.batch}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-blue-600">
                                                            {line.score}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
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
                            <div>
                                <h2 className="text-xl font-semibold mb-4">校园设施</h2>
                                <p className="text-gray-700 mb-6">
                                    {university.name}
                                    拥有先进的教学设施和优美的校园环境，为学生提供良好的学习和生活条件。
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
                                        <span className="text-gray-500">校园图片 1</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
                                        <span className="text-gray-500">校园图片 2</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
                                        <span className="text-gray-500">校园图片 3</span>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-lg h-48 flex items-center justify-center">
                                        <span className="text-gray-500">校园图片 4</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium mb-3">主要设施</h3>
                                <ul className="list-disc pl-5 mb-6 space-y-1 text-gray-700">
                                    {university.facilities.map((facility, index) => (
                                        <li key={index}>{facility}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:w-1/3 mt-6 md:mt-0">
                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-medium mb-4">快速操作</h3>
                        <div className="space-y-3">
                            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                收藏该院校
                            </button>
                            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                                对比其他院校
                            </button>
                            <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                                查看录取概率
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-medium mb-4">联系方式</h3>
                        <div className="space-y-2 text-gray-700">
                            <p>招生办电话：010-12345678</p>
                            <p>招生办邮箱：admission@university.edu.cn</p>
                            <p>学校地址：{university.location}</p>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-4">相似院校推荐</h3>
                        <ul className="space-y-3">
                            {universities
                                .filter((uni) => uni.id !== university.id)
                                .filter((uni) =>
                                    uni.tags.some((tag) => university.tags.includes(tag)),
                                )
                                .slice(0, 4)
                                .map((uni) => (
                                    <li key={uni.id}>
                                        <Link
                                            href={`/university/${uni.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {uni.name}
                                        </Link>
                                        <p className="text-sm text-gray-500">
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
