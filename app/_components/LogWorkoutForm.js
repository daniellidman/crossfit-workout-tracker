'use client';

import { useState } from 'react';

export default function ReactForm() {
  const [formValues, setFormValues] = useState([
    {
      name: '',
      scale: '',
      scoreType: '',
      notes: '',
      quantity: 1,
      textInput: '',
      date: '',
      timeMin: 0,
      timeSec: 0,
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();

    // ERROR CATCHING
    if (!formValues.name) return;

    const newItem = {
      notes: formValues.notes,
      quantity: formValues.quantity,
      textInput: formValues.textInput,
      date: formValues.date,
      id: Date.now(),
    };

    // FORM SUBMIT FUNCTION
    console.log(newItem);

    // RESET FORM
    setFormValues({ notes: '', quantity: 1, textInput: '', date: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <option value="weightlifting">Weight Lifting</option>
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

      <button>Add</button>
    </form>
  );
}
