'use client';

import { useState } from 'react';
import Link from 'next/link';
import { scoreLines } from '../../data/mockData';

export default function ScoreLinesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [yearFilter, setYearFilter] = useState('all');

    const filteredScoreLines = scoreLines.filter(
        (line) =>
            (yearFilter === 'all' || line.year.toString() === yearFilter) &&
            (line.university.includes(searchQuery) || line.major.includes(searchQuery)),
    );

    return (
        <div data-oid="ynszrv:">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="51l1ugg">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="zeuban0">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="mkzc6xz"
                >
                    <option value="all" data-oid="88o0wds">
                        全部年份
                    </option>
                    <option value="2022" data-oid="17esagr">
                        2022年
                    </option>
                    <option value="2021" data-oid="etppgm2">
                        2021年
                    </option>
                    <option value="2020" data-oid="x9w484x">
                        2020年
                    </option>
                </select>
                <div className="flex-grow" data-oid="eq25c0.">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="6mmwok2"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="z512kxb"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="7._d7ou">
                <table className="min-w-full bg-white" data-oid="n_jcna5">
                    <thead className="bg-gray-100" data-oid="3erjf12">
                        <tr data-oid="d:2njht">
                            <th className="py-3 px-4 text-left" data-oid="fnd8yt6">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="qn07w60">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="60mg_t8">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="8idd.s8">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="m52d4hs">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="5px8b:.">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="pd8c32n">
                        {filteredScoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="oajspiq">
                                <td className="py-3 px-4" data-oid="b_f8mjk">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="1ok:8x0">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="rjnzluv">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="0hjd_nb">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="k.soewv"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="a73hjvx">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid=":2wjtbc"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/admission-plans"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="xxqqov3"
                                    >
                                        查看招生计划
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
