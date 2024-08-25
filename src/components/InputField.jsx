import { useContext } from "react"
import { calculatorContext } from "../utils/calculatorContext"


export default function InputField({ labelText, inputIcon, value, action}) {
  const { dispatch } = useContext(calculatorContext);

  return (
    <div>
      <label className="clr-label" htmlFor={labelText.toLowerCase()}> {labelText} </label>

      <div className={`input-container ${value === "0" ? "input-container--error" : ""} fs-large`} data-input-icon={inputIcon}>
        <input
          id={labelText.toLowerCase()}
          type="number"
          min="0"
          value={value}
          onChange={(e) => dispatch({type: action, payload: e.target.value})}
        />
      </div>
    </div>
  )
}
