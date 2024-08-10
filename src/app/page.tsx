import Link from "next/link";
import { snippets } from "./store";
import { sleep } from "@/lib/sleep";

export async function getSnippets() {
  await sleep(1000);
  return { snippets };
}

export default async function Home() {
  const { snippets } = await getSnippets();

  return (
    <div className="space-y-1">
      <h1 className="font-bold text-2xl">Snippets</h1>
      <ul className="list-disc list-outside ml-5">
        {snippets.map((snippet) => (
          <li key={snippet.title}>
            <Link href={`snippets/${snippet.id}`}>{snippet.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
