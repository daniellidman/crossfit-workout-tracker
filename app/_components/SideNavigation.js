import Link from 'next/link';
import { Squares2X2Icon } from '@heroicons/react/24/outline';

export default function SideNavigation() {
  return (
    <ul className="grid grid-rows-1">
      <li>
        <Link href="/">
          <Squares2X2Icon />
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/workout">Work Out</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
}
