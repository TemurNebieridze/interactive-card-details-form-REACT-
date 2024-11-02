import "./App.css";
import LeftComponent from "./components/left";
import RightComponent from "./components/right";
import ThankYouPage from "./components/ThankYouPage";
import React, { useState } from "react";

function App() {
  const [cardName, setCardName] = useState("JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [monthNumber, setMonthNumber] = useState("09");
  const [yearNumber, setYearNumber] = useState("00");
  const [cvcNumber, setCvcNumber] = useState("000");
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  const handleConfirm = () => {
    setShowThankYouPage(true);
  };

  return (
    <div className="App">
      {showThankYouPage ? (
        <ThankYouPage
          cardName={cardName}
          cardNumber={cardNumber}
          monthNumber={monthNumber}
          yearNumber={yearNumber}
          cvcNumber={cvcNumber}
        />
      ) : (
        <div className="grid">
          <LeftComponent
            cardName={cardName}
            cardNumber={cardNumber}
            monthNumber={monthNumber}
            yearNumber={yearNumber}
            cvcNumber={cvcNumber}
          />
          <RightComponent
            setCardName={setCardName}
            setCardNumber={setCardNumber}
            setMonthNumber={setMonthNumber}
            setYearNumber={setYearNumber}
            setCvcNumber={setCvcNumber}
            handleConfirm={handleConfirm}
          />
        </div>
      )}
    </div>
  );
}

export default App;
