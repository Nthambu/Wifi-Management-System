import { useEffect, useState } from "react";
import Subscription from "../../components/Subscription";
import "./home.css";
import PaymentSection from "../../components/sections/PaymentSection";
import ReconnectSection from "../../components/sections/ReconnectSection";
import RechargeSection from "../../components/sections/RechargeSection";
import LoginSection from "../../components/sections/LoginSection";

function Home() {
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
        <PaymentSection />
      </section>

      <section className="account_reconnect card">
        <ReconnectSection />
      </section>

      <section className="voucher_recharge card">
        <RechargeSection />
      </section>

      <section className="login card">
        <LoginSection />
      </section>
    </main>
  );
}
export default Home;
