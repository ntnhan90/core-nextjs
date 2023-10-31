import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .required("Required")
    .max(26, "Name with at most 26 characters")
    .min(3, "Name contains at least 3 characters"),

  url: yup
    .string()
    .required("Required")
    .max(26, "Url with at most 26 characters")
    .min(3, "Url contains at least 3 characters")
    .matches(/^[a-zA-Z0-9]*$/, "Url can only contain letters and numbers"),
});
