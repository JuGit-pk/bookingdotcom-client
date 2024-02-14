"use client";
import { useAuth } from "@/providers/auth";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { logoutService } from "@/services";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuth();
  const mutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["validate-token"] });
      toast.success("Successfuly logout");
      router.push("/login");
    },
    onError: () => {
      toast.error("There is Error");
    },
  });
  const handleLogout = () => {
    mutation.mutate();
  };
  return (
    <header className="border-b border-b-muted bg-muted-foreground py-2">
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="font-mono font-black text-lg">bookingdotcom</h1>
        </div>
        <div className="space-x-4">
          {isLoggedIn && (
            <>
              <Button>My Bookings</Button>
              <Button onClick={handleLogout}>Logout</Button>
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
