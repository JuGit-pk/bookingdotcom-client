"use client";
import { useAuth } from "@/providers/auth";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className="border-b border-b-muted bg-muted-foreground py-2">
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="font-mono font-black text-lg">bookingdotcom</h1>
        </div>
        <div className="space-x-4">
          {isLoggedIn && (
            <>
              <Link href="#">My Bookings</Link>
              <Button>Logout</Button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link
                href="/login"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Signin
              </Link>
              <Link
                href="/register"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
