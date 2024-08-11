"use client";

import { SnippetForm } from "@/components/snippet-form";
import { createSnippet } from "./actions";
import { useFormState } from "react-dom";

export default function Page() {
  const [state, formAction, isPending] = useFormState(createSnippet, {
    errors: {
      title: [],
      code: [],
    },
  });

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl inline">Create Snippet</h1>
      <SnippetForm
        action={formAction}
        isPending={isPending}
        errors={state.errors}
      />
    </div>
  );
}
