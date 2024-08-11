"use client";

import { createSnippet } from "./actions";
import { useFormState } from "react-dom";

const initialState = {
  errors: {
    title: [],
    language: [],
    code: [],
  },
};
export default function Page() {
  const [state, formAction, pending] = useFormState(
    createSnippet,
    initialState,
  );

  return (
    <div className="space-y-2">
      <h1 className="font-bold text-2xl inline">Create Snippet</h1>
      <form action={formAction}>
        <div className="space-y-3">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="title" className="inline text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md px-2 py-1.5 text-sm"
            />
            {state?.errors?.title?.map((error) => (
              <p
                key={error}
                aria-live="polite"
                className="text-red-500 text-sm"
              >
                {error}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-0.5">
            <label htmlFor="code" className="inline text-sm font-medium">
              Code
            </label>
            <textarea
              id="code"
              name="code"
              rows={10}
              className="border border-gray-300 rounded-md px-2 py-1.5 text-sm"
            />
            {state?.errors?.code?.map((error) => (
              <p
                key={error}
                aria-live="polite"
                className="text-red-500 text-sm"
              >
                {error}
              </p>
            ))}
          </div>
          <button
            type="submit"
            className="bg-black px-3 h-8 text-white rounded-md font-semibold text-sm"
          >
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
