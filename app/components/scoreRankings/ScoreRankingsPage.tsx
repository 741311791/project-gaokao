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
        <div data-oid="nb66exg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="ukg:417">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="uit:g_c">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="wc35e4z"
                >
                    <option value="all" data-oid="wjk:-v.">
                        全部年份
                    </option>
                    <option value="2022" data-oid="a6a8w._">
                        2022年
                    </option>
                    <option value="2021" data-oid="7li-0vx">
                        2021年
                    </option>
                    <option value="2020" data-oid="ui1:pu5">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="s3_.k2i">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="r.o3mr-"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid="w1tc1o."
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="46ik6p3"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="a0jm7i3">
                <table className="min-w-full bg-white" data-oid="7a2nf_f">
                    <thead className="bg-gray-100" data-oid="hq5dy9t">
                        <tr data-oid="8tttjsp">
                            <th className="py-3 px-4 text-left" data-oid="u5.fr9u">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="dund0:z">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="_xtx_ir">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="5nf_4:6">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid=":j4mkwe">
                        {filteredScoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="a09xlas">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="0b825xk"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid="bdvsf2t">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid="4n0zqde">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid="l:c0pk5">
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="t:lv:0q"
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
