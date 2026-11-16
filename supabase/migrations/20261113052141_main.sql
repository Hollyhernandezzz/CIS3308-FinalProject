create table  if not exists eventEntry(
	E_ID serial ,
	event_title text,
	description text default 'no description',
	event_date_start date default current_date,   
	event_date_end date,

	constraint Event_PK primary key(E_ID)
);

create table  if not exists Categories(
    C_ID serial primary key,
    category text

);

Create table  if not exists userProfile(
	U_ID serial primary key,
	first_name text,
	last_name text
    
);

create table if not exists transactions(
    t_ID serial,
    title text,
    C_ID serial,
    amount decimal(65, 2),
    currency text,
    E_ID serial,
    T_Date date,
    T_Time time,

    constraint Transaction_PK primary key(t_ID),
	constraint Catergory_FK foreign key( C_ID) references Categories( C_ID),
	constraint User_FK foreign key(t_ID) references userProfile(U_ID),
    foreign key(E_ID) references eventEntry(E_ID)
);



Create table if not exists Friends_List (  
	U_ID serial,    
	F_ID serial,
	
	primary key(U_ID),
	foreign key(U_ID) references userProfile(U_ID),
	foreign key(F_ID) references userProfile(U_ID)
);

Create table if not exists Balance (
 account_ID serial  references userProfile(U_ID),
Total_balance decimal(65, 2),
Annual_Budget decimal(65, 2),
monthly_Budget decimal(65, 2)

);