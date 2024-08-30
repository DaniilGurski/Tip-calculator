import { useEffect, useReducer, useState } from "react";
import { CALC_ACTIONS } from "../utils/calculatorActions";
import calculatorReducer, { CALC_INITIAL_STATE } from "../utils/reducers/calculatorReducer";
import { calculatorContext } from "../utils/calculatorContext";

import InputField from "./InputField";
import TipPercentage from "./TipPercentage";
import TipResults from "./TipResults";
import TipPercentageSection from "./TipPercentageSection";



export default function TipCalculator() {
  const [form, dispatch] = useReducer(calculatorReducer, CALC_INITIAL_STATE)

  /* form validation (not allowing empty strings or zeros) */
  useEffect(() => {
    const invalidInputs = ["", "0"]
    const isFormValid = (!invalidInputs.includes(form.bill) && !invalidInputs.includes(form.people));
    dispatch({type: CALC_ACTIONS.SET_FORM_VALID, payload: isFormValid})
  }, [form.bill, form.people])

  useEffect(() => console.log(form), [form])
  
  return (
    <main className="tip-calculator bg-white">
      <calculatorContext.Provider value={{form, dispatch}}> 
        <form className="grid" onSubmit={(e) => e.preventDefault()}>
          <div className="tip-calculator__input-part">
            <InputField 
            labelText={"Bill"} 
            inputIcon={"dollar"}
            value={form.bill}
            action={CALC_ACTIONS.SET_BILL_VALUE}
            />

            <TipPercentageSection /> 

            <InputField 
            labelText={"People"} 
            inputIcon={"person"} 
            value={form.people}
            action={CALC_ACTIONS.SET_PEOPLE_COUNT}
            />

          </div>
          <TipResults />
        </form> 
      </calculatorContext.Provider>
    </main>
  )
}
