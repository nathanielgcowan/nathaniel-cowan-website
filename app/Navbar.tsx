import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-black dark:text-zinc-50">
          <Link href="/">Nathaniel Cowan</Link>
        </div>
        <div className="flex gap-6 text-base font-medium">
          <Link
            href="/blog"
            className="hover:underline text-zinc-700 dark:text-zinc-200"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="hover:underline text-zinc-700 dark:text-zinc-200"
          >
            Projects
          </Link>
          <a
            href="mailto:newtcowan@gmail.com"
            className="hover:underline text-zinc-700 dark:text-zinc-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nathanielgcowan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-zinc-700 dark:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
