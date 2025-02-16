'use client';

import { useState } from 'react';
import Form from 'next/form';
import { useRouter } from 'next/navigation';
import { logWeightlifting } from '@/app/_lib/logWorkout';

export default function LogWeightliftingForm({ loadedMovements }) {
  const router = useRouter();

  const [formValues, setFormValues] = useState([
    { date: '', reps: 0, movement: '', weight: 0 },
  ]);

  async function handleFormChange(index, e) {
    let data = [...formValues];
    data[index][e.target.name] = e.target.value;
    setFormValues(data);
  }

  const addFields = () => {
    let newMovement = { date: '', reps: 0, movement: '', weight: 0 };
    setFormValues([...formValues, newMovement]);
  };

  const removeFields = (index) => {
    let data = [...formValues];
    data.splice(index, 1);
    setFormValues(data);
  };

  async function submit(e) {
    e.preventDefault();
    console.log(formValues);

    //Send to Supabase
    await logWeightlifting(formValues);

    //Return to Work Out Page
    router.push('/workout', { scroll: false });
  }

  return (
    <Form onSubmit={submit}>
      {formValues.map((input, index) => {
        return (
          <div key={index}>
            <input
              name="date"
              type="date"
              value={input.date}
              onChange={(e) => handleFormChange(index, e)}
            />
            <input
              name="reps"
              type="number"
              placeholder="Reps"
              value={input.reps}
              onChange={(e) => handleFormChange(index, e)}
            />
            <select
              name="movement"
              value={input.movement}
              onChange={(e) => handleFormChange(index, e)}
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
              type="number"
              placeholder="Pounds"
              value={input.weight}
              onChange={(e) => handleFormChange(index, e)}
            />
            <button type="button" onClick={() => removeFields(index)}>
              ➖
            </button>
          </div>
        );
      })}
      <button type="button" onClick={addFields}>
        ➕
      </button>

      <button type="submit" onClick={submit} className="block">
        Submit
      </button>
    </Form>
  );
}
