

export default function TipPercentage({ percentage }) {
  return (
    <>
        <label htmlFor={`tip-${percentage}`}> {percentage} </label>
        <input type="radio" name="tip-percentage" id={`tip-${percentage}`} />
    </>
  )
}
