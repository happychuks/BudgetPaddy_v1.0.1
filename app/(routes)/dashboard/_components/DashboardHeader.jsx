import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";

function DashboardHeader({ onMenuClick }) {
  return (
    <div className="p-5 shadow-sm border-b flex">
      <button className="md:hidden p-2 bg-[#4845d2] hover:bg-[#5867d4] text-white font-bold py-1 px-2 mr-4 text-xs rounded" onClick={onMenuClick}>
        <a href="../../dashboard" class="font-bold ">
        Dashboard
        </a>
        
      </button>
      <button className="lg:hidden md:hidden sm:block bg-[#4845d2] hover:bg-[#5867d4] text-white font-bold py-1 px-2 mr-4 text-xs rounded" onClick={onMenuClick}>
        <a href="../../dashboard/budgets" class="font-bold ">
        Budgets
        </a>
        
      </button>
      <button className="lg:hidden md:hidden sm:block bg-[#4845d2] hover:bg-[#5867d4] text-white font-bold py-1 px-2 mr-4 text-xs rounded" onClick={onMenuClick}>
        <a href="../../dashboard/expenses" class="font-bold ">
        Expenses
        </a>
        
      </button>   
      
      <div className="absolute top-0 right-0 flex gap-2 p-2">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
