import Link from 'next/link';

type NewsCardProps = {
    id: number;
    title: string;
    date: string;
    category: string;
};

export default function NewsCard({ id, title, date, category }: NewsCardProps) {
    return (
        <div className="border p-4 rounded-md hover:shadow-md transition" data-oid="nytk6p3">
            <div className="flex justify-between" data-oid="ck8e97o">
                <span
                    className="text-sm text-white bg-blue-500 px-2 py-0.5 rounded-full"
                    data-oid="h685s7c"
                >
                    {category}
                </span>
                <span className="text-sm text-gray-500" data-oid="s-295g6">
                    {date}
                </span>
            </div>
            <h3 className="text-lg font-medium mt-2 mb-1" data-oid=":gdj2:c">
                {title}
            </h3>
            <Link
                href={`/news/${id}`}
                className="text-blue-600 text-sm hover:underline"
                data-oid="4t8kew9"
            >
                阅读详情
            </Link>
        </div>
    );
}
