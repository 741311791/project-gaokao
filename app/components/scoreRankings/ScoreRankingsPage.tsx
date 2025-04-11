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
        <div data-oid="q.l-fly">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="710c.vm">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid=".gzpgxz">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="_26do_r"
                >
                    <option value="all" data-oid="xh-u1ge">
                        全部年份
                    </option>
                    <option value="2022" data-oid="7m.p3uw">
                        2022年
                    </option>
                    <option value="2021" data-oid="boycd:l">
                        2021年
                    </option>
                    <option value="2020" data-oid="d.44c5e">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="h2texw8">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="w6xnheq"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid="l28y-hm"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="0-mfxmt"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid=".1ppjcj">
                <table className="min-w-full bg-white" data-oid="gnad2lt">
                    <thead className="bg-gray-100" data-oid="zvt0h2q">
                        <tr data-oid="1fn.i-u">
                            <th className="py-3 px-4 text-left" data-oid=":h0getw">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="vu7ce4:">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="2kuggk3">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="dkwwvyv">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="hh.cn_9">
                        {filteredScoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="h51-0zd">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="sd4syt:"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid="8sboq.1">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid=":8f:cpp">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid=".07dg4.">
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="1.zgr:v"
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
