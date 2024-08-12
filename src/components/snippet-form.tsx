interface SnippetFormProps {
  action?: string | ((formData: FormData) => void);
  isPending?: boolean;
  errors?: {
    title?: string[];
    code?: string[];
  };
  defaultValues?: {
    title?: string;
    code?: string;
  };
}

export function SnippetForm({
  action,
  isPending,
  errors,
  defaultValues,
}: SnippetFormProps) {
  return (
    <form action={action}>
      <div className="space-y-3">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="title" className="inline text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={defaultValues?.title}
            className="border border-gray-300 rounded-md px-2.5 py-1.5 text-sm"
          />
          {errors?.title?.map((error) => (
            <p key={error} aria-live="polite" className="text-red-500 text-sm">
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
            defaultValue={defaultValues?.code}
            rows={10}
            className="border border-gray-300 rounded-md px-2.5 py-1.5 text-sm"
          />
          {errors?.code?.map((error) => (
            <p key={error} aria-live="polite" className="text-red-500 text-sm">
              {error}
            </p>
          ))}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-black px-3 h-8 text-white rounded-md font-semibold text-sm disabled:opacity-70"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
