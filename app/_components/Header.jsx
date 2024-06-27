"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, useUser, SignInButton } from "@clerk/nextjs";
import { Link } from "next/link";

export default function Header() {
  const { isSignedIn, isLoaded, user } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src="/logo.svg" alt="BudgetPaddy Logo" width={100} height={100} />
      {isSignedIn ? 
        <UserButton /> : 
        <SignInButton>
          <Button>Get Started</Button>
          </SignInButton>    
      }
    </div>
  );
}
