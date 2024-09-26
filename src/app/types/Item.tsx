export interface Item {
  src: string;
  title: string;
  liveLinks: { name: string; url: string }[]; // Updated to an array of objects
  githubLink: string | null;
  description: string;
}
