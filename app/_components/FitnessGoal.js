export default function FitnessGoal({ goal }) {
  return (
    <div className="m-2 rounded-lg border-2 border-solid border-black border-opacity-50 bg-white bg-opacity-90 p-2">
      <h3 className="text-lg font-semibold">{goal.title}</h3>
      <p>
        <strong>
          Progress: {goal.progress} out of {goal.target} (
          {Math.floor((goal.progress / goal.target) * 100)}%)
        </strong>
      </p>
    </div>
  );
}
