import InputField from "./InputField";
import TipResults from "./TipResults";


export default function TipCalculator() {
  return (
    <div className="tip-calculator bg-white">
        <form>
            <div className="tip-calculator__input-part"> 
              <InputField labelText={"Bill"} inputType={"dollar"}/>

              <fieldset>
                <legend className="clr-label"> Select Tip % </legend>

                <ul className="tip-calculator__tip-percentages" role="listbox"> 
                  <li role="option">
                    <label htmlFor="tip-1"> 5% </label>
                    <input type="radio" name="tip-percentage" id="tip-1" />
                  </li>

                  <li role="option">
                    <label htmlFor="tip-2"> 10% </label>
                    <input type="radio" name="tip-percentage" id="tip-2" />
                  </li>

                  <li role="option">
                    <label htmlFor="tip-3"> 15% </label>
                    <input type="radio" name="tip-percentage" id="tip-3" />
                  </li>

                  <li role="option">
                    <label htmlFor="tip-4"> 20% </label>
                    <input type="radio" name="tip-percentage" id="tip-4" />
                  </li>

                  <li role="option">
                    <label htmlFor="tip-5"> 50% </label>
                    <input type="radio" name="tip-percentage" id="tip-5" />
                  </li>
                </ul>
              </fieldset>

              <InputField labelText={"Number of People"} inputType={"person"}/>
            </div>

            <TipResults />
        </form>
    </div>
  )
}
