import Link from 'next/link';
import LogWeightliftingForm from '@/app/_components/LogWorkoutForm';

export const metadata = {
  title: 'Log Weightlifting',
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
      <h1 className="mt-14 text-4xl font-bold">Log Weightlifting</h1>
      <LogWeightliftingForm />
    </div>
  );
}
