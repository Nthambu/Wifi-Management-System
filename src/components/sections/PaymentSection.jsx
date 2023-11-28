import { useState, useEffect } from "react";
import Subscription from "../Subscription";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const PaymentSection = () => {
  const [paymentValue, setPaymentValue] = useState(null);
  const [modal, setModal] = useState(false);

  console.log("First value ".paymentValue);
  const paymentInitialValues = {
    amount: paymentValue,
    phoneNumber: "",
  };

  const paymentSchema = Yup.object().shape({
    amount: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const handleSubmit = (actions, values) => {
    console.log(values.amount);
    actions.resetForm();
    setPaymentValue(0);
  };

  useEffect(() => {
    setModal(true);
    console.log(paymentValue);
  }, [paymentValue]);

  return (
    <>
      <div className="packages_wrapper grid">
        <Subscription setPaymentValue={setPaymentValue} />
      </div>

      {paymentValue && modal && (
        <div className="modal_wrapper">
          <div className="modal_content">
            <h4 className="modal_titles">
              You are about to Subscribe KSH : {paymentValue} plan
            </h4>
            <h6 className="modal_subtitle">press okay to continue</h6>
            <CustomButton
              type="button"
              onClick={() => setModal(false)}
              text="okay"
              className="button_modal"
            />
          </div>
        </div>
      )}

      <div className="payment_wrapper">
        <Formik
          initialValues={paymentInitialValues}
          validationSchema={paymentSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <CustomInput
                name="amount"
                type="text"
                placeholder="Amount will appear here"
              />
              <CustomInput
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
              />
              <CustomButton
                text="Pay Now"
                type="submit"
                onClick={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default PaymentSection;
