import * as Yup from "yup";

export const SignupValidations = () => {
  return (
    Yup.object().shape({
      email: Yup.string().email("Invalid email, please provide a valid email.").required("Email is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      name: Yup.string().max(255).required("First name is required")
    })
  );
};