import "server-only";

interface Snippet {
  id: string;
  title: string;
  code: string;
  language: string;
}

export const snippets: Snippet[] = [
  {
    id: "1",
    title: "Snippet 1",
    code: `console.log('Hello, World!')`,
    language: "javascript",
  },
  {
    id: "2",
    title: "Snippet 2",
    code: `print('Hello, World!')`,
    language: "python",
  },
  {
    id: "3",
    title: "Snippet 3",
    code: `fmt.Println("Hello, World!")`,
    language: "go",
  },
];
