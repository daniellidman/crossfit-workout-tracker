import { MyDatePicker } from '../_components/CalendarDatePicker';
import Link from 'next/link';
import { DayWorkoutLog } from '../_components/DayWorkoutLog';
import { getWods, getWeightlifting } from '../_lib/retrieveWorkouts';

export const metadata = {
  title: 'Work Out',
};

export default async function Page() {
  const wods = await getWods();
  const lifts = await getWeightlifting();

  return (
    <div>
      <h1 className="text-4xl font-bold">Workout Log</h1>
      <DayWorkoutLog wods={wods} lifts={lifts} />

      {/* <h1 className="mt-5 text-4xl font-bold">{'Today'}</h1>
      <MyDatePicker />

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
      </div> */}
    </div>
  );
}
