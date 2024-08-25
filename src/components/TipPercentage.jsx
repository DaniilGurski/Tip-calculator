import { CALC_ACTIONS } from "../utils/calculatorActions";

export default function TipPercentage({ percentage, dispatch}) {
  return (
    <>
        <label htmlFor={`tip-${percentage}`}> {`${percentage}%`} </label>
        <input 
        type="radio" 
        name="tip-percentage" 
        id={`tip-${percentage}`}
        onChange={() => dispatch({type: CALC_ACTIONS.SET_TIP_PERCENTAGE, payload: percentage})} />
    </>
  )
}
