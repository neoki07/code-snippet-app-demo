"use client";

import { SnippetForm } from "@/components/snippet-form";
import { useFormState } from "react-dom";
import { updateSnippet } from "./actions";

interface FormProps {
  snippet: {
    id: number;
    title: string;
    code: string;
  };
}

export function Form({ snippet }: FormProps) {
  const [state, formAction, isPending] = useFormState(updateSnippet, {
    id: snippet.id,
    errors: {
      title: [],
      code: [],
    },
  });

  return (
    <SnippetForm
      action={formAction}
      isPending={isPending}
      errors={state?.errors}
      defaultValues={{
        title: snippet.title,
        code: snippet.code,
      }}
    />
  );
}
