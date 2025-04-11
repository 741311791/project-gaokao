import NewsCard from './NewsCard';
import { latestNews } from '../../data/mockData';

export default function LatestNews() {
    return (
        <section data-oid="s947r5u">
            <div className="flex justify-between items-center mb-4" data-oid="j64i01b">
                <h2 className="text-xl font-bold text-gray-800" data-oid="-jpth2m">
                    河北考试院最新资讯
                </h2>
                <a href="#" className="text-blue-600 hover:underline" data-oid="hotsw72">
                    查看全部
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="1e-q4jc">
                {latestNews.map((news) => (
                    <NewsCard
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        date={news.date}
                        category={news.category}
                        data-oid="9c4p2.7"
                    />
                ))}
            </div>
        </section>
    );
}
