// 模拟数据文件

// 最新新闻数据
export const latestNews = [
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

// 大学数据
export const universities = [
    { id: 1, name: '清华大学', location: '北京', type: '985/211', tags: ['综合', '研究型'] },
    { id: 2, name: '河北大学', location: '河北保定', type: '省属重点', tags: ['综合'] },
    { id: 3, name: '河北工业大学', location: '天津', type: '211', tags: ['工科', '研究型'] },
];

// 专业数据
export const majors = [
    { id: 1, name: '计算机科学与技术', category: '工学', tags: ['热门', '高薪'] },
    { id: 2, name: '软件工程', category: '工学', tags: ['热门', '高薪'] },
    { id: 3, name: '临床医学', category: '医学', tags: ['难度高', '就业稳定'] },
];

// 分数线数据
export const scoreLines = [
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

// 分数排名数据
export const scoreRankings = [
    { score: 700, rank: 100, year: 2022 },
    { score: 650, rank: 5000, year: 2022 },
    { score: 600, rank: 20000, year: 2022 },
    { score: 550, rank: 50000, year: 2022 },
];

// 招生计划数据
export const admissionPlans = [
    { university: '清华大学', major: '计算机科学与技术', year: 2022, plan: 15, actual: 15 },
    { university: '河北大学', major: '软件工程', year: 2022, plan: 120, actual: 120 },
    { university: '河北工业大学', major: '电气工程', year: 2022, plan: 90, actual: 90 },
]; 