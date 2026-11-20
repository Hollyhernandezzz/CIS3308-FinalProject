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
    const main = document.createElement("main");
    main.className = "income-page";
    const overview = document.createElement("div");
    overview.className = "overview";

    const monthlyIncome = document.createElement("section");
    monthlyIncome.className = "income";
    const incomeTitle = document.createElement("h1");
    incomeTitle.textContent = "Income";

    // Monthly budget left

    const monthlyBudgetLeft = document.createElement("section");
    monthlyBudgetLeft.className = "monthly-budget-left";
    monthlyBudgetLeft.textContent = "Monthly Budget Left";

    //transactions
    const transactions = document.createElement("section");
    transactions.className = "recent-transactions";

    const transactionsTitle = document.createElement("h2");
    transactionsTitle.textContent = "Search Bar";

    const transactionList = document.createElement("ul");
    transactionList.id = "transaction-list";

    transactions.append(transactionsTitle, transactionList);

    //main

    monthlyIncome.append(incomeTitle);
    overview.append(monthlyIncome, monthlyBudgetLeft);

    main.append(overview, transactions);
    document.body.append(header, main);
}

renderIncomePage();