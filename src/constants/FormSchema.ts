import { object, string } from "yup";

const LoginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export { LoginSchema };
