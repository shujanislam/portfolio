import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

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
              engineering. is. stupid.
            </h1>
            <time className="mt-3 block text-sm text-gray-500">Jul 5, 2026</time>
          </header>

          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            <p>
              <Link
                href="https://en.wikipedia.org/wiki/React_(software)"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                React JS
              </Link>{' '}
              (a frontend JavaScript library) was released in May 2013, announcing capabilities like single-page applications, componentizing frontend code, writing better API calls, the virtual DOM, and more. When it was released, a large percentage of the population denied this change -
            </p>

            <figure className="my-8 flex flex-col items-center">
              <Image
                src="/react-tweet.webp"
                alt="Tweet saying JSX is just like XML"
                width={720}
                height={405}
                className="w-full rounded-xl"
              />
            </figure>

            <p>
              This was nothing more than a stupid idea to everyone. Who would be interested in writing JSX (HTML inside JavaScript getting built by Babel)? But the team at Facebook was much more stupid and crazy for this idea. They worked hard, poured their everything into it, and fast forward to 2026, it is undeniably the default frontend library for modern websites, powering massive frameworks like Next.js.
            </p>

            <p>
              In March 2002, a stupid engineer dreamt of sending rockets to Mars and colonizing it. That sounds like a sentence coming out of a stupid person, too. He started it, burnt a lot of his money, and got to the absolute verge of selling his house. He was called a fool, stupid, dumb, and what not by everyone. Well, it is true—keep your hobbies to yourself and don&apos;t risk your own life for them, right? But now, in 2026, its IPO valuation has crossed 1 trillion in the name of{' '}
              <Link
                href="https://en.wikipedia.org/wiki/SpaceX"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                SpaceX
              </Link>
              , created by Elon Musk.
            </p>

            <figure className="my-8 flex flex-col items-center">
              <Image
                src="/elon.jpg"
                alt="Tweet saying JSX is just like XML"
                width={880}
                height={525}
                className="w-full rounded-xl"
              />
            </figure>
            
            <p>
              Every engineering greatness started with some stupidity in the minds of the founders.
            </p>

            <p>
              When I was a child, I used to love watching mechanics fixing car problems or electricians fixing the electrical boards in our house. It made me so excited to watch them take out their screwdriver, hammer, and other tools, and without wasting a minute or two, diagnose the issue and solve it without breaking a sweat. Whenever a mechanic, an electrician, or anyone like that came to our house, I used to stand beside them watching their every move, like a stupid kid having nothing better to do under that scorching sun.
            </p>

            <p>
              But I loved it. This is what made me fall in love with engineering. This is what made me fall in love with problem-solving. As time passed, I understood it wasn&apos;t the tool that made me love it—it was the willingness to come forward and solve a real-life problem.
            </p>

            <p>
              As I continue my journey as a software engineer now, in the era of AI, it makes me kind of sad to see that what once used to be a time where engineers would see an issue and use their own experience to find the root cause and solve it, is now entirely AI-dependent. Everyone is dependent on AI. When we needed to make it our assistant, I see many people using it as their orchestrator, when it should be the exact vice versa.
            </p>

            <p>
              We have become obsessed with being &quot;smart.&quot; While it&apos;s true that a fast-growing society wants us to become quick and smart, that wasn&apos;t the reason many of us started doing what we are doing right now. What once started as a foolish attraction has become a societal norm to improve quickly. What once required us to struggle to fix a problem—which in return gave us a lot of joy—now requires us to quickly solve it and move onto the next task.
            </p>

            <p>
              Imagine tackling a{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Regular_expression"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                regex
              </Link>{' '}
              problem in JS back during 2018-19. You would try multiple foolish methods to solve the problem, and in that way, you would find some genuinely great routes to a solution. But in the age of AI, where we are dependent on it, there are mostly a few countable ways to solve that same task.
            </p>

            <p>
              When we skip wandering, we skip learning. If you don&apos;t write the five wrong variations of a function, you never truly understand why the sixth one is right.
            </p>

            <p>
              Yes, it&apos;s true, AI is very helpful. I use it every day for my daily coding tasks, and honestly speaking, it has made me a better engineer than I was. But I don&apos;t let it orchestrate me; instead, I make it my personal assistant. It does all my redundant tasks that wouldn&apos;t benefit me to do myself. But when it comes to a problem where I need to think, I pause my agent. I think of variations of ways to solve the problem, do a bit of online research, talk to my agent, find out that I had flaws in some parts of the solution, and then fine-tune it and apply it. This keeps my inner joy of engineering alive.
            </p>

            <figure className="my-8 flex flex-col items-center">
              <Image
                src="/ai-agent.png"
                alt="Tweet saying JSX is just like XML"
                width={720}
                height={405}
                className="w-full rounded-xl"
              />
            </figure>
            <p>
              If we stop thinking, we stop building the unique, weird, beautiful paths that lead to actual innovation. We become predictable. And engineering was never meant to be predictable. We were always expected to come out with mind-boggling ideas that would make a huge population of people happy, mad, sad, confused, and everything in between.
            </p>

            <p>
              React was a stupid idea that defied every holy rule of web development in 2013. SpaceX was a stupid, bankruptcy-inducing gamble on a sci-fi dream. Standing out under a scorching sun just to watch an electrician rewire a fuse box was a stupid way for a kid to spend an afternoon.
            </p>

            <p>
              But that &quot;stupidity&quot; is exactly where the soul of innovation lives.
            </p>

            <p>
              AI is arguably the most powerful wrench we have ever been handed. By all means, use it to turn the bolts faster. Make it your assistant. Let it do the grunt work. But do not let it take the screwdriver out of your hands entirely. Do not let it rob you of the absolute euphoria that comes from breaking a system, getting stuck for three hours, and finally fixing it with your own hands.
            </p>

            <p>
              I take a vow today that I will never let my inner joy of engineering die. I will never let the child, who once dreamed about becoming a problem solver, die. I will never let down the kid who stood in one place for hours, getting excited by watching people fix cables and transformers. I take a vow to become the version of an engineer who might not follow today&apos;s fast-paced societal principles, but will solve problems no matter the complexity.
            </p>

            <p>
              Don&apos;t let the pressure of this fast-moving tech world optimize the curiosity right out of you.
            </p>

            <p>
              Don&apos;t just strive to be smart.
            </p>

            <p>
              Keep engineering stupid.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Blogs;
