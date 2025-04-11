'use client';

import { useState } from 'react';
import Link from 'next/link';
import { admissionPlans } from '../../data/mockData';

export default function AdmissionPlansPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [yearFilter, setYearFilter] = useState('all');

    const filteredAdmissionPlans = admissionPlans.filter(
        (plan) =>
            (yearFilter === 'all' || plan.year.toString() === yearFilter) &&
            (plan.university.includes(searchQuery) || plan.major.includes(searchQuery)),
    );

    return (
        <div data-oid="pe6y0y-">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="luj_s5h">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="--qgfjc">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="9:apjvu"
                >
                    <option value="all" data-oid="7a5ohhc">
                        全部年份
                    </option>
                    <option value="2022" data-oid="-i208p0">
                        2022年
                    </option>
                    <option value="2021" data-oid="wpv5bvm">
                        2021年
                    </option>
                    <option value="2020" data-oid="dntofly">
                        2020年
                    </option>
                </select>
                <div className="flex-grow" data-oid="awj3hr6">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="6s3skr-"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="dizz4fu"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="3g7gybi">
                <table className="min-w-full bg-white" data-oid=".qbtj5o">
                    <thead className="bg-gray-100" data-oid="fbdw57n">
                        <tr data-oid="_:vhnwr">
                            <th className="py-3 px-4 text-left" data-oid="vf8o-7g">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="q.l52fy">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="i_vlw0l">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="99vl1sh">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid=":bws_ap">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="6-u3yn9">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="bm0gd0_">
                        {filteredAdmissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="m5y1v.z">
                                <td className="py-3 px-4" data-oid="g1u_.8s">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="j7rs6vq">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid="neb9lv8">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="4gd4mbu">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="uhz6-v:">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid="589ldkm">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid="21s.v3y"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="2un5iea"
                                    >
                                        查看分数线
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
