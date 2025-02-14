import LogWeightliftingForm from '@/app/_components/LogWeightliftingForm';
import { loadMovements } from '@/app/_lib/logWorkout';
import Link from 'next/link';

export const metadata = {
  title: 'Log Weightlifting',
};

export default async function Page() {
  const loadedMovements = await loadMovements();
  console.log(loadedMovements);
  return (
    <div>
      <Link
        href="/workout"
        className="absolute rounded-full bg-white p-1 text-2xl font-black"
      >
        &larr;
      </Link>
      <h1 className="mt-14 text-4xl font-bold">Log Weightlifting</h1>
      <LogWeightliftingForm loadedMovements={loadedMovements} />
    </div>
  );
}
