import "./right.css";
import React from "react";

function RightComponent({
  setCardName,
  setCardNumber,
  setMonthNumber,
  setYearNumber,
  setCvcNumber,
  handleConfirm,
}) {
  const handleInputChange = (event) => {
    setCardName(event.target.value);
  };

  const handleNumberChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, "").slice(0, 16);
    const formatValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatValue);
  };

  const handleCardMonth = (event) => {
    setMonthNumber(event.target.value.slice(0, 2));
  };

  const handleYearNumber = (event) => {
    setYearNumber(event.target.value.slice(0, 2));
  };

  const handleCvcNumber = (event) => {
    setCvcNumber(event.target.value.slice(0, 3));
  };

  return (
    <div className="main-right">
      <div className="info-container">
        <h2 className="card-name-right">Cardholder Name</h2>
        <input
          className="name-input-right"
          placeholder="e.g. Jane Appleseed"
          onChange={handleInputChange}
        />

        <h2 className="card-number-right">Card Number</h2>
        <input
          className="card-number-input-right"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={handleNumberChange}
          maxLength={19}
        />

        <div className="date-cvc-right">
          <div>
            <h2 className="exp-right">Exp. Date</h2>
            <input
              className="month-input-right"
              placeholder="MM"
              onChange={handleCardMonth}
              maxLength={2}
            />
          </div>

          <div>
            <h2 className="mmyy-right">(MM/YY)</h2>
            <input
              className="year-input-right"
              placeholder="YY"
              onChange={handleYearNumber}
              maxLength={2}
            />
          </div>

          <div>
            <h2 className="cvc-right">CVC</h2>
            <input
              className="cvc-input-right"
              placeholder="e.g. 123"
              onChange={handleCvcNumber}
              maxLength={3}
            />
          </div>
        </div>

        <button className="btn" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default RightComponent;
