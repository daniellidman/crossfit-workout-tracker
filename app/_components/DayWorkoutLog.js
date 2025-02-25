'use client';

import { MyDatePicker } from '../_components/CalendarDatePicker';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import Link from 'next/link';
import { LiftingCard, WodCard } from './WodCard';

export function DayWorkoutLog({ wods, lifts }) {
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const [hidden, setHidden] = useState(true);

  const selectedReformatted = selected.toISOString().slice(0, 11) + '00:00:00';

  const filteredWods = wods.filter((wod) => wod.date === selectedReformatted);
  const filteredWeightlifting = lifts.filter(
    (lift) => lift.date === selectedReformatted,
  );
  const dayLiftingSessions = Object.groupBy(
    filteredWeightlifting,
    ({ session }) => session,
  );
  const dayLiftingSessionsArray = Object.values(dayLiftingSessions);

  const options = {
    weekday: 'short',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };
  const dateInWords =
    selected.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)
      ? 'Today'
      : selected.toLocaleDateString('en-US', options);

  let previousDate = new Date();
  let nextDate = new Date();

  previousDate.setDate(selected.getDate() - 1);
  nextDate.setDate(selected.getDate() + 1);

  const previousDateInWords = previousDate.toLocaleDateString('en-US', options);

  const nextDateInWords = nextDate.toLocaleDateString('en-US', options);

  function handlePreviousButton() {
    setSelected(previousDate);
  }

  console.log('previousDate:', previousDate);
  console.log('nextDate:', nextDate);

  return (
    <div className="my-10">
      <div className="relative flex justify-between">
        <button
          className="mt-5 text-4xl font-bold"
          onClick={() => setSelected(previousDate)}
        >
          {'<'}
        </button>
        <h1 className="mt-5 text-2xl font-bold">{previousDateInWords}</h1>
        <h1
          className="mt-5 text-2xl font-bold"
          onClick={() => setHidden(!hidden)}
        >{`🗓️ ${dateInWords}`}</h1>
        <h1 className="mt-5 text-2xl font-bold">{nextDateInWords}</h1>
        <button
          className="mt-5 text-4xl font-bold"
          onClick={() => setSelected(nextDate)}
        >
          {'>'}
        </button>
      </div>
      <div>
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
      {filteredWods.map((wod, index) => (
        <WodCard wod={wod} key={index} />
      ))}

      {dayLiftingSessionsArray.map((sesh, index) => (
        <LiftingCard sesh={sesh} key={index} />
      ))}
    </div>
  );
}
