import { useFormikContext } from "formik";
import { SubscriptionOptions } from "../../data";

const Subscription = ({ setAmount }) => {
  return (
    <>
      {SubscriptionOptions.map(
        ({ name, amount, timeLimit, speedLimit }, index) => (
          <div
            className="subscription_wrapper"
            key={index}
            onClick={() => {
              setAmount(amount);
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
