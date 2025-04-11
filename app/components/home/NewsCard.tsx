import Link from 'next/link';

type NewsCardProps = {
    id: number;
    title: string;
    date: string;
    category: string;
};

export default function NewsCard({ id, title, date, category }: NewsCardProps) {
    return (
        <div className="border p-4 rounded-md hover:shadow-md transition" data-oid="t_2uhh1">
            <div className="flex justify-between" data-oid="krg-h.l">
                <span
                    className="text-sm text-white bg-blue-500 px-2 py-0.5 rounded-full"
                    data-oid="verb.4y"
                >
                    {category}
                </span>
                <span className="text-sm text-gray-500" data-oid="9mqvyoz">
                    {date}
                </span>
            </div>
            <h3 className="text-lg font-medium mt-2 mb-1" data-oid="6qdmnih">
                {title}
            </h3>
            <Link
                href={`/news/${id}`}
                className="text-blue-600 text-sm hover:underline"
                data-oid="q.oeldr"
            >
                阅读详情
            </Link>
        </div>
    );
}
