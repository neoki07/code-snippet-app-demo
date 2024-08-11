import Link from "next/link";
import { getSnippets } from "@/app/_db/get-snippets";
import { currentUser } from "@clerk/nextjs/server";
import { DeleteButton } from "./delete-button";

export default async function Home() {
  const snippets = await getSnippets();
  const loggedInUser = await currentUser();

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
              <span className="text-gray-700 text-xs ml-1">
                by {snippet.authorName}
              </span>
              {loggedInUser?.id === snippet.authorId && (
                <span className="ml-2">
                  <DeleteButton snippetId={snippet.id} />
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
