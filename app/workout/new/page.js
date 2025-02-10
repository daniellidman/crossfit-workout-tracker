import Link from 'next/link';
import LogWorkoutForm from '@/app/_components/LogWorkoutForm';

export const metadata = {
  title: 'Log a Workout',
};

export default function Page() {
  return (
    <div>
      <Link
        href="/workout"
        className="absolute rounded-full bg-white p-1 text-2xl font-black"
      >
        &larr;
      </Link>
      <h1 className="mt-14 text-4xl font-bold">Log a New Workout</h1>
      <LogWorkoutForm />
    </div>
  );
}

/*
Name
Date
Score Type
Scaling
Time (converted to a number)
Movements (converted to an array of numbers)
Workout
*/
