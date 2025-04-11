'use client';

import { useState } from 'react';
import Link from 'next/link';
import { scoreRankings } from '../../data/mockData';

export default function ScoreRankingsPage() {
    const [yearFilter, setYearFilter] = useState('all');
    const [scoreFilter, setScoreFilter] = useState('');
    const [rankFilter, setRankFilter] = useState('');

    const filteredScoreRankings = scoreRankings.filter((ranking) => {
        if (yearFilter !== 'all' && ranking.year.toString() !== yearFilter) return false;
        if (scoreFilter && ranking.score < parseInt(scoreFilter, 10)) return false;
        if (rankFilter && ranking.rank > parseInt(rankFilter, 10)) return false;
        return true;
    });

    return (
        <div data-oid="3pp_fr1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="8kv:gdb">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="uf5.xd0">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="74lj3vh"
                >
                    <option value="all" data-oid="aaugtps">
                        全部年份
                    </option>
                    <option value="2022" data-oid="5jpd1bp">
                        2022年
                    </option>
                    <option value="2021" data-oid="561q3_q">
                        2021年
                    </option>
                    <option value="2020" data-oid="0aomeuj">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="_unau1_">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="480g:_r"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid="0erj76u"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="wtf384l"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="lkqb163">
                <table className="min-w-full bg-white" data-oid="-bv4xjj">
                    <thead className="bg-gray-100" data-oid="z9y8u3f">
                        <tr data-oid="x1b227x">
                            <th className="py-3 px-4 text-left" data-oid="o29dzj9">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="p5hlp7h">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="pw0gxec">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="yjyfb10">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="7j7w0b8">
                        {filteredScoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="io58o:o">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="42p0822"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid="zuj2tzu">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid="0wzhk5d">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid=".a:trsp">
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="j8.blqs"
                                    >
                                        查看可报考院校
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
