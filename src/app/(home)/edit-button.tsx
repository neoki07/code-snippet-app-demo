"use client";

import Link from "next/link";

interface EditButtonProps {
  snippetId: number;
}

export function EditButton({ snippetId }: EditButtonProps) {
  return (
    <Link
      href={`/edit/${snippetId}`}
      className="underline hover:no-underline text-xs"
    >
      edit
    </Link>
  );
}
