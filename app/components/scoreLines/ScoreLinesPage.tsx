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
        <div data-oid="_5tlgpj">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="pmvk75x">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="lbq7bev">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="n9yhn4l"
                    key="olk-8cco"
                >
                    <option value="all" data-oid="qy:fu14">
                        全部年份
                    </option>
                    <option value="2022" data-oid="-aq7xs4">
                        2022年
                    </option>
                    <option value="2021" data-oid="72m69ui">
                        2021年
                    </option>
                    <option value="2020" data-oid="2emkfzq">
                        2020年
                    </option>
                </select>
                <div className="flex-grow" data-oid="z421q:p">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="jyqrooc"
                    />
                </div>
            </div>

            <div className="overflow-x-auto" data-oid="p7b_bti">
                <table className="min-w-full bg-white" data-oid="ttlnhq4">
                    <thead className="bg-gray-100" data-oid="5r8uowl">
                        <tr data-oid="elkml7g">
                            <th className="py-3 px-4 text-left" data-oid="_:ueh33">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="y2fbv5a">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="vpo8-bc">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="0abwa4v">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="anko4yn">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="mgaamf.">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="-5nq-t0">
                        {filteredScoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="0mbc:7m">
                                <td className="py-3 px-4" data-oid="q2io621">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="egk7xjx">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="wdbxuj7">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="9kz18oj">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="ia8dbd7"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="d0y7:9o">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid="k.bnila"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/admission-plans"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="xc9kac3"
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
