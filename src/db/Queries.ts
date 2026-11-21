
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)

export  const showEventEntries = async() =>{
await supabase.from('eventEntry')
.select('event_title') 
};

export  const filterByEvent = async() =>{
await supabase.from('transactions')
.select('*').eq('E_ID', `$1`)
};

export  const showTransactions = async() =>{
await supabase.from('transactions')
.select('*').order('T_Date', { ascending: false })
};

export  const getAnnualBudget = async() =>{
await supabase.from('Balance')
.select('Annual_Budget')
};

export  const showRequests = async() =>{
await supabase.from('transactions')
.select('*').neq('F_ID', null)
};


export  const showTotalRequestedAmount = async() =>{
const{data} = await supabase.from('transactions')
.select('amount').neq('F_ID', null)

// let sum = 0
// for(let i = 0; i < data?.length ; i++){
//     sum += data[i].amount
// }
// return sum
};

export  const updatePayment = async() =>{
const{data} = await supabase.from('transactions')
.select('amount')
.neq('F_ID', null).single()
const updatedAmount = data.amount - $1


await supabase.from('transactions')
.update('amount', updatedAmount).neq('F_ID', null).eq('F_ID', 'U_ID')
};


