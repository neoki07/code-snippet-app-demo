import { getSnippet } from "@/app/_db/get-snippet";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  if (Number.isNaN(parseInt(params.id))) {
    notFound();
  }

  const snippet = await getSnippet(parseInt(params.id));

  if (!snippet) {
    notFound();
  }

  return (
    <div className="space-y-2">
      <div>
        <h1 className="font-bold text-2xl inline">{snippet.title}</h1>
        <span className="text-gray-700 text-sm ml-2">
          by {snippet.authorName}
        </span>
      </div>
      <div>
        <pre className="bg-gray-100 text-gray-800 px-4 py-3 rounded text-sm">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
