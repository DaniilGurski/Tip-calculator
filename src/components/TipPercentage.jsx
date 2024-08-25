import { useEffect, useRef, useState } from "react";
import { CALC_ACTIONS } from "../utils/calculatorActions";

export default function TipPercentage({ percentage, dispatch, isCustomSet, currentPercentage }) {
  return (
    <>
        <label htmlFor={`tip-${percentage}`}> {`${percentage}%`} </label>
        <input
        type="radio" 
        name="tip-percentage" 
        checked={!isCustomSet && percentage === currentPercentage}
        id={`tip-${percentage}`}
        onChange={() => dispatch({type: CALC_ACTIONS.SET_TIP_PERCENTAGE, payload: percentage})} 
        />
    </>
  )
}
