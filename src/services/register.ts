import { TFormData } from "@/components/auth/forms/register";
import { API_BASE_URL } from "@/config/constants";

export const registerService = async (formData: TFormData) => {
  try {
    const res = await fetch(`${API_BASE_URL as string}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const resBody = await res.json();

    if (!res.ok) {
      throw new Error(resBody.message);
    }
    return res;
  } catch (error) {
    throw new Error();
  }
};
