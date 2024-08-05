import * as yup from "yup";

const SIGN_UP_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .required()
    .min(2)
    .max(32)
    .matches(
      /^[A-Z][a-z]{1,31}$/,
      "First name must starts with A-Z and has at least one a-z"
    ),
  lastName: yup
    .string()
    .required()
    .min(2)
    .max(32)
    .matches(
      /^[A-Z][a-z]{1,31}$/,
      "Last name must starts with A-Z and has at least one a-z"
    ),
  userName: yup
    .string()
    .required()
    .min(3)
    .max(32)
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "User name must be alphanumeric and can include underscores"
    ),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /(?=.*[a-z])/,
      "Password must include at least one uppercase letter"
    )
    .matches(/(?=.*[A-Z])/, "Password must include at one lowercase letter")
    .matches(/(?=.*\d)/, "Password must include at one number")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must include at least one special character"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmation passwords must match password")
    .required(),
  agreement: yup.boolean().required("You must accept the agreement"),
});

const SIGN_IN_VALIDATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /(?=.*[a-z])/,
      "Password must include at least one uppercase letter"
    )
    .matches(/(?=.*[A-Z])/, "Password must include at one lowercase letter")
    .matches(/(?=.*\d)/, "Password must include at one number")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must include at least one special character"
    ),
});

export { SIGN_UP_VALIDATION_SCHEMA, SIGN_IN_VALIDATION_SCHEMA };
