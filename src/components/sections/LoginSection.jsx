import { Form, Formik } from "formik";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import * as Yup from "yup";

const LoginSection = () => {
  const loginSchema = Yup.object().shape({
    userName: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <h3 className="card_title">WISPMAN WIFI LOGIN</h3>
      <h4 className="card_desc">
        (Enter your username plus password to login)
      </h4>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <CustomInput type="text" placeholder="Username" name="userName" />
            <CustomInput
              type="password"
              placeholder="Password"
              name="password"
            />
            <CustomButton type="submit" text="Login" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default LoginSection;
