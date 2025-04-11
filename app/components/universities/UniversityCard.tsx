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
        <div className="border p-4 rounded-lg hover:shadow-md transition" data-oid="e_gp90m">
            <h4 className="text-lg font-medium text-blue-800" data-oid="4.969ei">
                {name}
            </h4>
            <div className="flex justify-between text-sm text-gray-600 my-2" data-oid="lbyi_me">
                <span data-oid="07vulxw">{location}</span>
                <span data-oid="qlhwz5_">{type}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3" data-oid="v2nve28">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        data-oid="132:kdw"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-between" data-oid="udaci38">
                <Link
                    href={`/university/${id}`}
                    className="text-blue-600 hover:underline text-sm"
                    data-oid="xbcdxdr"
                >
                    查看详情
                </Link>
                <Link
                    href={`/university/${id}?tab=scoreLines`}
                    className="text-blue-600 hover:underline text-sm"
                    data-oid="9bolkw."
                >
                    查看分数线
                </Link>
            </div>
        </div>
    );
}
