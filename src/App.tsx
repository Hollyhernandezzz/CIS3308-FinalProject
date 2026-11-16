import {createClient} from '@supabase/supabase-js'
import type {Database} from '../database.types'
const url=import.meta.env.VITE_SUPABASE_URL
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase=createClient<Database>(url,key)
const {data,error}=await supabase.from('profiles').select()
//const {data:auth_data,error:auth_err}=await supabase.auth.signUp({email:'email',pwd:'pwd'})
function App() {
  return <div>{!error?data[0]['display_name']:'no content'}</div>
}
export default App