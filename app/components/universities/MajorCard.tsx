import Link from 'next/link';

type MajorCardProps = {
    id: number;
    name: string;
    category: string;
    tags: string[];
};

export default function MajorCard({ id, name, category, tags }: MajorCardProps) {
    return (
        <div className="border p-4 rounded-lg hover:shadow-md transition" data-oid="s6nxzwd">
            <h4 className="text-lg font-medium text-green-800" data-oid="qgd.8yz">
                {name}
            </h4>
            <div className="text-sm text-gray-600 my-2" data-oid="-g4.lh.">
                <span data-oid="wa7fjy.">学科门类：{category}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3" data-oid="20-dfui">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        data-oid="5ma52pq"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-between" data-oid="dtj9k07">
                <Link
                    href={`/major/${id}`}
                    className="text-green-600 hover:underline text-sm"
                    data-oid=":3bql34"
                >
                    查看详情
                </Link>

                <Link
                    href={`/major/${id}?tab=universities`}
                    className="text-green-600 hover:underline text-sm"
                    data-oid="xbcdxdr"
                >
                    查看开设院校及录取分数线
                </Link>
            </div>
        </div>
    );
}
