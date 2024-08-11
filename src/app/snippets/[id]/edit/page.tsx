import { getSnippet } from "@/app/_db/get-snippet";
import { currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { Form } from "./form";

export default async function Page({ params }: { params: { id: string } }) {
  if (Number.isNaN(parseInt(params.id))) {
    notFound();
  }

  const snippet = await getSnippet(parseInt(params.id));

  if (!snippet) {
    notFound();
  }

  const loggedInUser = await currentUser();
  if (loggedInUser?.id !== snippet.authorId) {
    redirect("/");
  }

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl inline">Edit Snippet</h1>
      <Form snippet={snippet} />
    </div>
  );
}
