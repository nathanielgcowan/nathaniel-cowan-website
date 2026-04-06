export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-24 px-4 bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-black dark:text-zinc-50">
          Personal Projects
        </h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">
          Explore some of my favorite personal projects, side experiments, and
          creative work.
        </p>
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-zinc-500 dark:text-zinc-400">
            Project showcase coming soon!
          </p>
        </div>
      </main>
    </div>
  );
}
