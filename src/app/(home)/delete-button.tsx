"use client";

import { useTransition } from "react";
import { deleteSnippet } from "./actions";

interface DeleteButtonProps {
  snippetId: number;
}

export function DeleteButton({ snippetId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      deleteSnippet(snippetId);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="underline hover:no-underline text-xs disabled:opacity-70"
    >
      delete
    </button>
  );
}
