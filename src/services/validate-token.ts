import { API_BASE_URL } from "@/config/constants";

export const validateTokenService = async () => {
  const res = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Token Invalid");
  }
  return res.json();
};
