# BudgetPaddy 
## Budget / Expense Tracker Website
![budgetpaddy logo](./public/BudgetPaddy-logo.png)

## Introduction
This project is a Budget and Expense Tracker Website built using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), Drizzle ORM, PostgreSQL, and Tailwind CSS. The application allows users to create budgets, add expenses, and visualize their spending with a bar chart.

## Features
**User Profile:**
Users can create profile using Google OAuth or via sign-up form

**Budget Management:** 
Users can create budgets for different expenses.

**Expense Tracking:** 
Add expenses to each budget and track them effectively.

**Filtering:** 
View all expenses or filter by specific budgets.

**Data Visualization:** 
A bar chart is provided for visual representation of expenses within each budget.

## Technologies Used
**Next.js:** React framework for building server-side rendered applications.

**Drizzle ORM:** TypeScript ORM for PostgreSQL, providing a type-safe data access layer.

**PostgreSQL:** Relational database for storing application data.

**Tailwind CSS:** Utility-first CSS framework for designing responsive user interfaces.

**Clerk:** [Clerk](https://clerk.com/) is a User Management Platform 

## Installation

**1) Clone the repository:**
```bash
git clone https://github.com/happychuks/BudgetPaddy_v1.0.1
cd BudgetPaddy_v1.0.1
```

**2) Install dependencies:**
```bash
npm install #or yarn install
```
**3) Set up environment variables:**

Create a .env.local file in the root directory.

Add the following environment variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_DATABASE_URL=
```

**4) Run database migrations:**
```bash
npm run db:push

npm run db:studio
```
**5) Start the development server:**
```bash
npm run dev
**or**
yarn dev
```
**6) Open your browser and navigate to:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
Check the deployed application here [BudgetPaddy_v1.0.1](https://budgetpaddy.vercel.app/)
- Create budgets for various expenses.

- Add expenses to each budget.

- Use the bar chart to visualize expenses within each budget.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Author

- Happy Felix Chukwuma - [Github](https://github.com/happychuks) / [Twitter](https://twitter.com/code_with_Felix) / [LinkedIn](https://www.linkedin.com/in/happyfelixchukwuma/)

## Contributing 
There are no contributors yet. Want to be the first ?

If you want to contribute to this project, please read the [contribution guide](./CONTRIBUTING.md).

## Licensing
View License information [here](./LICENSE)