import React from "react";
import "./left.css";
import "./ThankYou.css";

function ThankYouPage({
  cardName,
  cardNumber,
  monthNumber,
  yearNumber,
  cvcNumber,
}) {
  return (
    <div className="main-thankYou">
      <div className="main-left">
        <div className="card-conteiner">
          <div className="front-card">
            <img
              className="logo"
              src="./images/card-logo.svg"
              alt="Card Logo"
            />
            <div className="card-number">{cardNumber}</div>
            <div className="name-date">
              <div className="card-name">{cardName}</div>
              <div className="year-month">
                <div className="month">{monthNumber}</div>
                <div className="line">/</div>
                <div className="year">{yearNumber}</div>
              </div>
            </div>
          </div>

          <div className="back-card">
            <div className="cvc">{cvcNumber}</div>
          </div>
        </div>
      </div>

      <div className="thankYou-right">
        <img className="complete-img" src="./images/icon-complete.svg" />
        <h1 className="thanks">THANK YOU!</h1>
        <p className="added">We’ve added your card details</p>

        <button className="btn2">Continue</button>
      </div>
    </div>
  );
}

export default ThankYouPage;
