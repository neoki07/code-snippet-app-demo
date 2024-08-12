"use client";

import { useTransition } from "react";
import { deleteSnippet } from "./actions";
import { useConfirm } from "@/hooks/use-confirm";

interface DeleteButtonProps {
  snippetId: number;
}

export function DeleteButton({ snippetId }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const confirm = useConfirm({
    message: "Are you sure you want to delete this snippet?",
    onConfirm: () => {
      startTransition(() => {
        deleteSnippet(snippetId);
      });
    },
  });

  return (
    <button
      onClick={confirm}
      disabled={isPending}
      className="underline hover:no-underline text-xs disabled:opacity-70 disabled:no-underline"
    >
      delete
    </button>
  );
}
