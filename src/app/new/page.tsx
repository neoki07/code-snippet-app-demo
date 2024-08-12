"use client";

import { SnippetForm } from "@/components/snippet-form";
import { createSnippet } from "./actions";
import { useActionState } from "react";

export default function Page() {
  const [{ errors }, formAction, isPending] = useActionState(createSnippet, {
    errors: {},
  });

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl inline">Create Snippet</h1>
      <SnippetForm action={formAction} isPending={isPending} errors={errors} />
    </div>
  );
}
