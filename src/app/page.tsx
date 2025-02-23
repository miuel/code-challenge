import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-screen p-4">
      <section id="stack" className="relative mt-[30vh] mb-[20vh]">
        <h1 className="text-4xl sm:text-8xl font-bold text-left pb-4 border-b border-[#dadada]">Coding Session</h1>
        <a
          href="/categoriesListingPage"
          className="cursor-pointer text-xl font-bold relative sm:absolute sm:right-4 -top-[15vh] sm:top-[5vh] text-[#dadada] bg-black py-1 px-2 hover:text-black hover:bg-transparent hover:underline">Go to Categories List

          <span className="ml-1">↑</span>
        </a>
        <img src="/images/desk.jpg" alt="my office"
          className="relative sm:absolute sm:right-4 sm:bottom-[5vh] object-cover"
          width={345}
          height={256}
        />
        <div className="w-full sm:w-1/2">
          <p className="text-xl font-bold pt-8 pb-4">• Welcome</p>
          <p className="text-base font-normal pb-4">
            My name is Miguel I’m a Frontend developer with more than 6 years of experience.
            For this challenge I decided to chose the following stack.
          </p>

          <p className="pb-4">
            <b>Backend: Next.js (API Routes, JavaScript)</b>
            <br />I picked Next.js because it lets me build a backend really fast without needing a separate server. The built-in API routes make it easy to set up endpoints, and since I’m working with JavaScript, everything stays simple. Plus, deploying it (e.g., on Vercel) is super easy.
          </p>

          <p className="pb-4">
            <b>Frontend: React + TailwindCSS + Typescript</b>
            <br />For the frontend, I went with React because it’s flexible and works great for component-based development. I’m using TailwindCSS for styling because it makes designing super fast without writing a ton of custom CSS.
            The UI fetches category data from the backend, displays it in a clean list, and includes a search input to filter categories based on pageTitle.
          </p>

          <p className="text-base font-normal pb-4">AI ChatGPT helped to add mor content to the JSON.</p>

          <div className="flex justify-between pb-4">
            <p className="text-base font-normal">
              <b>Backend:</b> Next.Js, Vercel, API Routes, Github
            </p>
            <p className="text-base font-normal">
              <b>Frontend:</b>  React, Typescript, Tailwind
            </p>
          </div>

          <p>Source code: <a className="underline cursor-pointer"
          target="_blank" href="https://github.com/miuel/code-challenge">github code</a></p>
          <p>Source design: <a 
          className="underline cursor-pointer"
          target="_blank"
          href="https://www.figma.com/design/snIeCTbVxLyiu8rLzk48Jz/Untitled?node-id=1-3&t=QM2YBhyyLfUHDWis-0">figma design</a></p>
        </div>
      </section>
          </main>
  );
}
