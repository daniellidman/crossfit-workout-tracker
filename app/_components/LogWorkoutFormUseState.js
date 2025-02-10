'use client';

import { useState } from 'react';

export default function LogWorkoutFormUseState() {
  const [fieldValues, setFieldValues] = useState([{}]);

  const handleChange = (event) => {
    setFieldValues(event.target.value);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form action={() => handleSubmit}>
      <p>Date</p>
      <input type="date" name="date" value={fieldValues} />
      <p>Workout Name</p>
      <input name="name" />
      <p>Scoring</p>
      <select name="scoreType">
        <option value="">-Score Type-</option>
        <option value="forTime">For Time</option>
        <option value="weightlifting">Weight Lifting</option>
        <option value="roundsAndReps">Rounds & Reps</option>
        <option value="reps">Reps</option>
        <option value="distance">Distance</option>
        <option value="calories">Calories</option>
      </select>
      <p>Scale</p>
      <select defaultValue="rx" name="scale">
        <option value="scaled">Scaled</option>
        <option value="rx">RX</option>
        <option value="rxPlus">RX+</option>
      </select>
      <p>Time</p>
      <input type="number" name="timeMinutes" />
      <input type="number" name="timeSeconds" />
      <p>Workout Builder</p>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
