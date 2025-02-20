import { supabase } from './supabase';

export async function getWods() {
  let { data: wodLog, error } = await supabase.from('wodLog').select('*');

  if (error) {
    console.error(error);
    throw new Error('WODs could not be loaded');
  }

  return wodLog;
}

export async function getWeightlifting() {
  let { data: weightlifting, error } = await supabase
    .from('weightlifting')
    .select('*');

  if (error) {
    console.error(error);
    throw new Error('Lifts could not be loaded');
  }

  return weightlifting;
}
