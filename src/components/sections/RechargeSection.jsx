import { Form, Formik } from "formik";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";
import * as Yup from "yup";

const RechargeSection = () => {
  const voucherSchema = Yup.object().shape({
    voucherCode: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <h3 className="card_title">Voucher Recharge</h3>
      <h4 className="card_desc">
        (Call admin for voucher recharge incase payment is not successful)
      </h4>
      <Formik
        initialValues={{
          voucherCode: "",
        }}
        validationSchema={voucherSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <CustomInput
              type="text"
              placeholder="Enter voucher code"
              name="voucherCode"
            />
            <CustomButton text="Reconnect" type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};
export default RechargeSection;
