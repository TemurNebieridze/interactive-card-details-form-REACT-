import React from "react";
import "./left.css";

function LeftComponent({
  cardName,
  cardNumber,
  monthNumber,
  yearNumber,
  cvcNumber,
}) {
  return (
    <div className="main-left">
      <div className="card-conteiner">
        <div className="front-card">
          <img className="logo" src="./images/card-logo.svg" />
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
  );
}

export default LeftComponent;
