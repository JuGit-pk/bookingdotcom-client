"use client";
import { validateTokenService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

const AuthContext = createContext({ isLoggedIn: false });

interface IProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: IProps) {
  const { isError } = useQuery({
    queryKey: ["validate-token"],
    queryFn: validateTokenService,
    retry: false,
  }); // call everytime when the page is refreshed or route is changed
  return (
    <AuthContext.Provider value={{ isLoggedIn: !isError }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
