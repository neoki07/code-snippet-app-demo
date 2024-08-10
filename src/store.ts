import "server-only";

interface Snippet {
  id: string;
  title: string;
  code: string;
  language: string;
  author: string;
}

const snippets: Snippet[] = [
  {
    id: "1",
    title: "Snippet 1",
    code: `console.log('Hello, World!')`,
    language: "javascript",
    author: "John Doe",
  },
  {
    id: "2",
    title: "Snippet 2",
    code: `print('Hello, World!')`,
    language: "python",
    author: "Jane Doe",
  },
  {
    id: "3",
    title: "Snippet 3",
    code: `fmt.Println("Hello, World!")`,
    language: "go",
    author: "John Doe",
  },
];

export async function getSnippets() {
  return { snippets };
}

export async function getSnippet(id: string) {
  const snippet = snippets.find((snippet) => snippet.id === id);
  return { snippet };
}
