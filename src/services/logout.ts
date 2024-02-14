import { API_BASE_URL } from "@/config/constants";

export const logoutService = async () => {
  const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "post",
  });

  if (!res.ok) {
    throw new Error("Failed to Logout");
  }
  return res.json();
};
