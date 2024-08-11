import Link from "next/link";
import { getSnippets } from "@/app/_db/get-snippets";

export default async function Home() {
  const snippets = await getSnippets();

  return (
    <div className="space-y-1">
      <h1 className="font-bold text-2xl">Snippets</h1>
      <ul className="list-disc list-outside ml-5">
        {snippets.map((snippet) => (
          <li key={snippet.id}>
            <div>
              <Link
                href={`snippets/${snippet.id}`}
                className="underline hover:no-underline text-blue-600 visited:text-purple-900"
              >
                {snippet.title}
              </Link>
              <span className="text-gray-700 text-xs">
                {" "}
                by {snippet.authorName}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
