'use server';

import { supabase } from './supabase';

export async function logWorkout(FormData) {
  const name = FormData.get('name');
  const date = FormData.get('date');
  const scoreType = FormData.get('scoreType');
  const scale = FormData.get('scale');
  const timeMin = FormData.get('timeMin');
  const timeSec = FormData.get('timeSec');
  const workoutDescription = FormData.get('workoutDescription');
  const notes = FormData.get('notes');

  // console.log(FormData);

  const { data, error } = await supabase
    .from('wodLog')
    .insert([
      {
        name: name,
        date: date,
        scoreType,
        scale,
        timeMin: timeMin,
        timeSec: timeSec,
        workoutDescription: workoutDescription,
        notes,
      },
    ])
    .select();
}
