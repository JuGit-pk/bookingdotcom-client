import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RegisterForm from "@/components/auth/forms/register";
import ProductHighlights from "@/components/auth/product-highlights";

export default function RegisterAccountPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background lg:bg-muted">
      <div className="container relative grid h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background lg:mx-10 lg:grid-cols-2 lg:px-0 lg:shadow-md xl:mx-0 xl:max-w-[1280px] 2xl:max-w-[1536px]">
        <ProductHighlights />
        <div className="mx-auto md:p-8 lg:p-10 lg:pt-32">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 hidden md:right-8 md:top-8 lg:inline-block",
            )}
          >
            Login
          </Link>
          <div className="flex w-full flex-col justify-center space-y-6 sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account.
              </p>
            </div>
            <RegisterForm />
            <p className="px-8 text-center text-sm text-muted-foreground sm:w-[350px]">
              By clicking continue, you agree to our{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
