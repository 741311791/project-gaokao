'use client';

import { useState } from 'react';
import UniversityCard from './UniversityCard';
import MajorCard from './MajorCard';
import { universities, majors } from '../../data/mockData';

export default function UniversitiesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all');

    const filteredUniversities = universities.filter(
        (uni) => uni.name.includes(searchQuery) || uni.location.includes(searchQuery),
    );

    const filteredMajors = majors.filter(
        (major) => major.name.includes(searchQuery) || major.category.includes(searchQuery),
    );

    return (
        <div data-oid="9gal:r1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6" data-oid="fvyupzz">
                高校信息查询
            </h2>

            <div className="mb-6 flex flex-col md:flex-row gap-4" data-oid="2_8i1z-">
                <div className="flex-grow" data-oid="6kjd9h7">
                    <input
                        type="text"
                        placeholder="搜索高校或专业名称"
                        className="w-full px-4 py-2 border rounded-md"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-oid="8gm_n4y"
                    />
                </div>
                <div className="flex gap-2" data-oid="33rxqya">
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('all')}
                        data-oid="p:i8hqz"
                    >
                        全部
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'universities' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('universities')}
                        data-oid="gvh:vpg"
                    >
                        高校
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md ${filterType === 'majors' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        onClick={() => setFilterType('majors')}
                        data-oid="s6cxizv"
                    >
                        专业
                    </button>
                </div>
            </div>

            {(filterType === 'all' || filterType === 'universities') && (
                <div className="mb-8" data-oid="d.37was">
                    <h3 className="text-xl font-semibold mb-4" data-oid="wwu-098">
                        高校列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="s6n7-8a"
                    >
                        {filteredUniversities.map((uni) => (
                            <UniversityCard
                                key={uni.id}
                                id={uni.id}
                                name={uni.name}
                                location={uni.location}
                                type={uni.type}
                                tags={uni.tags}
                                data-oid="tok9xc-"
                            />
                        ))}
                    </div>
                </div>
            )}

            {(filterType === 'all' || filterType === 'majors') && (
                <div data-oid="ieeocew">
                    <h3 className="text-xl font-semibold mb-4" data-oid="l:n67go">
                        专业列表
                    </h3>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                        data-oid="t_bydt3"
                    >
                        {filteredMajors.map((major) => (
                            <MajorCard
                                key={major.id}
                                id={major.id}
                                name={major.name}
                                category={major.category}
                                tags={major.tags}
                                data-oid="9jqpif-"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
