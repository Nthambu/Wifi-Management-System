import { useEffect, useState } from "react";
import Subscription from "../../components/Subscription";
import "./home.css";

function Home() {
  const [paymentValues, setPaymentValues] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(paymentValues);
    setModal(true);
  }, [paymentValues]);

  return (
    <main className="home grid">
      <section className=" card">
        <h3 className="card_title">How to Purchase:</h3>
        <ol className="desc_list">
          <li>Tap on your preferred package.</li>
          <li>Enter your phone number</li>
          <li>Click "PAY NOW"</li>
          <li>
            Enter your M-pesa pin, wait for 30 sec for M-pesa authentication
          </li>
        </ol>
      </section>

      <section className="payment_plans">
        <div className="packages_wrapper grid">
          <Subscription setPaymentValues={setPaymentValues} />
        </div>
        {paymentValues && modal && (
          <div className="modal_wrapper">
            <div className="modal_content">
              <h4 className="modal_title">
                You are about to Subscribe to : {paymentValues} plan
              </h4>
              <h6 className="modal_subtitle">press okay to continue</h6>
              <button
                type="button"
                className="button_modal"
                onClick={() => setModal(false)}
              >
                okay
              </button>
            </div>
          </div>
        )}
        <div className="payment_wrapper">
          <form action="">
            <input
              type="text"
              value={paymentValues}
              className="form-control"
              disabled
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
            />
            <button
              type="button"
              className="button"
              onClick={() => setPaymentValues(null)}
            >
              Pay Now
            </button>
          </form>
        </div>
      </section>

      <section className="account_reconnect card">
        <h3 className="card_title">Reconnect account</h3>
        <h4 className="card_desc">
          (Enter mpesa code below from the payment you made eg:QAH9QWZRR)
        </h4>
        <form action="">
          <input
            type="text"
            className="form-control"
            placeholder="Enter M-pesa Code you paid with"
          />
          <button type="submit" className="button">
            Reconnect
          </button>
        </form>
      </section>

      <section className="voucher_recharge card">
        <h3 className="card_title">Voucher Recharge</h3>
        <h4 className="card_desc">
          (Call admin for voucher recharge incase payment is not successful)
        </h4>
        <form action="">
          <input
            type="text"
            className="form-control"
            placeholder="Enter voucher code"
          />
          <button type="submit" className="button">
            Reconnect
          </button>
        </form>
      </section>

      <section className="login card">
        <h3 className="card_title">WISPMAN WIFI LOGIN</h3>
        <h4 className="card_desc">
          (Enter your username plus password to login)
        </h4>
        <form action="">
          <input type="text" className="form-control" placeholder="Username" />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
export default Home;
