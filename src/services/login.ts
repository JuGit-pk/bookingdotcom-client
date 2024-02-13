import { TFormData } from "@/components/auth/forms/login";
import { API_BASE_URL } from "@/config/constants";

export const loginService = async (formData: TFormData) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const resBody = await res.json();
  if (!res.ok) {
    throw new Error(resBody.message);
  }
  return resBody;
};
