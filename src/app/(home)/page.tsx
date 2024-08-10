import Link from "next/link";
import { client } from "@/lib/hono";

async function getSnippets() {
  const response = await client.api.snippets.$get();
  return response.json();
}

export default async function Home() {
  const { snippets } = await getSnippets();

  return (
    <div className="space-y-1">
      <h1 className="font-bold text-2xl">Snippets</h1>
      <ul className="list-disc list-outside ml-5">
        {snippets.map((snippet) => (
          <li key={snippet.title}>
            <Link
              href={`snippets/${snippet.id}`}
              className="underline hover:no-underline text-blue-600"
            >
              {snippet.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
