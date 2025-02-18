export const metadata = {
  title: 'Dashboard',
};

export default function Page() {
  return (
    <div>
      <h1>Dashboard Page</h1>;
      <div className="flex min-w-[240px] gap-1 p-2 text-base font-normal">
        <Link
          href="/workout/new/workout"
          className="flex items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 active:bg-white active:bg-opacity-80"
        >
          Log a Workout
        </Link>
        <Link
          href="/workout/new/weightlifting"
          className="flex items-center rounded-lg p-3 text-start leading-tight outline-none transition-all hover:bg-white hover:bg-opacity-80 focus:bg-white focus:bg-opacity-80 active:bg-white active:bg-opacity-80"
        >
          Log Weightlifting
        </Link>
      </div>
    </div>
  );
}
