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
        <div data-oid="_8e0smk">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="3yc_vji">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="jpqwapy">
                <div className="flex-grow" data-oid="7v3vf4e">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="obo.fl1"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="azau:eh"
                >
                    <option value="all" data-oid="lv4ql1e">
                        全部年份
                    </option>
                    <option value="2022" data-oid="_kxjt.8">
                        2022年
                    </option>
                    <option value="2021" data-oid="1c9oc15">
                        2021年
                    </option>
                    <option value="2020" data-oid="fp6ppl1">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="zq34xt5">
                <table className="min-w-full bg-white" data-oid="h7ls-5o">
                    <thead className="bg-gray-100" data-oid="y9fyom1">
                        <tr data-oid=".h6:1q_">
                            <th className="py-3 px-4 text-left" data-oid="8wvnaya">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="vzz7eh1">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="mm0j7u3">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="af6-9iu">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="i.y6.jk">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="990ymv7">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="vg2rhch">
                        {filteredAdmissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="68zm-yn">
                                <td className="py-3 px-4" data-oid="o8x_7al">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="61-ek7:">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid="nh5l_27">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="nn8q77p">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="tnm5zcw">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid="b.06paf">
                                    <Link
                                        href="/universities"
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        data-oid=":ecv.0p"
                                    >
                                        查看院校
                                    </Link>
                                    <Link
                                        href="/score-lines"
                                        className="text-blue-600 hover:underline text-sm"
                                        data-oid="l3osvxj"
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
