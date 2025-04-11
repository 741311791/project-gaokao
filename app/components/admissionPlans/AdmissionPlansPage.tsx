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
        <div data-oid="n95eu9j">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="3keobtj">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="p2gslrb">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="taczq-z"
                >
                    <option value="all" data-oid="j.ipll8">
                        全部年份
                    </option>
                    <option value="2022" data-oid="6-5i1ch">
                        2022年
                    </option>
                    <option value="2021" data-oid="qgex:6r">
                        2021年
                    </option>
                    <option value="2020" data-oid="-0mbdxe">
                        2020年
                    </option>
                </select>
                <div className="flex-grow" data-oid="dyx.:y1">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="-n1-x_z"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="90701lb"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid=".e-0sf8">
                <table className="min-w-full bg-white" data-oid="7jlfi4e">
                    <thead className="bg-gray-100" data-oid="95ek:mf">
                        <tr data-oid="j413tv0">
                            <th className="py-3 px-4 text-left" data-oid="7:.vf.m">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="s0kye_:">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="1iz4il3">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="0guzk7m">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="xjcxyf.">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="ojij4.0">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="arpv0zv">
                        {filteredAdmissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="eqphrat">
                                <td className="py-3 px-4" data-oid="b04hyg8">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="8s_o12h">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid="ncqn9gk">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="eoxrezm">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="bdex_0p">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid=".6zub2g">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid="51kh2fq"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="lztptc:"
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
