import { useFormikContext } from "formik";
import { SubscriptionOptions } from "../../data";

const Subscription = ({ setPaymentValue }) => {
  return (
    <>
      {SubscriptionOptions.map(
        ({ name, amount, timeLimit, speedLimit }, index) => (
          <div
            className="subscription_wrapper"
            key={index}
            onClick={() => {
              setPaymentValue(amount);
            }}
          >
            <h4 className="subscription_amount">{name}</h4>
            <p className="subscription_time">{timeLimit}</p>
            <p className="subscription_limit">{speedLimit}</p>
          </div>
        )
      )}
    </>
  );
};
export default Subscription;
