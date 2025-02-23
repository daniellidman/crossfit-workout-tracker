'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from 'next/form';
import { logWorkout } from '../_lib/logWorkout';

export default function LogWorkoutForm() {
  const router = useRouter();
  const [formValues, setFormValues] = useState([
    {
      name: '',
      date: '',
      scoreType: '',
      scale: '',
      timeMin: 0,
      timeSec: 0,
      workoutDescription: '',
      notes: '',
    },
  ]);

  async function handleSubmit(formData) {
    // FORM SUBMIT FUNCTION
    const newSubmission = {
      name: formValues.name,
      date: formValues.date,
      scoreType: formValues.scoreType,
      scale: formValues.scale,
      timeMin: formValues.timeMin,
      timeSec: formValues.timeSec,
      workoutDescription: formValues.workoutDescription,
      notes: formValues.notes,
    };

    await logWorkout(newSubmission);

    // Navigate to new page
    router.push('/workout', { scroll: false });
  }

  return (
    <Form action={handleSubmit}>
      <label htmlFor="name" className="font-bold">
        Workout Name
      </label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder={`Workout ${new Date().toLocaleDateString()}`}
        value={formValues.name || ''}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        className="block w-3/4"
      />
      <label htmlFor="date" className="font-bold">
        Date
      </label>
      <input
        name="date"
        id="date"
        type="date"
        value={formValues.date || ''}
        onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
        className="block"
      />

      <label htmlFor="scoreType" className="font-bold">
        Scoring
      </label>
      <select
        name="scoreType"
        id="scoreType"
        value={formValues.scoreType}
        onChange={(e) =>
          setFormValues({ ...formValues, scoreType: e.target.value })
        }
        className="block"
      >
        <option value="">-Score Type-</option>
        <option value="forTime">For Time</option>
        <option value="roundsAndReps">Rounds & Reps</option>
        <option value="reps">Reps</option>
        <option value="distance">Distance</option>
        <option value="calories">Calories</option>
      </select>

      <label htmlFor="scale" className="font-bold">
        Scaling
      </label>
      <select
        name="scale"
        id="scale"
        value={formValues.scale}
        defaultValue="rx"
        onChange={(e) =>
          setFormValues({ ...formValues, scale: e.target.value })
        }
        className="block"
      >
        <option value="scaled">Scaled</option>
        <option value="rx">RX</option>
        <option value="rxPlus">RX+</option>
      </select>

      <label htmlFor="time" className="block font-bold">
        Time
      </label>
      <input
        name="timeMin"
        id="timeMin"
        type="number"
        placeholder="Minutes"
        value={formValues.timeMin || ''}
        onChange={(e) =>
          setFormValues({ ...formValues, timeMin: e.target.value })
        }
      />
      <input
        name="timeSec"
        id="timeSec"
        type="number"
        placeholder="Seconds"
        value={formValues.timeSec || ''}
        onChange={(e) =>
          setFormValues({ ...formValues, timeSec: e.target.value })
        }
      />

      <label htmlFor="workout details" className="block font-bold">
        Workout Details
      </label>
      <textarea
        name="workoutDescription"
        id="workoutDescription"
        value={formValues.workoutDescription}
        onChange={(e) =>
          setFormValues({ ...formValues, workoutDescription: e.target.value })
        }
        className="block w-3/4"
      ></textarea>

      <label htmlFor="notes" className="block font-bold">
        Notes
      </label>
      <textarea
        name="notes"
        id="notes"
        value={formValues.notes}
        onChange={(e) =>
          setFormValues({ ...formValues, notes: e.target.value })
        }
        className="block w-3/4"
      ></textarea>

      <button type="submit">Add</button>
    </Form>
  );
}
