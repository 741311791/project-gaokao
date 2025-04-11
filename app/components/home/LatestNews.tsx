import NewsCard from './NewsCard';
import { latestNews } from '../../data/mockData';

export default function LatestNews() {
    return (
        <section data-oid="3te0wnj">
            <div className="flex justify-between items-center mb-4" data-oid="jc6sqj7">
                <h2 className="text-xl font-bold text-gray-800" data-oid="uhxmt6.">
                    河北考试院最新资讯
                </h2>
                <a href="#" className="text-blue-600 hover:underline" data-oid="ekr6ia0">
                    查看全部
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="nrmrcx7">
                {latestNews.map((news) => (
                    <NewsCard
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        date={news.date}
                        category={news.category}
                        data-oid="3pe-4y7"
                    />
                ))}
            </div>
        </section>
    );
}
