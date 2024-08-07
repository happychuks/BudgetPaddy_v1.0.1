"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

function Header() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <div className="p-3 flex justify-between items-center border shadow-sm">
      <div className="flex items-center gap-2">
        <Image
          src={"./logo.svg"}
          alt="BudgetPaddylogo"
          width={80}
          height={50}         
        />
        <div className="text-xs md:text-lg font-bold text-primary"><a href="./">BudgetPaddy</a></div>
      </div>
      <div className="hidden md:flex items-center gap-4 text-primary">
        <Link href={"./"} className="text-sm font-bold">
          HOME
        </Link>
        <Link href={"./About"} className="text-sm font-bold">
          ABOUT
        </Link>
        <Link href={"/Contact"} className="text-sm font-bold">
          CONTACT
        </Link>
        <Link href={"/Documentation"} className="text-sm font-bold">
          DOCUMENTATION
        </Link>
      </div>
      <div className="flex gap-2">
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>SIGN IN</Button>
        </Link>
        
      )}
      <Link href={"/sign-up"}>
          <Button >SIGN UP</Button>
        </Link></div>
    </div>
  );
}

export default Header;
