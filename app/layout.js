import '@/app/_styles/globals.css';
import { DM_Sans } from 'next/font/google';
import SideNavigation from './_components/SideNavigation';

export const metadata = {
  title: {
    template: '%s  |  Crossfit Workout Tracker',
    default: 'Crossfit Workout Tracker',
  },
  description: 'All in one personal fitness and workout tracker',
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} mr-4 bg-slate-100`}>
        <header></header>
        <main className="grid h-full grid-cols-[16rem_1fr] gap-12">
          <SideNavigation />
          {children}
        </main>
      </body>
    </html>
  );
}
