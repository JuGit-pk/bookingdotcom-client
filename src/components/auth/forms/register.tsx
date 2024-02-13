"use client";

import * as React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { PasswordInput } from "@/components/ui/password-input";
import { registerSchema } from "@/schemas/auth";
import { useMutation } from "@tanstack/react-query";
import { registerService } from "@/services";
import { toast } from "sonner";

export type TFormData = z.infer<typeof registerSchema>;
export default function RegisterForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<TFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  function onSubmit(values: TFormData) {
    const { firstName, lastName, password, email } = values;
    const data = { firstName, lastName, password, email };
    // alert(JSON.stringify(values, null, 2));
    mutation.mutate(data);
  }
  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    placeholder="first name"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="name"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="p-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    placeholder="last name"
                    type="text"
                    autoCapitalize="none"
                    autoComplete="name"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="p-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="p-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    id="password"
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className="p-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    id="confirmPassword"
                    disabled={isLoading}
                    className="p-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button
            className="p-5"
            type="submit"
            disabled={
              Object.keys(form.formState.errors).length > 0 || isLoading
            }
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Create account
          </Button>
        </form>
      </Form>
      {/* seperator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      {/* buttons */}
      <div className="grid gap-2 md:grid-cols-2">
        <Button
          className="p-5"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Login with Google
        </Button>
        <Button
          className="p-5"
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.apple className="mr-2 h-4 w-4" />
          )}{" "}
          Login with Apple
        </Button>
      </div>
    </div>
  );
}
