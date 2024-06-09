import { useState } from "react";
import { FaEthereum } from "react-icons/fa";

const PaymentBtn = () => {
  const [ethValue, setEthValue] = useState("0.000000");

  const exchangeCurrency = (e) => {
    const dollarValue = e.target.value;
    const ethereumValue = dollarValue * 0.00027; // Conversion rate
    setEthValue(ethereumValue.toFixed(6)); // Setting the Ethereum value with 6 decimal precision
  };

  return (
    <div>
      <div className="lightBlueStyling">
        <span>Ethereum Payment</span>
        <div className="flex-between mt-1">
          <div className="flex-center gap-1">
            <FaEthereum className="text-primary text-md" />
            <input
              className="w-full inline-block bg-lightBlue focus:outline-none"
              type="number"
              min='0'
              placeholder="0"
              onChange={exchangeCurrency}
            />
          </div>
          <select className="focus:outline-none">
            <option>ET</option>
            <option>BTC (Coming Soon)</option>
            <option>LT Coming soon</option>
          </select>
        </div>
      </div>
      <div className="lightBlueStyling py-3 mt-5"><p>{ethValue} ETH</p></div>
    </div>
  );
};

export default PaymentBtn;
