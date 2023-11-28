import { Form, Formik } from "formik";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import * as Yup from "yup";

const ReconnectSection = () => {
  const reconnectSchema = Yup.object().shape({
    mpesaCode: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <h3 className="card_title">Reconnect account</h3>
      <h4 className="card_desc">
        (Enter M-pesa code below from the payment you made eg:QAH9QWZRR)
      </h4>
      <Formik
        initialValues={{
          mpesaCode: "",
        }}
        validationSchema={reconnectSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <CustomInput
              type="text"
              name="mpesaCode"
              placeholder="Enter M-pesa Code you paid with"
            />
            <CustomButton type="submit" text="Reconnect" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ReconnectSection;
