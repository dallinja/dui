import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex grow flex-col place-content-center place-items-center gap-[25px] max-lg:gap-[18px] max-lg:px-5 max-lg:pt-8 max-lg:pb-6">
        <div className="relative">
          <img
            src={heroImg}
            className="relative inset-x-0 z-0 mx-auto w-[170px]"
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="absolute inset-x-0 top-[34px] z-10 mx-auto h-7 [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="absolute inset-x-0 top-[107px] z-0 mx-auto h-[26px] w-auto [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1 className="my-8 [font-family:var(--heading)] text-[56px] font-medium tracking-[-1.68px] text-[var(--text-h)] max-lg:my-5 max-lg:text-4xl">
            Get started
          </h1>
          <p>
            Edit{' '}
            <code className="inline-flex rounded bg-[var(--code-bg)] px-2 py-1 [font-family:var(--mono)] text-[15px] leading-[135%] text-[var(--text-h)]">
              src/App.tsx
            </code>{' '}
            and save to test{' '}
            <code className="inline-flex rounded bg-[var(--code-bg)] px-2 py-1 [font-family:var(--mono)] text-[15px] leading-[135%] text-[var(--text-h)]">
              HMR
            </code>
          </p>
        </div>
        <button
          className="mb-6 inline-flex rounded-[5px] border-2 border-transparent bg-[var(--accent-bg)] px-2.5 py-[5px] [font-family:var(--mono)] text-base text-[var(--accent)] transition-[border-color] duration-300 hover:border-[var(--accent-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:[border-left-color:var(--border)] before:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:[border-right-color:var(--border)] after:content-['']" />

      <section className="flex border-t border-[color:var(--border)] text-left max-lg:flex-col max-lg:text-center">
        <div className="flex-1 border-r border-r-[color:var(--border)] p-8 max-lg:border-r-0 max-lg:border-b max-lg:border-b-[color:var(--border)] max-lg:px-5 max-lg:py-6">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="mb-2 [font-family:var(--heading)] text-2xl leading-[118%] font-medium tracking-[-0.24px] text-[var(--text-h)] max-lg:text-xl">
            Documentation
          </h2>
          <p>Your questions, answered</p>
          <ul className="mt-8 flex gap-2 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://react.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8 max-lg:px-5 max-lg:py-6">
          <svg
            className="mb-4 h-[22px] w-[22px]"
            role="presentation"
            aria-hidden="true"
          >
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="mb-2 [font-family:var(--heading)] text-2xl leading-[118%] font-medium tracking-[-0.24px] text-[var(--text-h)] max-lg:text-xl">
            Connect with us
          </h2>
          <p>Join the Vite community</p>
          <ul className="mt-8 flex gap-2 max-lg:mt-5 max-lg:flex-wrap max-lg:justify-center">
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://chat.vite.dev/"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://x.com/vite_js"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="max-lg:shrink max-lg:grow max-lg:basis-[calc(50%-8px)]">
              <a
                href="https://bsky.app/profile/vite.dev"
                target="_blank"
                className="flex items-center gap-2 rounded-md bg-[var(--social-bg)] px-3 py-1.5 text-base text-[var(--text-h)] transition-shadow duration-300 hover:[box-shadow:var(--shadow)] max-lg:w-full max-lg:justify-center"
              >
                <svg
                  className="h-[18px] w-[18px] dark:brightness-200 dark:invert"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full before:absolute before:-top-[4.5px] before:left-0 before:border-[5px] before:border-transparent before:[border-left-color:var(--border)] before:content-[''] after:absolute after:-top-[4.5px] after:right-0 after:border-[5px] after:border-transparent after:[border-right-color:var(--border)] after:content-['']" />

      <section className="h-[88px] border-t border-[color:var(--border)] max-lg:h-12" />
    </>
  )
}

export default App
