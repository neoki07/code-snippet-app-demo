"use client";

import Link from "next/link";

interface EditButtonProps {
  snippetId: number;
}

export function EditButton({ snippetId }: EditButtonProps) {
  return (
    <Link
      href={`/snippets/${snippetId}/edit`}
      className="underline hover:no-underline text-xs"
    >
      edit
    </Link>
  );
}
