'use client';

import { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { universities } from '../data/mockData';

type VolunteerChoice = {
    id: number;
    universityId: number | null;
    majorId: number | null;
};

export default function SimulationPage() {
    const [score, setScore] = useState<string>('');
    const [rank, setRank] = useState<string>('');
    const [category, setCategory] = useState<string>('理科');
    const [step, setStep] = useState<number>(1);
    const [volunteerChoices, setVolunteerChoices] = useState<VolunteerChoice[]>(
        Array(6).fill(null).map((_, index) => ({ 
            id: index + 1, 
            universityId: null, 
            majorId: null 
        }))
    );
    const [selectedUniversities, setSelectedUniversities] = useState<any[]>([]);
    const [simulationResult, setSimulationResult] = useState<any>(null);

    const handleScoreSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 简单验证
        if (!score || !rank || !category) {
            alert('请填写所有信息');
            return;
        }
        
        // 模拟根据分数和排名筛选适合的大学
        const filteredUniversities = universities.filter(uni => {
            // 这里只是示例逻辑，实际应用中需要更复杂的匹配算法
            const scoreLines = uni.scoreLines || [];
            return scoreLines.some(line => line.score <= parseInt(score));
        });
        
        setSelectedUniversities(filteredUniversities);
        setStep(2);
    };

    const handleUniversitySelection = (volunteerIndex: number, universityId: number) => {
        const newChoices = [...volunteerChoices];
        newChoices[volunteerIndex] = { 
            ...newChoices[volunteerIndex], 
            universityId
        };
        setVolunteerChoices(newChoices);
    };

    const handleMajorSelection = (volunteerIndex: number, majorId: number) => {
        const newChoices = [...volunteerChoices];
        newChoices[volunteerIndex] = { 
            ...newChoices[volunteerIndex], 
            majorId
        };
        setVolunteerChoices(newChoices);
    };

    const handleSimulation = () => {
        // 检查是否至少填写了一个志愿
        const hasAtLeastOneChoice = volunteerChoices.some(choice => 
            choice.universityId !== null && choice.majorId !== null
        );

        if (!hasAtLeastOneChoice) {
            alert('请至少填写一个完整的志愿');
            return;
        }

        // 模拟计算录取结果
        // 这里仅为示例，实际逻辑会更复杂
        const result = {
            admitted: true,
            universityId: volunteerChoices[0].universityId,
            majorId: volunteerChoices[0].majorId,
            university: universities.find(uni => uni.id === volunteerChoices[0].universityId)?.name,
            major: universities
                .find(uni => uni.id === volunteerChoices[0].universityId)?.majors
                .find(major => major.id === volunteerChoices[0].majorId)?.name,
        };

        setSimulationResult(result);
        setStep(3);
    };

    return (
        <MainLayout>
            <div className="bg-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-3xl font-bold">模拟志愿填报</h1>
                    <p className="mt-2 text-blue-100">
                        根据您的高考成绩和排名，模拟填报志愿并预测录取结果
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto my-8 px-4">
                {/* 步骤指示器 */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}>
                                1
                            </div>
                            <span className="mt-2 text-sm">输入成绩</span>
                        </div>
                        <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}>
                                2
                            </div>
                            <span className="mt-2 text-sm">填报志愿</span>
                        </div>
                        <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}>
                                3
                            </div>
                            <span className="mt-2 text-sm">模拟结果</span>
                        </div>
                    </div>
                </div>

                {/* 步骤1：输入成绩 */}
                {step === 1 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">填写个人成绩信息</h2>
                        <form onSubmit={handleScoreSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    高考成绩
                                </label>
                                <input
                                    type="number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="请输入高考分数"
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    全省排名
                                </label>
                                <input
                                    type="number"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="请输入全省排名"
                                    value={rank}
                                    onChange={(e) => setRank(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    选择科类
                                </label>
                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="理科">理科</option>
                                        <option value="文科">文科</option>
                                        <option value="综合">综合</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    下一步
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* 步骤2：填报志愿 */}
                {step === 2 && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">填报志愿</h2>
                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">
                                您的高考成绩为 <span className="text-blue-600 font-semibold">{score}分</span>，
                                全省排名为 <span className="text-blue-600 font-semibold">{rank}名</span>，
                                以下是为您推荐的符合条件的大学。
                            </p>
                            <div className="bg-blue-50 rounded p-4 text-sm">
                                <p className="text-blue-800">
                                    <span className="font-bold">提示：</span> 
                                    请根据您的兴趣和偏好，选择6个志愿进行填报。建议合理搭配冲、稳、保三种类型的大学。
                                </p>
                            </div>
                        </div>

                        {/* 志愿表单 */}
                        <div className="space-y-6">
                            {volunteerChoices.map((choice, index) => (
                                <div key={index} className="p-4 border rounded-lg">
                                    <h3 className="font-medium mb-3">第{index + 1}志愿</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                选择院校
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                                                    value={choice.universityId || ""}
                                                    onChange={(e) => handleUniversitySelection(index, parseInt(e.target.value))}
                                                >
                                                    <option value="">请选择</option>
                                                    {selectedUniversities.map(uni => (
                                                        <option key={uni.id} value={uni.id}>
                                                            {uni.name} ({uni.scoreLines?.[0]?.score}分)
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                                选择专业
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                                                    value={choice.majorId || ""}
                                                    onChange={(e) => handleMajorSelection(index, parseInt(e.target.value))}
                                                    disabled={!choice.universityId}
                                                >
                                                    <option value="">请选择</option>
                                                    {choice.universityId && universities
                                                        .find(uni => uni.id === choice.universityId)?.majors
                                                        .map(major => (
                                                            <option key={major.id} value={major.id}>
                                                                {major.name}
                                                            </option>
                                                        ))}
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={() => setStep(1)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                返回
                            </button>
                            <button
                                onClick={handleSimulation}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                开始模拟
                            </button>
                        </div>
                    </div>
                )}

                {/* 步骤3：模拟结果 */}
                {step === 3 && simulationResult && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">模拟录取结果</h2>
                        
                        {simulationResult.admitted ? (
                            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                                <div className="flex items-center mb-4">
                                    <svg className="h-12 w-12 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-bold text-green-700">恭喜您被录取！</h3>
                                        <p className="text-green-600">根据模拟预测，您有很大可能被以下院校和专业录取</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg p-4 border border-green-100">
                                    <p className="text-lg font-semibold text-gray-800">
                                        {simulationResult.university} - {simulationResult.major}
                                    </p>
                                    <p className="text-gray-600 mt-2">
                                        预估录取概率：<span className="font-semibold text-green-600">85%</span>
                                    </p>
                                </div>
                                
                                <div className="mt-6 text-sm text-gray-600">
                                    <p>* 本结果仅供参考，实际录取结果以各高校公布为准。</p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                                <div className="flex items-center mb-4">
                                    <svg className="h-12 w-12 text-red-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-700">可能无法被录取</h3>
                                        <p className="text-red-600">根据模拟预测，您填报的志愿可能存在风险</p>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg p-4 border border-red-100">
                                    <p className="text-gray-700">
                                        建议调整您的志愿选择，考虑以下几点：
                                    </p>
                                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                                        <li>适当降低第一志愿的院校目标</li>
                                        <li>增加"保底"院校作为后续志愿</li>
                                        <li>选择竞争相对较小的专业</li>
                                    </ul>
                                </div>
                                
                                <div className="mt-6 text-sm text-gray-600">
                                    <p>* 本结果仅供参考，实际录取结果以各高校公布为准。</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="mt-4">
                            <h3 className="font-medium text-lg mb-3">填报志愿分析</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-gray-700 font-medium">总体评价：</p>
                                        <div className="flex items-center mt-1">
                                            <div className="h-2 w-full bg-gray-200 rounded-full">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '80%' }}></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">80分</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 font-medium">梯度合理性：</p>
                                        <div className="flex items-center mt-1">
                                            <div className="h-2 w-full bg-gray-200 rounded-full">
                                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">70分</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={() => setStep(2)}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                修改志愿
                            </button>
                            <button
                                onClick={() => {
                                    setStep(1);
                                    setScore('');
                                    setRank('');
                                    setVolunteerChoices(Array(6).fill(null).map((_, index) => ({ 
                                        id: index + 1, 
                                        universityId: null, 
                                        majorId: null 
                                    })));
                                    setSimulationResult(null);
                                }}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                重新填报
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
} 