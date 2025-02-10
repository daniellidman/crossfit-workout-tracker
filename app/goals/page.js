import FitnessGoal from '../_components/FitnessGoal';
import { tempGoals } from './tempGoals';

export const metadata = {
  title: 'Goals',
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Fitness Goals</h1>
      <h2 className="mt-5 text-2xl font-semibold">Skill Goals</h2>
      {tempGoals
        .filter((n) => n.type === 'skill')
        .map((g) => (
          <FitnessGoal goal={g} key={g.id} />
        ))}

      <h2 className="mt-5 text-2xl font-semibold">Strength Goals</h2>
      {tempGoals
        .filter((n) => n.type === 'strength')
        .map((g) => (
          <FitnessGoal goal={g} key={g.id} />
        ))}

      <p className="mb-3 mt-10 text-xs">
        Start by hard coding my actual goals, work on fetching from a database
        later
      </p>
      <p className="mb-3 text-xs">
        The concept here is to essentially recreate a finacial net worth chart.
        Instead of account balances, it will show goal completion progress.
        Instead of having transactions linked to the accounts, it will have
        actions taken toward the progress of the goal. Like Monarch or Empower,
        there is a master progress graph that can show progress over time. The
        graph's timeframe will can be changed. Closed accounts (goals that have
        been completed or abandoned) will show on timeframes that include them,
        but not on ones that don't.
      </p>
    </div>
  );
}
