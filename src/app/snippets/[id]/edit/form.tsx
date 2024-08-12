"use client";

import { SnippetForm } from "@/components/snippet-form";
import { updateSnippet } from "./actions";
import { useActionState } from "react";

interface FormProps {
  snippet: {
    id: number;
    title: string;
    code: string;
  };
}

export function Form({ snippet }: FormProps) {
  const [{ errors }, formAction, isPending] = useActionState(updateSnippet, {
    id: snippet.id,
    errors: {},
  });

  return (
    <SnippetForm
      action={formAction}
      isPending={isPending}
      errors={errors}
      defaultValues={{
        title: snippet.title,
        code: snippet.code,
      }}
    />
  );
}
