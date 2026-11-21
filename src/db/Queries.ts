
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient<Database>(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
// )
//-----------------------------------------------------//

import  "../../database.types.ts"
import {supabase} from "../supabaseClient.ts"

//------------ Display information -------------------//

export  const showEventEntries = async() =>{
  const{data} = await supabase.from('evententry')
  .select('distinct(event_title)');
  return data;
};

export  const showTransactions = async() =>{
  const{data} = await supabase.from('transactions')
  .select('*').order('T_Date', { ascending: false });
  return data;
};

// only selects amount. This function may be necessary for updating
//the total balance by using the output as an input param for
//updateBalance rpc
export  const showTransactionAmount = async() =>{
  const{data} = await supabase.from('transactions')
  .select('amount').order('t_id', {ascending: false}).limit(1).single();
  return data;
};

export  const showAnnualBudget = async() =>{
  const{data} = await supabase.from('balance')
  .select('Annual_Budget');
  return data;
};

export  const showRequests = async() =>{
  const{data} = await supabase.from('transactions')
  .select('*').neq('f_id', null);
  return data;
};

export  const showFriendsList = async() =>{
  const{data} = await supabase.from('friends_list')
  .select('f_id');
  return data;
};

export const showTotalBalance = async() =>{
  const{data} = await supabase.from('balance')
  .select('total_balance');
  return data;
};

export const showTotalEventExpenses = async(event: number) =>{
  const{data} = await supabase.rpc('sumeventexpenses', {eventid: event})
  return data;
};

export const showTotalMonthlyExpense = async(start_date: string, end_date: string) =>{
  const{data} = await supabase.from('transactions')
  .select('*').gte("t_date", end_date).lte("t_date", start_date)
  //.is('f_id', null)
  return data;
};

export const filterByEvent = async(e_id: number) =>{
  const{data} = await supabase.from('transactions')
  .select('*').eq("e_id", e_id).single();
  return data;
};


export  const showTotalDebt = async() =>{
  const{data} = await supabase.rpc('showtotaldebt');
  return data;
};

//-----------------------------------------------------//

//-------------- update information  ------------------//

export  const updatePayment = async(payment: number) =>{
  let userInput = payment;
  const{data} = await supabase.from('transactions')
  .select('amount')
  .neq('f_id', null).single()
  const updatedAmount = data.amount - userInput;

  await supabase.from('transactions')
  .update('amount', updatedAmount).neq('f_id', null).eq('f_id', 'u_id')
};








export const updateBalance = async(amount: number) =>{
  try{ 
    let { data: balance } = await supabase
  .rpc('updatebalance', {updateamount: amount}); 
  if(balance){console.log(balance)}
  return balance;
  }
  
  catch(error){
    console.error(error)
  }
};

//-----------------------------------------------------//

//--------     insert new information   ---------------//

export const newTransaction = async(amount: number, category: number, currency: string,
  event: number, friend: string, shortdesc: string, date: string, type: string, 
  title:string, user: string) =>{
  try{ 
    const { data: transaction } = await supabase
    .from('transactions').insert({amount: amount, c_id: category, currency: currency, 
    e_id: event, f_id: friend, short_description: shortdesc, t_date: date, t_type: type,
    title: title, u_id: user
    }).select();
  
    if(transaction){
      console.log(transaction)
    }
    return transaction;
    
  }
  catch(error){
    console.error(error)
    
  }
};

export const createBalance = async(UserID: string, 
  annualBudget: number, initializeBalance: number) =>{
  try{ 
    let { data: balance } = await supabase
    .from('balance').insert({account_id: UserID, 
      annual_budget: annualBudget, 
      total_balance: initializeBalance}).select();
  
    if(balance){console.log(balance)}
    return balance;
  }
  catch(error){
    console.error(error)
  }
};

//-----------------------------------------------------//