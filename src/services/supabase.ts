import { createClient } from '@supabase/supabase-js'
import { type Todo } from '../types'
import 'vite/client'

const API = import.meta.env.VITE_API_KEY

const supabase = createClient('https://pkphvrebigdustfktimi.supabase.co', API)

export const AddTodo = async (title: string): Promise<boolean> => {
  try {
    await supabase
      .from('TODOs')
      .insert([{ title, completed: false }])
      .select()
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const GetTodos = async (): Promise<Todo[] | null> => {
  const { data } = await supabase
    .from('TODOs')
    .select('*')
  return data
}

export const CompleteTodo = async (id: number): Promise<void> => {
  await supabase
    .from('TODOs')
    .update({ completed: true })
    .eq('id', id)
    .select()
}
