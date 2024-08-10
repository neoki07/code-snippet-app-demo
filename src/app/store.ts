import "server-only";

interface Snippet {
  title: string;
  code: string;
  language: string;
}

export const snippets: Snippet[] = [
  {
    title: "Snippet 1",
    code: `console.log('Hello, World!')`,
    language: "javascript",
  },
  {
    title: "Snippet 2",
    code: `print('Hello, World!')`,
    language: "python",
  },
  {
    title: "Snippet 3",
    code: `fmt.Println("Hello, World!")`,
    language: "go",
  },
];
