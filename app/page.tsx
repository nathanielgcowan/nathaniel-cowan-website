import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-24 px-6 bg-white dark:bg-black sm:items-start">
        <Image
          // className="rounded-full border-4 border-zinc-200 dark:border-zinc-800 mb-8"
          src="/logo.png"
          alt="Nathaniel Cowan portrait"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            Nathaniel Cowan
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to my personal website! I’m Nathaniel Cowan, a passionate
            developer, designer, and lifelong learner. Here you’ll find my
            projects, interests, and ways to connect with me.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8 w-full">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="mailto:newtcowan@gmail.com"
          >
            Email Me
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
            href="https://www.linkedin.com/in/nathanielgcowan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-zinc-300 dark:border-zinc-700 px-5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:w-39.5"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-zinc-300 dark:border-zinc-700 px-5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:w-39.5"
            href="/projects"
          >
            Projects
          </a>
        </div>
        {/* About Section */}
        <section className="mt-16 w-full max-w-2xl text-left">
          <h2 className="text-2xl font-semibold mb-2 text-black dark:text-zinc-50">
            About Me
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            I’m a software developer with a love for building beautiful,
            functional digital experiences. My interests span web development,
            UI/UX design, and emerging technologies. I enjoy collaborating on
            creative projects and am always eager to learn something new.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Outside of coding, you’ll find me exploring the outdoors, reading,
            or experimenting with new design ideas. Let’s connect and create
            something amazing together!
          </p>
        </section>
      </main>
    </div>
  );
}
