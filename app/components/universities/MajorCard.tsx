import Link from 'next/link';

type MajorCardProps = {
    id: number;
    name: string;
    category: string;
    tags: string[];
};

export default function MajorCard({ id, name, category, tags }: MajorCardProps) {
    return (
        <div className="border p-4 rounded-lg hover:shadow-md transition" data-oid="x7la:r8">
            <h4 className="text-lg font-medium text-green-800" data-oid="g6bazlb">
                {name}
            </h4>
            <div className="text-sm text-gray-600 my-2" data-oid="lza_l6:">
                <span data-oid="a-x408m">学科门类：{category}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3" data-oid="sjvh_.x">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                        data-oid="z4l.5so"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-between" data-oid="kt8k55k">
                <Link
                    href={`/major/${id}`}
                    className="text-green-600 hover:underline text-sm"
                    data-oid="ual1c6l"
                >
                    查看详情
                </Link>

                <Link
                    href={`/major/${id}?tab=universities`}
                    className="text-green-600 hover:underline text-sm"
                    data-oid="u7gaofr"
                >
                    查看开设院校及录取分数线
                </Link>
            </div>
        </div>
    );
}
