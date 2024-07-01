import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "BudgetPaddy",
  description: "Budget and Expense tracker",
  image: "./BudgetPaddy-logo.png"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Toaster />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
