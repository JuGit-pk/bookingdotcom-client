import Link from "next/link";

import LoginForm from "@/components/auth/forms/login";
import ProductHighlights from "@/components/auth/product-highlights";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Login() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background lg:bg-muted">
      <div className="container relative grid h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background lg:mx-10 lg:grid-cols-2 lg:px-0 lg:shadow-md xl:mx-0 xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <ProductHighlights />
        <div className="mx-auto md:p-8 lg:p-10 lg:pt-32 xl:max-w-xl">
          <Link
            href="/register"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 hidden md:right-8 md:top-8 lg:inline-block",
            )}
          >
            Create Account
          </Link>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to Your Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to access your account.
              </p>
            </div>
            <LoginForm />
            <p className="pt-16 text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Devorium, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
