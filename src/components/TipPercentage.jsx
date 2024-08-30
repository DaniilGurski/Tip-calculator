import { useContext, useEffect, useRef, useState } from "react";
import { CALC_ACTIONS } from "../utils/calculatorActions";
import { calculatorContext } from "../utils/calculatorContext";

export default function TipPercentage({ percentage }) {
  const {form, dispatch} = useContext(calculatorContext);
  const {isCustomTip, currentPercentage} = form;

  return (
    <>
        <label htmlFor={`tip-${percentage}`}> {`${percentage}%`} </label>
        <input
        type="radio" 
        name="tip-percentage" 
        checked={!isCustomTip && percentage === currentPercentage}
        id={`tip-${percentage}`}
        onChange={() => dispatch({type: CALC_ACTIONS.SET_TIP_PERCENTAGE, payload: percentage})} 
        />
    </>
  )
}
