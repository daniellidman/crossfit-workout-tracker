'use client';

import { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export function MyDatePicker() {
  const today = new Date();
  const [selected, setSelected] = useState(today);

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.'
      }
    />
  );
}
