import { useContext } from "react"
import { CALC_ACTIONS } from "../utils/calculatorActions";
import { calculatorContext } from "../utils/calculatorContext";
import { calculateTip } from "../utils/helpers";

export default function TipResults() {
  const { form, dispatch } = useContext(calculatorContext); 
  let { bill, people, currentPercentage, formValid} = form;

  const {amountPerPerson, totalAmountPerPerson} = calculateTip(formValid, bill, people, currentPercentage);

  return (
    <div className="tip-results bg-dark-cyan clr-white">
      <ul className="tip-results__sums grid" role="list">
        <li>
          <h2> Tip Amount </h2>
          <span className="clr-accent fs-xl" id="tip-amount">{`${amountPerPerson}$`}</span>
        </li>
        <li>
          <h2> Total </h2>
          <span className="clr-accent fs-xl" id="total-tip-amount">{`${totalAmountPerPerson}$`}</span>
        </li>

      </ul>
      <button 
      className="tip-results__reset bg-accent clr-dark-cyan fs-large" 
      onClick={() => {
        dispatch({type: CALC_ACTIONS.RESET_STATES})
      }}
      type="submit"
      aria-label="reset calculator"> RESET </button>
    </div>
  )
}