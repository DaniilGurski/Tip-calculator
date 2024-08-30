import { useContext } from "react";
import { calculatorContext } from "../utils/calculatorContext";
import { CALC_ACTIONS } from "../utils/calculatorActions";
import TipPercentage from "./TipPercentage";

export default function TipPercentageSection() {
    const { form, dispatch, currentPercentage } = useContext(calculatorContext);
    const percentages = [5, 10, 15, 25, 50];

    return (
        <fieldset>
            <legend className="clr-label"> Select Tip % </legend>

            <ul className="tip-calculator__tip-percentages" role="listbox">
                {
                    percentages.map(percentage => {
                        return <li key={percentage}> <TipPercentage percentage={percentage}/> </li>
                    })
                }
                <li data-custom-tip role="option">
                    <input
                    type="number"
                    name="tip-percentage"
                    placeholder="Custom"
                    aria-label="custom tip"
                    value={currentPercentage}
                    onChange={(e) => {
                        dispatch({ type: CALC_ACTIONS.SET_CUSTOM_TIP, payload: e.target.value })
                    }}
                    />
                </li>
            </ul>
        </fieldset>
    )
}
