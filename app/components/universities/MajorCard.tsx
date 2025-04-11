import Link from 'next/link';

type MajorCardProps = {
    id: number;
    name: string;
    category: string;
    tags: string[];
};

export default function MajorCard({ id, name, category, tags }: MajorCardProps) {
    return (
        <div className="border p-4 rounded-lg hover:shadow-md transition">
            <h4 className="text-lg font-medium text-green-800">{name}</h4>
            <div className="text-sm text-gray-600 my-2">
                <span>学科门类：{category}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                    <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="mt-4">
                <Link href="/score-lines" className="text-green-600 hover:underline text-sm">
                    查看开设院校及分数线
                </Link>
            </div>
        </div>
    );
} 