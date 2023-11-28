import { useState, useEffect } from "react";
import Subscription from "../Subscription";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const PaymentSection = () => {
  const [amount, setAmount] = useState(null);
  const [modal, setModal] = useState(false);

  console.log("First value ".paymentValue);
  const paymentInitialValues = {
    amount: amount,
    phoneNumber: "",
  };

  const paymentSchema = Yup.object().shape({
    amount: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const handleSubmit = (actions, values) => {
    console.log("Amount : ".amount, "Number : ".values.phoneNumber);
    actions.resetForm();
    setAmount(0);
  };

  useEffect(() => {
    setModal(true);
  }, [amount]);

  return (
    <>
      <div className="packages_wrapper grid">
        <Subscription setAmount={setAmount} />
      </div>

      {amount && modal && (
        <div className="modal_wrapper">
          <div className="modal_content">
            <h4 className="modal_titles">
              You are about to Subscribe KSH : {amount} plan
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
              <p className="payment_amount">
                Pay ksh: {amount ? amount : 0} to Wispman wifi
              </p>

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
