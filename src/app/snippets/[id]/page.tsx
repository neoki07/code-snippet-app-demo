import { snippets } from "@/app/store";
import { sleep } from "@/lib/sleep";
import { notFound } from "next/navigation";

export async function getSnippet(id: string) {
  await sleep(1000);
  const snippet = snippets.find((s) => s.id === id);
  return { snippet };
}

export default async function Page({ params }: { params: { id: string } }) {
  const { snippet } = await getSnippet(params.id);

  if (!snippet) {
    notFound();
  }

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl">{snippet.title}</h1>
      <div>
        <pre className="bg-gray-100 text-gray-800 px-4 py-3 rounded text-sm">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
