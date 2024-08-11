"use client";

import { deleteSnippet } from "./actions";

interface DeleteButtonProps {
  snippetId: number;
}

export function DeleteButton({ snippetId }: DeleteButtonProps) {
  return (
    <button
      onClick={() => deleteSnippet(snippetId)}
      className="underline hover:no-underline text-xs"
    >
      delete
    </button>
  );
}
