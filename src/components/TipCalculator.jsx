import { useEffect, useReducer, useState } from "react";
import { CALC_ACTIONS } from "../utils/calculatorActions";
import calculatorReducer, { CALC_INITIAL_STATE } from "../utils/reducers/calculatorReducer";

import InputField from "./InputField";
import TipPercentage from "./TipPercentage";
import TipResults from "./TipResults";


export default function TipCalculator() {
  /* refactor to reducer */ 
  const [form, dispatch] = useReducer(calculatorReducer, CALC_INITIAL_STATE)

  useEffect(() => console.log(form), [form])
  useEffect(() => {
    dispatch({type: CALC_ACTIONS.SET_FORM_VALID, payload: !!(form.bill && form.people)})
  }, [form.bill, form.people])

  
  return (
    <div className="tip-calculator bg-white">
      <form className="grid">
        <div className="tip-calculator__input-part">
          <InputField 
          labelText={"Bill"} 
          inputIcon={"dollar"} 
          value={form.bill}
          action={CALC_ACTIONS.SET_BILL_VALUE}
          dispatch={dispatch} />

          <fieldset>
            <legend className="clr-label"> Select Tip % </legend>

            <ul className="tip-calculator__tip-percentages" role="listbox">
              <li role="option"> <TipPercentage percentage={5}  dispatch={dispatch} isCustomSet={form.isCustomTip} currentPercentage={form.currentPercentage}/> </li>
              <li role="option"> <TipPercentage percentage={10} dispatch={dispatch} isCustomSet={form.isCustomTip} currentPercentage={form.currentPercentage}/> </li>
              <li role="option"> <TipPercentage percentage={15} dispatch={dispatch} isCustomSet={form.isCustomTip} currentPercentage={form.currentPercentage}/> </li>
              <li role="option"> <TipPercentage percentage={25} dispatch={dispatch} isCustomSet={form.isCustomTip} currentPercentage={form.currentPercentage}/> </li>
              <li role="option"> <TipPercentage percentage={50} dispatch={dispatch} isCustomSet={form.isCustomTip} currentPercentage={form.currentPercentage}/> </li>
              <li data-custom-tip role="option">
                <input 
                type="number" 
                name="tip-percentage" 
                placeholder="Custom"
                onChange={(e) => dispatch({type: CALC_ACTIONS.SET_IS_CUSTOM_TIP, payload: e.target.value})} />
              </li>
            </ul>
          </fieldset>

          <InputField 
          labelText={"People"} 
          inputIcon={"person"} 
          value={form.people}
          action={CALC_ACTIONS.SET_PEOPLE_COUNT}
          dispatch={dispatch} />

        </div>
        <TipResults 
        billValue={form.bill} 
        peopleCount={form.people} 
        tipPercentage={15}
        isValidInput={form.formValid} />
      </form> 
    </div>
  )
}
