import Link from 'next/link';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

export default function SideNavigation() {
  return (
    <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 shadow-xl shadow-slate-900/5">
      <div className="mb-2 p-4">
        <h5 className="block text-xl font-semibold leading-snug tracking-normal antialiased">
          CF Workout Tracker
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 text-base font-normal">
        <Link
          href="/"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Dashboard
        </Link>
        <Link
          href="/workout"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Work Out
        </Link>
        <Link
          href="/about"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          About
        </Link>
        <Link
          href="/account"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Your Account
        </Link>
      </nav>
    </div>
  );
}
