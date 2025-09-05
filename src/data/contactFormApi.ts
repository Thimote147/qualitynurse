import { supabase } from './supabaseClient';
import { FormData } from '../types';

export async function submitContactForm(data: FormData) {
  // Insert the contact form data into the 'contacts' table
  const { error } = await supabase.from('contacts').insert([data]);
  return error;
}
