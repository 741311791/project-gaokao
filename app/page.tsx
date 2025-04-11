'use client';

import { useState } from 'react';

export default function Page() {
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [yearFilter, setYearFilter] = useState('all');
    const [scoreFilter, setScoreFilter] = useState('');
    const [rankFilter, setRankFilter] = useState('');

    // Mock data for demonstration
    const latestNews = [
        { id: 1, title: '2023年河北省高考志愿填报指南', date: '2023-06-20', category: '政策解读' },
        {
            id: 2,
            title: '河北省2023年本科批次录取分数线公布',
            date: '2023-06-25',
            category: '分数线',
        },
        { id: 3, title: '如何科学填报志愿：专家建议', date: '2023-06-22', category: '志愿指导' },
        { id: 4, title: '2023年河北省高校招生计划一览', date: '2023-05-15', category: '招生计划' },
    ];

    const universities = [
        { id: 1, name: '清华大学', location: '北京', type: '985/211', tags: ['综合', '研究型'] },
        { id: 2, name: '河北大学', location: '河北保定', type: '省属重点', tags: ['综合'] },
        { id: 3, name: '河北工业大学', location: '天津', type: '211', tags: ['工科', '研究型'] },
    ];

    const majors = [
        { id: 1, name: '计算机科学与技术', category: '工学', tags: ['热门', '高薪'] },
        { id: 2, name: '软件工程', category: '工学', tags: ['热门', '高薪'] },
        { id: 3, name: '临床医学', category: '医学', tags: ['难度高', '就业稳定'] },
    ];

    const scoreLines = [
        {
            university: '清华大学',
            major: '计算机科学与技术',
            year: 2022,
            score: 680,
            batch: '本科提前批',
        },
        { university: '河北大学', major: '软件工程', year: 2022, score: 590, batch: '本科一批' },
        {
            university: '河北工业大学',
            major: '电气工程',
            year: 2022,
            score: 610,
            batch: '本科一批',
        },
    ];

    const scoreRankings = [
        { score: 700, rank: 100, year: 2022 },
        { score: 650, rank: 5000, year: 2022 },
        { score: 600, rank: 20000, year: 2022 },
        { score: 550, rank: 50000, year: 2022 },
    ];

    const admissionPlans = [
        { university: '清华大学', major: '计算机科学与技术', year: 2022, plan: 15, actual: 15 },
        { university: '河北大学', major: '软件工程', year: 2022, plan: 120, actual: 120 },
        { university: '河北工业大学', major: '电气工程', year: 2022, plan: 90, actual: 90 },
    ];

    const renderHome = () => (
        <div className="space-y-8" data-oid="p.ic3lk">
            <section className="bg-blue-50 p-8 rounded-lg" data-oid="y3lb1ul">
                <h2 className="text-2xl font-bold text-blue-800 mb-4" data-oid="umqi96j">
                    河北高考志愿填报服务平台
                </h2>
                <p className="text-gray-700 mb-6" data-oid="blzf:rx">
                    为河北考生提供全面的高考志愿填报服务，包括政策解读、院校专业查询、分数线查询、一分一档查询和招生计划查询等。
                </p>
                <div className="flex space-x-4" data-oid="lb:1b94">
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={() => setActiveTab('universities')}
                        data-oid="kli::.o"
                    >
                        开始查询
                    </button>
                    <button
                        className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
                        data-oid="98by6mv"
                    >
                        联系咨询师
                    </button>
                </div>
            </section>

            <section data-oid="q6_u05n">
                <div className="flex justify-between items-center mb-4" data-oid="cv2as6_">
                    <h2 className="text-xl font-bold text-gray-800" data-oid="t.n_.n3">
                        河北考试院最新资讯
                    </h2>
                    <a href="#" className="text-blue-600 hover:underline" data-oid="97wzhvb">
                        查看全部
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="xkto2ti">
                    {latestNews.map((news) => (
                        <div
                            key={news.id}
                            className="border p-4 rounded-md hover:shadow-md transition"
                            data-oid="gtwayrf"
                        >
                            <div className="flex justify-between" data-oid="w:-b1d1">
                                <span
                                    className="text-sm text-white bg-blue-500 px-2 py-0.5 rounded-full"
                                    data-oid="i5grr.g"
                                >
                                    {news.category}
                                </span>
                                <span className="text-sm text-gray-500" data-oid="a65o0go">
                                    {news.date}
                                </span>
                            </div>
                            <h3 className="text-lg font-medium mt-2 mb-1" data-oid="aw._dnl">
                                {news.title}
                            </h3>
                            <a
                                href="#"
                                className="text-blue-600 text-sm hover:underline"
                                data-oid="nyktvfw"
                            >
                                阅读详情
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="7e4-427">
                <div className="bg-green-50 p-6 rounded-lg" data-oid="e0.34mo">
                    <h3 className="text-lg font-bold text-green-800 mb-3" data-oid=":0pq50s">
                        院校专业解读
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="sez0ye.">
                        深度解析各高校特色和热门专业，助您做出明智选择。
                    </p>
                    <button
                        className="text-green-600 hover:underline"
                        onClick={() => setActiveTab('universities')}
                        data-oid="rgilqjm"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg" data-oid="pbc9jqu">
                    <h3 className="text-lg font-bold text-purple-800 mb-3" data-oid="1-yl7i3">
                        历年分数线查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="vud8ykv">
                        查询各高校在河北的历年录取分数线，精准定位目标院校。
                    </p>
                    <button
                        className="text-purple-600 hover:underline"
                        onClick={() => setActiveTab('scoreLines')}
                        data-oid=".lo8dcn"
                    >
                        查看详情 →
                    </button>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg" data-oid=".70-nb8">
                    <h3 className="text-lg font-bold text-orange-800 mb-3" data-oid="zek0wbj">
                        一分一档查询
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="p.0y8.u">
                        根据分数查询历年排名，科学评估录取可能性。
                    </p>
                    <button
                        className="text-orange-600 hover:underline"
                        onClick={() => setActiveTab('scoreRankings')}
                        data-oid="f8y1iqc"
                    >
                        查看详情 →
                    </button>
                </div>
            </section>
        </div>
    );

    const renderUniversities = () => (
        <div data-oid="g8uoyvs">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="iblmv..">
                高校信息查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="avtsgnc">
                <div className="flex-grow" data-oid="4u0nzpf">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="p93qjvo"
                    />
                </div>
                <div className="flex gap-2" data-oid="yuj8zb1">
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('all')}
                        data-oid="q9f_u92"
                    >
                        全部
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'universities' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('universities')}
                        data-oid="pfzaua7"
                    >
                        高校
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'majors' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('majors')}
                        data-oid="6:hkkgi"
                    >
                        专业
                    </button>
                </div>
            </div>

            {(filterType === 'all' || filterType === 'universities') && (
                <div className="mb-8" data-oid="rq:p_lm">
                    <h3 className="text-xl font-semibold mb-4" data-oid="juko:--">
                        高校列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="u5sur_v"
                    >
                        {universities.map((uni) => (
                            <div
                                key={uni.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid="qvernj_"
                            >
                                <h4
                                    className="text-lg font-medium text-blue-800"
                                    data-oid="37uic2n"
                                >
                                    {uni.name}
                                </h4>
                                <div
                                    className="flex justify-between text-sm text-gray-600 my-2"
                                    data-oid="i9blr2q"
                                >
                                    <span data-oid="8p0qn5j">{uni.location}</span>
                                    <span data-oid="uw9_kz2">{uni.type}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="_804bh9">
                                    {uni.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="evqqq.x"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-between" data-oid="2cpnqo6">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="g13-5ob"
                                    >
                                        查看分数线
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid="a-9bs.t"
                                    >
                                        查看招生计划
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(filterType === 'all' || filterType === 'majors') && (
                <div data-oid="ycm_obn">
                    <h3 className="text-xl font-semibold mb-4" data-oid="vrbsm:8">
                        专业列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="9cg71h-"
                    >
                        {majors.map((major) => (
                            <div
                                key={major.id}
                                className="border p-4 rounded-lg hover:shadow-md transition"
                                data-oid="6m9moka"
                            >
                                <h4
                                    className="text-lg font-medium text-green-800"
                                    data-oid="6yw5gss"
                                >
                                    {major.name}
                                </h4>
                                <div className="text-sm text-gray-600 my-2" data-oid="d7zt1y-">
                                    <span data-oid="n0wpwfz">学科门类：{major.category}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3" data-oid="ingd7ec">
                                    {major.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                                            data-oid="i2cjke8"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4" data-oid="rvl6tcr">
                                    <button
                                        className="text-green-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="tut_k.3"
                                    >
                                        查看开设院校及分数线
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    const renderScoreLines = () => (
        <div data-oid="g6uq440">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="as_x-k8">
                历年分数线查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid=":4fmspx">
                <div className="flex-grow" data-oid="hms:w2q">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="0mq7pr5"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid=".yiff5_"
                >
                    <option value="all" data-oid="svlvwic">
                        全部年份
                    </option>
                    <option value="2022" data-oid="lg74cqx">
                        2022年
                    </option>
                    <option value="2021" data-oid="nh:sfo6">
                        2021年
                    </option>
                    <option value="2020" data-oid="fj:t_w0">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="2ts48p1">
                <table className="min-w-full bg-white" data-oid="zn176iy">
                    <thead className="bg-gray-100" data-oid="kwtt205">
                        <tr data-oid="gfm-kj4">
                            <th className="py-3 px-4 text-left" data-oid="pn_p9is">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="w82.oha">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="xphlb.2">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="2exdnb7">
                                批次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="h_mowoi">
                                分数线
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="shjk2rp">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="trsos3q">
                        {scoreLines.map((line, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="65mhm8c">
                                <td className="py-3 px-4" data-oid="bm0rxez">
                                    {line.university}
                                </td>
                                <td className="py-3 px-4" data-oid="zw0_qq4">
                                    {line.major}
                                </td>
                                <td className="py-3 px-4" data-oid="4u47i72">
                                    {line.year}
                                </td>
                                <td className="py-3 px-4" data-oid="mf1-3n2">
                                    {line.batch}
                                </td>
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="0..pbd2"
                                >
                                    {line.score}
                                </td>
                                <td className="py-3 px-4" data-oid="_fln1ln">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="pf:syus"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('admissionPlans')}
                                        data-oid="c6oyg4f"
                                    >
                                        查看招生计划
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderScoreRankings = () => (
        <div data-oid="15scce4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="i43.dsn">
                历年一分一档查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="gtiqki7">
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="ato0qon"
                >
                    <option value="all" data-oid="t2sf_0d">
                        全部年份
                    </option>
                    <option value="2022" data-oid="67f:3il">
                        2022年
                    </option>
                    <option value="2021" data-oid="oyc:h86">
                        2021年
                    </option>
                    <option value="2020" data-oid="x.3-sji">
                        2020年
                    </option>
                </select>
                <div className="flex-grow flex gap-2" data-oid="o9i:t40">
                    <input
                        type="number"
                        placeholder="最低分数"
                        className="w-full px-4 py-2 border rounded-md"
                        value={scoreFilter}
                        onChange={(e) => setScoreFilter(e.target.value)}
                        data-oid="j:si2xr"
                    />

                    <input
                        type="number"
                        placeholder="最高排名"
                        className="w-full px-4 py-2 border rounded-md"
                        value={rankFilter}
                        onChange={(e) => setRankFilter(e.target.value)}
                        data-oid="5.scfss"
                    />
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    data-oid="l4gz:xn"
                >
                    查询
                </button>
            </div>

            <div className="overflow-x-auto" data-oid="altmy7.">
                <table className="min-w-full bg-white" data-oid="yknf_ue">
                    <thead className="bg-gray-100" data-oid="60tmdg_">
                        <tr data-oid="xqx7e3h">
                            <th className="py-3 px-4 text-left" data-oid="s6qur:r">
                                分数
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="54hu3fv">
                                位次
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="d_uwk2s">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="48zlgkq">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid=".zddvll">
                        {scoreRankings.map((ranking, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="ykc1mhp">
                                <td
                                    className="py-3 px-4 font-medium text-blue-600"
                                    data-oid="w50:8y_"
                                >
                                    {ranking.score}
                                </td>
                                <td className="py-3 px-4" data-oid="k2uos82">
                                    {ranking.rank}
                                </td>
                                <td className="py-3 px-4" data-oid="1o6_8cz">
                                    {ranking.year}
                                </td>
                                <td className="py-3 px-4" data-oid="vlsmolo">
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="jnc4py5"
                                    >
                                        查看可报考院校
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderAdmissionPlans = () => (
        <div data-oid="4xva8hx">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="y9cw5.g">
                历年招生计划查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="sw6yxan">
                <div className="flex-grow" data-oid="bkm9c7m">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="p-yn0mj"
                    />
                </div>
                <select
                    className="px-4 py-2 border rounded-md"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    data-oid="oiin6vb"
                >
                    <option value="all" data-oid="9udkutj">
                        全部年份
                    </option>
                    <option value="2022" data-oid="z51_284">
                        2022年
                    </option>
                    <option value="2021" data-oid="_-rdcjc">
                        2021年
                    </option>
                    <option value="2020" data-oid="zi6::a9">
                        2020年
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto" data-oid="j_-s3np">
                <table className="min-w-full bg-white" data-oid="2i03rl:">
                    <thead className="bg-gray-100" data-oid="dp2p.3s">
                        <tr data-oid="jv4ncyo">
                            <th className="py-3 px-4 text-left" data-oid="l0o5m0x">
                                高校名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="5hi9982">
                                专业名称
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="yroqce:">
                                年份
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="h9p4yh_">
                                计划招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="mywyz-d">
                                实际招生
                            </th>
                            <th className="py-3 px-4 text-left" data-oid="_i_985v">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200" data-oid="ko9zmyi">
                        {admissionPlans.map((plan, index) => (
                            <tr key={index} className="hover:bg-gray-50" data-oid="vng:qao">
                                <td className="py-3 px-4" data-oid="ip0:_2v">
                                    {plan.university}
                                </td>
                                <td className="py-3 px-4" data-oid="1d87rn.">
                                    {plan.major}
                                </td>
                                <td className="py-3 px-4" data-oid=".sx6cd9">
                                    {plan.year}
                                </td>
                                <td className="py-3 px-4" data-oid="sqj58x7">
                                    {plan.plan}
                                </td>
                                <td className="py-3 px-4" data-oid="5erlu4_">
                                    {plan.actual}
                                </td>
                                <td className="py-3 px-4" data-oid="pgw0bc4">
                                    <button
                                        className="text-blue-600 hover:underline text-sm mr-3"
                                        onClick={() => setActiveTab('universities')}
                                        data-oid="vyab0yg"
                                    >
                                        查看院校
                                    </button>
                                    <button
                                        className="text-blue-600 hover:underline text-sm"
                                        onClick={() => setActiveTab('scoreLines')}
                                        data-oid="1beo8v7"
                                    >
                                        查看分数线
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50" data-oid="y.1uq2q">
            {/* Header */}
            <header className="bg-white shadow-sm" data-oid="j7_3x_x">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ylzp2kp">
                    <div className="flex justify-between items-center py-4" data-oid="w7thyz3">
                        <div className="flex items-center" data-oid="c0n36ul">
                            <div className="text-2xl font-bold text-blue-700" data-oid="_xu12pl">
                                河北高考志愿填报
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8" data-oid="yz--8l.">
                            <button
                                className={`px-3 py-2 ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('home')}
                                data-oid="efek2xc"
                            >
                                首页
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('universities')}
                                data-oid="7jie5gc"
                            >
                                高校信息查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreLines')}
                                data-oid="_2.9i11"
                            >
                                历年分数线
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('scoreRankings')}
                                data-oid="wx8amoq"
                            >
                                一分一档查询
                            </button>
                            <button
                                className={`px-3 py-2 ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                                onClick={() => setActiveTab('admissionPlans')}
                                data-oid="rss4zfo"
                            >
                                招生计划查询
                            </button>
                        </nav>
                        <div data-oid="cu_c9e5">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                data-oid="j9g:uju"
                            >
                                登录/注册
                            </button>
                        </div>
                    </div>
                    {/* Mobile navigation */}
                    <div
                        className="md:hidden flex overflow-x-auto space-x-4 py-2"
                        data-oid="mxq4l48"
                    >
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('home')}
                            data-oid="auvjaj4"
                        >
                            首页
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'universities' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('universities')}
                            data-oid="uac93ph"
                        >
                            高校信息
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreLines' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreLines')}
                            data-oid="k4qd87a"
                        >
                            分数线
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'scoreRankings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('scoreRankings')}
                            data-oid="jxcsro7"
                        >
                            一分一档
                        </button>
                        <button
                            className={`px-3 py-1 whitespace-nowrap ${activeTab === 'admissionPlans' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            onClick={() => setActiveTab('admissionPlans')}
                            data-oid="avf1f:0"
                        >
                            招生计划
                        </button>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="qpmxlpe">
                {activeTab === 'home' && renderHome()}
                {activeTab === 'universities' && renderUniversities()}
                {activeTab === 'scoreLines' && renderScoreLines()}
                {activeTab === 'scoreRankings' && renderScoreRankings()}
                {activeTab === 'admissionPlans' && renderAdmissionPlans()}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-12" data-oid="wd8n9iy">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-oid="z8dwjkk">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="g5o49em">
                        <div data-oid="6o3-23q">
                            <h3 className="text-lg font-semibold mb-4" data-oid="ghp0a7l">
                                关于我们
                            </h3>
                            <p className="text-gray-600" data-oid="d4xcau6">
                                河北高考志愿填报服务平台致力于为河北考生提供专业、精准的高考志愿填报服务。
                            </p>
                        </div>
                        <div data-oid="efziy_8">
                            <h3 className="text-lg font-semibold mb-4" data-oid="or9833j">
                                快速链接
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="l-lhpzu">
                                <li data-oid="07pov57">
                                    <a href="#" className="hover:text-blue-600" data-oid="qa8qnw1">
                                        高校信息查询
                                    </a>
                                </li>
                                <li data-oid="zxq6b4j">
                                    <a href="#" className="hover:text-blue-600" data-oid="0k-gvux">
                                        历年分数线
                                    </a>
                                </li>
                                <li data-oid="_x_es..">
                                    <a href="#" className="hover:text-blue-600" data-oid="pbjtdsq">
                                        一分一档查询
                                    </a>
                                </li>
                                <li data-oid="58uox3a">
                                    <a href="#" className="hover:text-blue-600" data-oid="5kk.ztt">
                                        招生计划查询
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="u1.vquw">
                            <h3 className="text-lg font-semibold mb-4" data-oid="1iponmp">
                                联系方式
                            </h3>
                            <ul className="space-y-2 text-gray-600" data-oid="dvcdepg">
                                <li data-oid="wg7z:6a">电话：0311-12345678</li>
                                <li data-oid="9:3rau1">邮箱：info@hebeivolunteer.com</li>
                                <li data-oid="y_b8.59">地址：河北省石家庄市桥西区</li>
                            </ul>
                        </div>
                        <div data-oid="jmzs5:6">
                            <h3 className="text-lg font-semibold mb-4" data-oid="8wg0.c5">
                                关注我们
                            </h3>
                            <div className="flex space-x-4" data-oid="kfksnjq">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid="xu4vyyn"
                                >
                                    <span className="sr-only" data-oid="l68gnzx">
                                        微信
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="ww8yzq-"
                                    >
                                        <path
                                            d="M8.4,15.2c-0.4,0-0.8-0.1-1.2-0.2l-2.2,1.2l0.6-1.8C4.6,13.6,4,12.6,4,11.4c0-2.2,1.9-4,4.2-4c2.3,0,4.2,1.8,4.2,4 C12.4,13.4,10.5,15.2,8.4,15.2z M14.4,20.8c-0.5,0-1-0.1-1.5-0.3l-2.8,1.5l0.8-2.3c-1.1-0.8-1.9-2.1-1.9-3.5c0-2.8,2.4-5,5.4-5 c3,0,5.4,2.2,5.4,5C19.8,18.6,17.4,20.8,14.4,20.8z"
                                            data-oid="uunt0v."
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-blue-600"
                                    data-oid="dzaynp9"
                                >
                                    <span className="sr-only" data-oid="0q1f-x5">
                                        微博
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="kyq5mjf"
                                    >
                                        <path
                                            d="M10.8,11.2c-2.5,0-4.5,1.7-4.5,3.8c0,2.1,2,3.8,4.5,3.8c2.5,0,4.5-1.7,4.5-3.8C15.3,12.9,13.3,11.2,10.8,11.2z M12.3,16.5 c-0.5,0.7-1.5,1-2.5,0.6c-1-0.4-1.3-1.2-0.8-1.9c0.5-0.7,1.4-0.9,2.4-0.5C12.4,15,12.8,15.8,12.3,16.5z M10.9,14.6 c-0.2,0.3-0.6,0.4-0.9,0.3c-0.3-0.1-0.4-0.4-0.3-0.7c0.2-0.3,0.6-0.4,0.9-0.3C11,14,11.1,14.3,10.9,14.6z M20,9.9 c-0.4-1.8-1.9-3-3.6-3.2c-0.6-0.1-1,0.3-1.1,0.9c-0.1,0.6,0.3,1,0.9,1.1c1,0.1,1.9,0.8,2.1,1.8c0.1,0.6,0.7,0.9,1.3,0.8 C20.2,11.1,20.5,10.5,20,9.9z M18.9,5.5c-1.9-2.1-4.7-2.9-7.3-2.4c-0.7,0.1-1.2,0.8-1,1.5c0.1,0.7,0.8,1.2,1.5,1 c1.9-0.4,3.9,0.2,5.3,1.7c1.3,1.5,1.7,3.5,1.1,5.3c-0.2,0.7,0.2,1.4,0.9,1.6c0.7,0.2,1.4-0.2,1.6-0.9C21.8,10.3,21.2,7.9,18.9,5.5z"
                                            data-oid="ys-bv:7"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t mt-8 pt-8 text-center text-gray-500"
                        data-oid="9af5w0x"
                    >
                        <p data-oid="p:r:y1t">© 2023 河北高考志愿填报服务平台 版权所有</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
