import { useFormik } from "formik";

import { LoginFormInitialValues } from "../../../constants/FormInitialValues";
import { LoginSchema } from "../../../constants/FormSchema";
import { Button, Form, FormField, Input, Label } from "./auth-form.styles";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const push = useNavigate();

  const formik = useFormik({
    initialValues: LoginFormInitialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      push("/dashboard");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username: </Label>
        <Input
          type="text"
          id="username"
          {...formik.getFieldProps("username")}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password: </Label>
        <Input
          type="text"
          id="password"
          {...formik.getFieldProps("password")}
        />
      </FormField>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
