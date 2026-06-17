import Navbar from '../../components/Navbar';
import Link from 'next/link';

const Blogs = () => {
  return (
    <div className="w-full rounded-xl mx-auto px-4 py-6 sm:w-[90%] sm:p-6 sm:mt-16 mb-16">
      <Navbar />
      <main className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 px-3 sm:px-4 lg:grid-cols-[180px_minmax(0,720px)] lg:gap-16">
        <aside className="lg:pt-2">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            Back to blog
          </Link>
        </aside>

        <article className="max-w-3xl text-left">
          <header className="mb-10">
            <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              make. things. work.
            </h1>
            <time className="mt-3 block text-sm text-gray-500">Jun 17, 2026</time>
          </header>

          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            <p>
              So it just started on a random Monday, when I was working on the frontend of a collaborative project. The project had some strict rules, like - we needed to use custom CSS tokens instead of hard-coded RGB values, no use of static colors in Tailwind (instead, we needed to create tokens for it), and many more like that. So initially what I used to do was, first create the page/component which was assigned to me, and then after getting reviewed by the reviewers, I would give the file, the global CSS file, and the requirements.md (which contained all the rules we needed to follow) to my coding agent, who read the requirements and made changes to the file as required. So this process was neither good nor bad, it was OKAY! But it consumed a lot of tokens when the files were big, and I can&apos;t afford to spend a lot of tokens on just this task.
            </p>

            <p>
              Around the same time, I started to experiment with small and local AI models. I just installed Ollama on my machine and installed qwen2.5:1b (yes, I know it&apos;s a very dumb and small model, but my laptop doesn&apos;t have a GPU, so I can&apos;t afford to use larger models). I experimented with it for like 3 mins and came to the conclusion that this model is pretty useless. So then I switched to qwen3:4b-instruct. This model was pretty ass too. So I tried to push it to its limit to check what it can do, and after trying and trying, I noticed something - even if this model is not able to read/write files or write good quality code, given a decent system prompt, it can review code files, as given its system prompt. So I gave a system prompt to it, saying check lint errors and type safety for a TypeScript file, and every time I passed a TypeScript file to it, it didn&apos;t have to do anything except review the type and lint errors, which it did pretty well.
            </p>

            <p>
              Then an idea hit me - what if I make sub-agents out of these local AI models and make them review the CSS part of my project&apos;s code? So I did like any other engineer would do, I made three sub-agents - token-agent (which reviewed the react file and global css file and gave its report on CSS token usage in the file), component-agent (checked if all the components were named correctly as expected by the project&apos;s vision) and a11y-agent (which acted like the main agent and gave the final report) - using qwen3:4b-instruct. So after writing a React file without following the project&apos;s needed convention, I gave the agents the file and waited for their output. Finally, the reports came, and they were really TRASH! The checking was sometimes very strict( which was not needed), sometimes I exceeded the token limit as qwen3:4b cannot take more than 4096 tokens, can&apos;t run the agents in parallel as they would eat up my RAM, and also a hallucination problem.
            </p>

            <p>
              To fix these issues, I had to craft better system prompts, adjust the context size, and make a few tweaks here and there to my machine, which, in fact, improved the performance of the agents. The agents were able to ingest the React files, review them as required by the project&apos;s convention, and give a pretty decent report. After this successful attempt, I made this system such that after the agents made their report, the report would be ingested by my coding agent (Codex 5.5), which then made the required changes. I won&apos;t have to worry about my coding agent&apos;s tokens, and the redundant CSS task will be done by my local AI models.
            </p>

            <p>
              What began as a small side quest taught me a surprising amount: how to work with local AI models, how to choose a model for a specific task, how much performance can improve with carefully designed prompts, and most importantly, how to make better use of the hardware I already have.
            </p>

            <p>
              The biggest thing I learned was that small models don&apos;t need to replace bigger coding agents to be useful. Give them one specific task, clear instructions, and the right setup, and they can actually do a pretty solid job.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Blogs;
