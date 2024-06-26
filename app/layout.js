import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "BudgetPaddy",
  description: "Budget and Expense tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
