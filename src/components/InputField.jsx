import { useContext } from "react"
import { calculatorContext } from "../utils/calculatorContext"


export default function InputField({ labelText, inputIcon, value, action}) {
  const { dispatch } = useContext(calculatorContext);
  const isInputValid = (value !== "0")
  labelText.toLowerCase()

  return (
    <div>
      <label className="clr-label" htmlFor={labelText}> {labelText} </label>

      <div className={`input-container ${!isInputValid ? "input-container--error" : ""} fs-large`} data-input-icon={inputIcon}>
        <input
          id={labelText}
          type="number"
          min="0"
          aria-describedby={`${labelText}-error`}
          value={value}
          onChange={(e) => dispatch({type: action, payload: e.target.value})}
        />

        <div className="input-container__error clr-error" aria-live="assertive" id={`${labelText}-error`}>
          {!isInputValid && <span className="fs-base"> Can't be zero </span>}
        </div>
      </div>
    </div>
  )
}
