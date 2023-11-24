import "./home.css";

function Home() {
  return (
    <main className="home grid">
      <section className=" card">
        <h3 className="card_title">How to Purchase:</h3>
        <ol className="desc_list">
          <li>Tap on your preffered package.</li>
          <li>Enter your phone number</li>
          <li>Click "PAY NOW"</li>
          <li>
            Enter your m-pesa pin, wait for 30 sec for mpesa authentication
          </li>
        </ol>
      </section>

      {/* <section className="packages_wrapper">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section> */}

      <section className="payment_wrapper">
        <form action="">
          <input
            type="text"
            placeholder="Enter Phone"
            className="form-control"
          />
          <button type="button" className="button">
            Pay Now
          </button>
        </form>
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
            placeholder="Enter Mpesa Code you paid with"
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
