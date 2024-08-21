import InputField from "./InputField";
import TipPercentage from "./TipPercentage";
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
                  <li role="option"> <TipPercentage percentage={"5%"}/> </li>
                  <li role="option"> <TipPercentage percentage={"10%"}/> </li>
                  <li role="option"> <TipPercentage percentage={"15%"}/> </li>
                  <li role="option"> <TipPercentage percentage={"25%"}/> </li>
                  <li role="option"> <TipPercentage percentage={"50%"}/> </li>

                  <li data-custom-tip role="option">
                    <input type="number" name="tip-percentage" placeholder="Custom" />
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
