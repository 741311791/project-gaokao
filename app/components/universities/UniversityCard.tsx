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
        <div className="border p-4 rounded-lg hover:shadow-md transition" data-oid="ph89uq9">
            <h4 className="text-lg font-medium text-blue-800" data-oid="t:xko-x">
                {name}
            </h4>
            <div className="flex justify-between text-sm text-gray-600 my-2" data-oid="k0uyybm">
                <span data-oid="5kduan_">{location}</span>
                <span data-oid="067nv3b">{type}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3" data-oid="rscgyw4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        data-oid="wx._zjg"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4 flex justify-between" data-oid="wxafimq">
                <Link
                    href="/score-lines"
                    className="text-blue-600 hover:underline text-sm"
                    data-oid=":k3hz9i"
                >
                    查看分数线
                </Link>
                <Link
                    href="/admission-plans"
                    className="text-blue-600 hover:underline text-sm"
                    data-oid="_b67cn_"
                >
                    查看招生计划
                </Link>
            </div>
        </div>
    );
}
