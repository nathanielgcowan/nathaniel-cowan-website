export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-24 px-4 bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-zinc-50">
          Blog
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          Welcome to my blog! Here you’ll find posts about web development,
          design, technology, and my personal journey.
        </p>
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-zinc-500 dark:text-zinc-400">
            No posts yet. Check back soon!
          </p>
        </div>
      </main>
    </div>
  );
}
