

export default function InputField({labelText, inputType}) {
  return (
    <div>
        <label className="clr-label" htmlFor={labelText.toLowerCase()}> {labelText} </label>

        <div className="input-container fs-large" data-input-icon={inputType}>
            <input id={labelText.toLowerCase()} type="number"/>
        </div>
    </div>
  )
}
