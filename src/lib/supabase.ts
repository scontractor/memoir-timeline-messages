import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Prediction {
  id: string;
  sender: string;
  receiver: string;
  content: string;
  unlock_date: string;
  created_at: string;
}

// Database functions
export const getPredictions = async (): Promise<Prediction[]> => {
  const { data, error } = await supabase
    .from('predictions')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Error fetching predictions:', error);
    return [];
  }

  return data || [];
};

export const addPrediction = async (prediction: Omit<Prediction, 'id' | 'created_at'>): Promise<Prediction | null> => {
  const { data, error } = await supabase
    .from('predictions')
    .insert([prediction])
    .select()
    .single();

  if (error) {
    console.error('Error adding prediction:', error);
    return null;
  }

  return data;
}; 