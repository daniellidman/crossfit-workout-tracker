import Link from 'next/link';
import { tempWorkouts } from '../workout/tempWorkouts';

function WOD({ children, wodID }) {
  return (
    <Link
      href={`/workout/${wodID}`}
      className="border-primary-800 hover:bg-accent-600 hover:text-primary-900 inline-block border-l px-6 py-4 transition-all"
    >
      <div className="m-1 inline-flex rounded-md bg-green-300 p-1">
        {children}
      </div>
    </Link>
  );
}

export default WOD;
