

export default function InputField({labelText, inputType}) {
  return (
    <>
        <label className="clr-label" htmlFor={labelText.toLowerCase()}> {labelText} </label>

        <div className="input-container fs-large" data-input-icon={inputType}>
            <input id={labelText.toLowerCase()} type="text" />
        </div>
    </>
  )
}
