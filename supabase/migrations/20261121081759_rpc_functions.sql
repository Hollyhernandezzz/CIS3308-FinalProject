-- Database Functions

-- sum

create or replace function sumEventExpenses(eventID int)
returns numeric
language sql
as $$
    select sum(amount) from transactions
    where e_id = eventID;
$$;

create or replace function showTotalDebt()
returns numeric
language sql
as $$
    select sum(amount) from transactions
    where f_id is not null;
$$;

-- Update 

create or replace function updateBalance(updateAmount int)
returns void
language sql
as $$
    update Balance
    set Total_balance = Total_balance + updateAmount;
$$;