'use server';

import { supabase } from './supabase';

export async function logWorkout(newSubmission) {
  const {
    name,
    date,
    scoreType,
    scale,
    timeMin,
    timeSec,
    workoutDescription,
    notes,
  } = newSubmission;

  const { data, error } = await supabase
    .from('wodLog')
    .insert([
      {
        name,
        date,
        scoreType,
        scale,
        timeMin,
        timeSec,
        workoutDescription,
        notes,
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}

export async function logWeightlifting(newSubmission) {
  const {
    name,
    date,
    scoreType,
    scale,
    timeMin,
    timeSec,
    workoutDescription,
    notes,
  } = newSubmission;

  const { data, error } = await supabase
    .from('weightlifting')
    .insert([
      {
        name,
        date,
        scoreType,
        scale,
        timeMin,
        timeSec,
        workoutDescription,
        notes,
      },
    ])
    .select();

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Data inserted successfully:', data);
  }
}

export async function loadMovements() {
  const { data, error } = await supabase.from('movements').select('*');

  if (error) {
    console.error(error);
  }

  return data;
}
