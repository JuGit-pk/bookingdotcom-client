export const registerSchema = z.object({
  firstName: z.string().min(2, { message: "at least 2 characters" }),
  lastName: z.string().min(2, { message: "at least 2 characters" }),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
  // .refine(
  //   (value) =>
  //     /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).{8,}$/.test(value),
  //   {
  //     message: "Must contain at least 1 number and 1 special character",
  //   },
  // ),
  // companyName: z.string().nonempty("Company name is required"),
  // country: z.string().nonempty("Country is required"),
});
