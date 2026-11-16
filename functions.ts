import { Temporal } from "@js-temporal/polyfill";

// user
interface Money
{
    currency: string,
    amount: number
}

interface User
{
    uid: number,
    username: string,
    mainCurrency?: string,
    balance: Money[]
}

////////////////////////////////////////////////

// transactions, goes into array
interface Transaction
{
    id: number,
    name: string,
    category: string,
    cost: Money,
    date?: Temporal.PlainDateTime,
    description?: string,
    uid: number
}
// typescript has a (new) built in date type called Temporal
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal
// read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime

const transaction_array: Transaction[] = [];

const get_transaction_by_category =
(
    userId: number,
    category: string
) => transaction_array

const get_recent_transactions = (transactions: Transaction[], cnt: number): Transaction[] => 
{
    const recent_transactions: Transaction[] = [];

    // number of recents can be adjusted, pushes stuff at the end of main transactions array to recent_transactions
    for(let i = 0; i < cnt; i++)
    {
        recent_transactions.push(transactions[transactions.length - (i + 1)]);
    }

    return recent_transactions;
}

const add_transaction = (transaction: Transaction) =>
{
    transaction_array.push(transaction);
}

////////////////////////////////////////////////

// expenses
interface Expense
{
    expenseId: number,
    title: string,
    cost: Money,
    date?: Temporal.PlainDateTime,
    description?: string,
    users: User[],
    imageLink?: string
}

const expenses: Expense[] = [];

const createExpense = (userID: User): Expense =>
{
    // todo
}

const createSharedExpense = (userIDs: User[]): Expense =>
{
    // todo
}

const sort_expense_by_currency =
(
    currency: string
) => expenses

////////////////////////////////////////////////

// income
interface Income
{
    transactionId: number,
    title: string,
    cost: Money,
    date?: Temporal.PlainDateTime,
}

const income_array: Income[] = [];

////////////////////////////////////////////////

// budgeting
const events_array: Expense[] = [];

interface Event
{
    id: number,
    events: Expense[],
    users: User[],
    total: number
}

const getCollaborator = () =>
{
    // todo
}

const setCollaborator = (FriendID: number) =>
{
    // todo
}

////////////////////////////////////////////////

//balance handling

const getCurrentBalance = (user: User): Money =>
{
    // todo
}

const getEventBalance = (event: Event): Money =>
{
    // todo
}

const calculateBalance = (money: Money, money2: Money): Money =>
{
    // todo
}

const calculateSplit = (money: Money, users: User[]): Money =>
{
    // todo
}