import { client } from "@/lib/hono";
import { notFound } from "next/navigation";

async function getSnippet(id: string) {
  const response = await client.api.snippets[":id"].$get({ param: { id } });

  if (!response.ok) {
    notFound();
  }

  return response.json();
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
