'use client';

import { MyDatePicker } from '../_components/CalendarDatePicker';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import Link from 'next/link';

export function DayWorkoutLog({ wods, lifts }) {
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const [hidden, setHidden] = useState(true);

  const selectedReformatted = selected.toISOString().slice(0, 11) + '00:00:00';

  const filteredWods = wods.filter((wod) => wod.date === selectedReformatted);
  const filteredWeightlifting = lifts.filter(
    (lift) => lift.date === selectedReformatted,
  );

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateInWords =
    selected.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)
      ? 'Today'
      : selected.toLocaleDateString('en-US', options);

  return (
    <div>
      <h1 className="mt-5 text-4xl font-bold">{`${dateInWords}`}</h1>
      <div>
        <button onClick={() => setHidden(!hidden)}>
          {hidden ? 'Show' : 'Hide'} Calendar
        </button>
        {hidden ? (
          ''
        ) : (
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
              selected
                ? `Selected: ${selected.toLocaleDateString()}`
                : 'Pick a day.'
            }
          />
        )}
      </div>

      <div className="relative flex">
        <div className="w-1/2">
          <h2 className="text-lg font-bold">WODs</h2>
          {filteredWods.map((wod, index) => (
            <div key={index}>
              <h1>{wod.name}</h1>
              <p>
                Scoring: {wod.scoreType} Scale:{wod.scale}
                Time: {wod.timeMin}:{wod.timeSec}
                Description: {wod.workoutDescription} Notes:{wod.notes}
              </p>
            </div>
          ))}
        </div>

        <div className="w-1/2">
          <h2 className="text-lg font-bold">Weightlifting</h2>
          {filteredWeightlifting.map((lift, index) => (
            <div key={index}>
              <h1>{lift.movement}</h1>
              <p>
                Reps: {lift.reps} Weight:{lift.weight} Notes:{lift.notes}
              </p>
            </div>
          ))}
        </div>
      </div>

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
