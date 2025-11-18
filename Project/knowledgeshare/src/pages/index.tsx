import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4 bg-zinc-50 dark:bg-black">
      <Link
        href="/useState"
        className="rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Typescript
      </Link>
      <Link
        href="/mui"
        className="rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        Material UI
      </Link>
      <Link
        href="/state"
        className="rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        useState
      </Link>
      <Link
        href="/effect"
        className="rounded-md bg-black px-4 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        useEffect
      </Link>
    </div>
  )
}
