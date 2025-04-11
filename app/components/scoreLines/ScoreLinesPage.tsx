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
        <div data-oid="n.xvomi">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="g-f5dw2">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="wc:7w3q">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="zc29q1w"
                >
                    <option value="all" data-oid="abc3okf">
                        全部年份
                    </option>
                    <option value="2022" data-oid="izpjymq">
                        2022年
                    </option>
                    <option value="2021" data-oid="hedbkqy">
                        2021年
                    </option>
                    <option value="2020" data-oid="ap-6i9s">
                        2020年
                    </option>
                </select>
                <div className="flex-grow" data-oid="cg-9ufm">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="6aoreip"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="y8f_t1g"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="xte8bdg">
                <table className="min-w-full bg-white" data-oid="zoymzzc">
                    <thead className="bg-gray-100" data-oid=":h6zz9g">
                        <tr data-oid="z.ssazr">
                            <th className="py-3 px-4 text-left" data-oid="vi1vupz">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="js5l8t9">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="9.6q:.6">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="f:_xy2f">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="-g39y1w">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="md_do_t">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="0lb3_06">
                        {filteredScoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="u64wala">
                                <td className="py-3 px-4" data-oid="57xfse-">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="9corykr">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="aebhy_g">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="kwu_-g0">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="yq:gxpy"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="alc6fz3">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid="mrzq5s_"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/admission-plans"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="b04.812"
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
