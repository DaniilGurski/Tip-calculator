

export default function TipResults() {
  return (
    <div className="tip-results bg-dark-cyan clr-white">
      <ul className="tip-results__sums" role="list">
        <li>
          <h2> Tip Amount </h2>
          <span className="clr-accent fs-xl"> 0.00$ </span>
        </li>
        <li>
          <h2> Total </h2>
          <span className="clr-accent fs-xl"> 0.00$ </span>
        </li>

      </ul>
      <button className="tip-results__reset bg-accent clr-dark-cyan fs-large"> RESET </button>
    </div>
  )
}
