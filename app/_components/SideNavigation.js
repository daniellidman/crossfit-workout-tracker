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
              viewBox="0 0 96 96"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M57.6,17.8c-3.6,0-6.6,3-6.6,6.6v17.8c0,3.6,3,6.6,6.6,6.6h14.8c3.6,0,6.6-3,6.6-6.6v-17.8c0-3.6-3-6.6-6.6-6.6h-14.8Z" />
              <path d="M24.4,17.8c-3.6,0-6.6,3-6.6,6.6v7c0,3.6,3,6.6,6.6,6.6h14.8c3.6,0,6.6-3,6.6-6.6v-7c0-3.6-3-6.6-6.6-6.6h-14.8Z" />
              <path d="M24.4,43.6c-3.6,0-6.6,3-6.6,6.6v22.2c0,3.6,3,6.6,6.6,6.6h14.8c3.6,0,6.6-3,6.6-6.6v-22.2c0-3.6-3-6.6-6.6-6.6h-14.8Z" />
              <path d="M57.6,53.9c-3.6,0-6.6,3-6.6,6.6v11.9c0,3.6,3,6.6,6.6,6.6h14.8c3.6,0,6.6-3,6.6-6.6v-11.9c0-3.6-3-6.6-6.6-6.6h-14.8Z" />
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
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M50.7,18.3c.3,0,.5,0,.7.1,9.9,1.6,18.4-2.2,25.7-11.6.4-.5,1.2-.6,1.7-.2.2.2.3.4.4.6l3.2,10.2h0s3.2,10.1,3.2,10.1h0s3.2,10.1,3.2,10.1h0s3.4,10.9,3.4,10.9h0s0,0,0,0h0s0,0,0,0c0,.2,0,.4,0,.6h0s0,0,0,0h0c0,.1,0,.2-.1.3h0s0,0,0,0h0s0,0,0,0h0s0,0,0,0c-9.4,12.1-20.8,15.7-34.3,10.8-4.8-1.5-9.2-2-13.2-1.6-.7,0-1.4.2-2,.3,0,0-.1,0-.2,0-2.8.5-5.5,1.6-7.9,3.1l9.3,29.5c.2.6-.2,1.3-.8,1.5l-5.4,1.7c-.6.2-1.3-.2-1.5-.8L12,17.6c-.3,0-.5-.2-.8-.3-1.5-.8-2.7-2.1-3.2-3.8h0c-.5-1.7-.3-3.5.4-4.9.8-1.5,2.1-2.7,3.8-3.2,1.7-.5,3.5-.3,4.9.4,1.5.8,2.7,2.1,3.2,3.8.5,1.7.3,3.5-.4,4.9-.1.2-.2.4-.4.6l1.1,3.4c3.2-1.9,6.8-3.1,10.6-3.4,4.3-.4,9.1.2,14.2,1.7,0,0,0,0,0,0,1.8.6,3.5,1.1,5.2,1.5h0ZM34.1,36l-2.5-7.8c-2.5.6-4.8,1.5-7,2.9l2.5,7.8c2.2-1.3,4.5-2.2,7-2.8h0ZM40.7,57l-2.7-8.6c-2.5.6-4.8,1.5-7,2.9l2.7,8.5c2.2-1.3,4.5-2.2,7-2.8h0ZM41.1,25.4l-2.4-7.7c-2.5-.4-4.9-.5-7.2-.2-.3,0-.5,0-.8,0l2.5,7.9c.4,0,.8-.1,1.3-.2,2.1-.2,4.3-.2,6.6,0h0ZM47.5,45.6l-2.4-7.6c-2.5-.4-4.9-.5-7.2-.2-.3,0-.5,0-.8,0l2.5,7.8c.4,0,.8-.1,1.3-.2,2.1-.2,4.3-.2,6.6,0h0ZM55.6,38.3l-2.4-7.5c-1.7-.3-3.5-.8-5.2-1.5-1.2-.4-2.3-.7-3.4-.9l2.4,7.5c1.6.3,3.2.7,4.9,1.2,0,0,0,0,0,0,1.2.4,2.4.8,3.6,1.1h0ZM62.2,59.3l-2.6-8.2c-1.7-.3-3.5-.8-5.2-1.5-1.1-.4-2.3-.7-3.4-.9l2.6,8.3c1.6.3,3.2.7,4.9,1.2,0,0,0,0,0,0,1.2.4,2.4.8,3.6,1.1h0ZM62.9,28.6l-2.5-7.9c-2.5.5-5.1.5-7.8.2l2.4,7.7c2.7.4,5.3.4,7.9,0h0ZM69.3,48.9l-2.5-7.8c-2.5.5-5.1.5-7.8.2l2.4,7.6c2.7.4,5.4.4,7.9,0h0ZM75.3,35.1l-2.4-7.7c-2.2,1.4-4.5,2.5-6.9,3.1l2.5,7.8c.2,0,.4-.1.7-.2,2.1-.7,4.2-1.7,6.2-3h0ZM81.9,56l-2.7-8.5c-2,1.3-4.1,2.2-6.2,2.9-.2,0-.4.1-.7.2l2.7,8.6c2.4-.7,4.7-1.7,6.9-3.2h0ZM78.1,36l2.4,7.7c2-1.6,3.9-3.6,5.8-5.9l-2.3-7.4c-1.9,2.2-3.8,4.1-5.9,5.6h0ZM71.7,15.7l2.4,7.8c2-1.6,4-3.6,5.8-5.9l-2.4-7.5c-1.9,2.2-3.8,4.1-5.9,5.6Z"
              />
            </svg>
          </div>
          Work Out
        </Link>
        <Link
          href="/goals"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 110"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M58.7,40.4h5.8c1.3,0,2.5.5,3.4,1.4.9.9,1.4,2.1,1.4,3.4v38.9c0,.8-.7,1.5-1.5,1.5h-12.5c-.8,0-1.5-.7-1.5-1.5v-38.9c0-1.3.5-2.5,1.4-3.4s2.1-1.4,3.4-1.4h0ZM73.8,37.9h-2.3c-1.4,0-2.4-.3-3.1-.8-.5-.4-.9-.8-1.2-1.4-.2-.5-.3-1-.3-1.6,0-1.2.5-2.5,1.1-3.3l9.9-14.4c.3-.4.6-.7,1-1,.8-.5,1.7-.8,2.6-.8s1.8.3,2.6.8c.4.3.7.6,1,1l9.9,14.4c.6.8,1.1,2.1,1.1,3.3s0,1.1-.3,1.6c-.2.5-.6,1-1.2,1.4-.7.5-1.7.8-3.1.8h-2.3v46.2c0,.8-.7,1.5-1.5,1.5h-12.5c-.8,0-1.5-.7-1.5-1.5v-46.2h0ZM71.6,89.3c1.4,0,2.7.6,3.6,1.5.9.9,1.5,2.2,1.5,3.6v1.1h11.1c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5h-11.1v1.1c0,1.4-.6,2.7-1.5,3.6-.9.9-2.2,1.5-3.6,1.5s-2.7-.6-3.6-1.5h0c-.9-1-1.4-2.3-1.4-3.6v-1.1H15.3c-.8,0-1.5-.7-1.5-1.5s.7-1.5,1.5-1.5h51.1v-1.1c0-1.4.6-2.7,1.5-3.6.9-.9,2.2-1.5,3.6-1.5h0ZM18.7,58.2h5.8c1.3,0,2.5.5,3.4,1.4h0c.8,1,1.3,2.1,1.3,3.4v21.1c0,.8-.7,1.5-1.5,1.5h-12.5c-.8,0-1.5-.7-1.5-1.5v-21.1c0-1.3.5-2.5,1.4-3.4.9-.9,2.1-1.4,3.4-1.4h0ZM38.7,49.3h5.8c1.3,0,2.5.5,3.4,1.4.9.9,1.4,2.1,1.4,3.4v30c0,.8-.7,1.5-1.5,1.5h-12.5c-.8,0-1.5-.7-1.5-1.5v-30c0-1.3.5-2.5,1.4-3.4.9-.9,2.1-1.4,3.4-1.4h0Z" />
            </svg>
          </div>
          Fitness Goals
        </Link>
        <Link
          href="/profile"
          className="flex w-full items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-slate-100 hover:bg-opacity-80 focus:bg-slate-100 focus:bg-opacity-80 active:bg-slate-100 active:bg-opacity-80"
        >
          <div className="mr-4 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 110"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M76.4,51.7h12.6c3,0,5.6-2.2,6.1-5.1l3.5-19.5c.1-.6,0-1.2-.4-1.7-.4-.5-1-.8-1.6-.8h-14.7l1.2-8.3H26.9l1.2,8.3h-14.7c-.6,0-1.2.3-1.6.8-.4.5-.6,1.1-.4,1.7l3.5,19.5c.5,3,3.1,5.1,6.1,5.1h12.6c3.3,5.2,9,8.3,15.2,8.3l-4.2,22.9h-4.2c-1.2,0-2.1.9-2.1,2.1v10.4h1c-3.5,0-6.2,2.8-6.2,6.2v2.1h43.8v-2.1c0-3.5-2.8-6.2-6.2-6.2h1v-10.4c0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6h-4.2l-4.2-22.9c6.2,0,11.9-3.1,15.2-8.3h0ZM81.3,28.8h12.8l-3.1,17h0c-.2,1-1,1.7-2.1,1.7h-10.6c.3-1,.5-2,.7-3l2.2-15.8h0ZM21,47.5c-1,0-1.9-.7-2.1-1.7l-3.1-17h12.8s2.3,15.8,2.3,15.8h0c.1,1,.4,2,.7,3h-10.6ZM63.7,36.1l-2.9,2.8,1.4,5.5h0c.2.6,0,1.3-.6,1.7-.5.4-1.2.4-1.8.1l-4.8-2.7-4.8,2.7c-.6.3-1.3.3-1.8-.1-.5-.4-.8-1.1-.6-1.7.6-2.6,1.4-5.5,1.4-5.5l-2.9-2.8c-.5-.5-.6-1.2-.4-1.8.3-.6.9-1,1.5-1h4.2l1.8-4.5c.3-.6.9-1,1.5-1s1.3.4,1.5,1l1.8,4.5h4.2c.7,0,1.3.4,1.5,1,.3.6.1,1.3-.4,1.8h0Z" />
            </svg>
          </div>
          Profile
        </Link>
      </nav>
    </div>
  );
}
