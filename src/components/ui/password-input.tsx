import React, { useState, forwardRef } from "react";
import { Input } from "./input";
import { Icons } from "@/components/icons";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={className}
          ref={ref}
          {...props}
        />
        <div
          className="absolute inset-y-0 right-4 flex cursor-pointer items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <Icons.eyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Icons.eye className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
