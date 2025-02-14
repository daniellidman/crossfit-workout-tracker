'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from 'next/form';

export default function LogWeightliftingForm({ loadedMovements }) {
  const router = useRouter();
  const [formValues, setFormValues] = useState([
    {
      movement: '',
      date: '',
      scoreType: '',
      scale: '',
      weight: 0,
      reps: 0,
      workoutDescription: '',
      notes: '',
    },
  ]);

  async function handleSubmit(formData) {
    //

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

    await logWeightlifting(newSubmission);

    // Navigate to new page
    router.push('/workout', { scroll: false });
  }

  return (
    <Form action={handleSubmit}>
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

      <input
        name="reps"
        id="reps"
        type="number"
        placeholder="Reps"
        value={formValues.reps || ''}
        onChange={(e) => setFormValues({ ...formValues, reps: e.target.value })}
      />

      <select
        name="movement"
        id="movement"
        value={formValues.movement}
        onChange={(e) =>
          setFormValues({ ...formValues, movement: e.target.value })
        }
      >
        <option value="">-Select-</option>
        {loadedMovements.map((mov) => (
          <option value={mov.name} key={mov.id}>
            {mov.name}
          </option>
        ))}
      </select>

      <input
        name="weight"
        id="weight"
        type="number"
        placeholder="Pounds"
        value={formValues.weight || ''}
        onChange={(e) =>
          setFormValues({ ...formValues, weight: e.target.value })
        }
      />

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
