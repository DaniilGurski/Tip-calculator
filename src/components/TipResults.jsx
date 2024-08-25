import { useEffect, useState } from "react"


export default function TipResults({ billValue, peopleCount, tipPercentage, isValidInput }) {
  let tipAmount = "0.00$";
  let totalPerPerson = "0.00$";

  if (isValidInput) {
    const tip = billValue * (tipPercentage / 100);
    tipAmount = `${(tip / peopleCount).toFixed(2)}$`;
    totalPerPerson = `${((parseInt(billValue) + tip) / peopleCount).toFixed(2)}$`;
  }

  return (
    <div className="tip-results bg-dark-cyan clr-white">
      <ul className="tip-results__sums grid" role="list">
        <li>
          <h2> Tip Amount </h2>
          <span className="clr-accent fs-xl"> {tipAmount} </span>
        </li>
        <li>
          <h2> Total </h2>
          <span className="clr-accent fs-xl"> {totalPerPerson} </span>
        </li>

      </ul>
      <button className="tip-results__reset bg-accent clr-dark-cyan fs-large"> RESET </button>
    </div>
  )
}

/* 
Tip: dollar * (percentage / 100)
Tip amount per person: Tip / peopleCount
Total per person: (dollar + Tip) / peopleCount
*/