import NewsCard from './NewsCard';
import { latestNews } from '../../data/mockData';

export default function LatestNews() {
    return (
        <section data-oid="o_vibau">
            <div className="flex justify-between items-center mb-4" data-oid="ik2v1i2">
                <h2 className="text-xl font-bold text-gray-800" data-oid="j:j9.wl">
                    河北考试院最新资讯
                </h2>
                <a href="#" className="text-blue-600 hover:underline" data-oid="k-yskg.">
                    查看全部
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-oid="fk0.xt.">
                {latestNews.map((news) => (
                    <NewsCard
                        key={news.id}
                        id={news.id}
                        title={news.title}
                        date={news.date}
                        category={news.category}
                        data-oid="h77_atl"
                    />
                ))}
            </div>
        </section>
    );
}
