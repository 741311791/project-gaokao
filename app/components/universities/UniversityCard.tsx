import Link from 'next/link';

type UniversityCardProps = {
    id: number;
    name: string;
    location: string;
    type: string;
    tags: string[];
};

export default function UniversityCard({ id, name, location, type, tags }: UniversityCardProps) {
    return (
        <div className="border p-4 rounded-lg hover:shadow-md transition" data-oid="rw.erb:">
            <h4 className="text-lg font-medium text-blue-800" data-oid="1rlv:yr">
                {name}
            </h4>
            <div className="flex justify-between text-sm text-gray-600 my-2" data-oid="2xqqtf3">
                <span data-oid="b95x6se">{location}</span>
                <span data-oid="u39cspw">{type}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3" data-oid="q9zkr4y">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        data-oid="9l24lel"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-between" data-oid="u04nh-n">
                <Link
                    href={`/university/${id}`}
                    className="text-blue-600 hover:underline text-sm"
                    data-oid="::7s_f8"
                >
                    查看详情
                </Link>
                <Link
                    href={`/university/${id}?tab=scoreLines`}
                    className="text-blue-600 hover:underline text-sm"
                    data-oid="20o91ru"
                >
                    查看分数线
                </Link>
            </div>
        </div>
    );
}
