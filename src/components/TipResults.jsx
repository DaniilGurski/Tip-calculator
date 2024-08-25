import { useContext, useEffect, useState } from "react"
import { CALC_ACTIONS } from "../utils/calculatorActions";
import { calculatorContext } from "../utils/calculatorContext";


export default function TipResults() {
  const { form, dispatch } = useContext(calculatorContext); 
  let { bill, people, currentPercentage, formValid} = form;

  let tipAmount = "0.00$";
  let totalPerPerson = "0.00$";

  if (formValid) {
    bill = parseInt(bill);
    people = parseInt(people);
    const tip = bill * (currentPercentage / 100);
    
    tipAmount = `${(tip / people).toFixed(2)}$`;
    totalPerPerson = `${((bill + tip) / people).toFixed(2)}$`;
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
      <button className="tip-results__reset bg-accent clr-dark-cyan fs-large" onClick={() => {
        dispatch({type: CALC_ACTIONS.RESET_STATES})
      }}> RESET </button>
    </div>
  )
}