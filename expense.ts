import data from "./transactions.json";
function renderIncomePage(): void {
    // Navigation
    const header = document.createElement("header");

    const navbar = document.createElement("nav");
    navbar.className = "topbar";

    const homeLink = document.createElement("a");
    homeLink.className = "brand";
    homeLink.href = "mainpage.html";
    homeLink.textContent = "Budgeting";

    const appTitle = document.createElement("span");
    appTitle.className = "app-title";
    const budgetingTab = document.createElement("span");
    budgetingTab.textContent = "Budgeting App";
    const splitTab = document.createElement("span");
    splitTab.textContent = "Split";
    appTitle.append(budgetingTab, splitTab);

    const accountMenu = document.createElement("details");
    accountMenu.className = "account";

    const accountLabel = document.createElement("summary");
    accountLabel.textContent = "Account";

    const accountPanel = document.createElement("div");
    accountPanel.className = "account-panel";
    accountPanel.textContent = "Guest account";

    accountMenu.append(accountLabel, accountPanel);
    navbar.append(homeLink, appTitle, accountMenu);
    header.append(navbar);

    // Income amount show
    let sum: number = 0;
    const transactionList = document.createElement("ul");
    for (const transaction of data.transactions) {
        if (transaction.t_type === "expense") {
            const item = document.createElement("li");
            sum += transaction.amount;
            item.textContent =
                item.textContent = `${transaction.t_date}\t${transaction.title}\t${transaction.amount} ${transaction.currency} \t•••`;

            transactionList.append(item);
        }
    }
    const main = document.createElement("main");
    main.className = "income-page";
    const overview = document.createElement("div");
    overview.className = "overview";

    const monthlyexpense = document.createElement("section");
    monthlyexpense.className = "expense";
    const incomeTitle = document.createElement("h1");
    incomeTitle.textContent = `Expense: ${sum} JPY`;

    // Monthly budget left

    const monthlyBudgetLeft = document.createElement("section");
    monthlyBudgetLeft.className = "monthly-budget-left";
    let budget: number = 10000000;
    budget = budget - sum;
    monthlyBudgetLeft.textContent = `Monthly Budget Left\n ${budget} JPY`;

    //transactions
    const transactions = document.createElement("section");
    transactions.className = "recent-transactions";

    const transactionsTitle = document.createElement("h2");
    transactionsTitle.textContent = "Search Bar";

    
    transactionList.id = "transaction-list";

    //New button
    const toolbar = document.createElement("div");
    toolbar.className = "transaction-toolbar";

    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.textContent = "New";

    toolbar.append(transactionsTitle, newButton);
    transactions.append(toolbar, transactionList);
    
    //main

    monthlyexpense.append(incomeTitle);
    overview.append(monthlyexpense, monthlyBudgetLeft);

    main.append(overview, transactions);
    document.body.append(header, main);
}

renderIncomePage();