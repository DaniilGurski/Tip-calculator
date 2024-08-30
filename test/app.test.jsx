import { render, screen, fireEvent } from "@testing-library/react"
import App from "/src/App"
import * as helpers from "/src/utils/helpers";

vi.spyOn(helpers, "calculateTip");

describe("App", () => {
    it("displays an error message when the bill or people input is zero", async () => {
        render(<App />)

        const billInput = screen.getByLabelText("Bill")
        const peopleInput = screen.getByLabelText("People")
        const errorMessage = "Can't be zero"

        fireEvent.change(billInput, { target: { value: "0" } })
        fireEvent.change(peopleInput, { target: { value: "0" } })

        expect(screen.getAllByText(errorMessage)).toHaveLength(2)
    })


    it("calls calculateTip when a radio button is clicked", async () => {
        render(<App />)

        const billInput = screen.getByLabelText("Bill");
        const peopleInput = screen.getByLabelText("People");
        const radioButton = screen.getAllByRole("radio")[0];

        fireEvent.change(billInput, { target: { value: "123" } })
        fireEvent.change(peopleInput, { target: { value: "123" } })
        fireEvent.click(radioButton)

        expect(helpers.calculateTip).toHaveBeenCalledWith(true, "123", "123", 5)
    })


    it("displays tip calculations correctly", async () => {
        const { container } = render(<App />)

        const billInput = screen.getByLabelText("Bill");
        const peopleInput = screen.getByLabelText("People");
        const radioButtons = screen.getAllByRole("radio");
        const tipAmount = container.querySelector("#tip-amount")
        const totalTipAmount = container.querySelector("#total-tip-amount");
        const customTipInput = screen.getByPlaceholderText("Custom");


        /* calculated tip values by 5%, 10%, etc. of the bill sum */
        const tipAmounts= ["1.42$", "2.84$", "4.26$", "7.10$", "14.20$"]
        const totalTipAmounts = ["29.82$", "31.24$", "32.66$", "35.50$", "42.60$"]

        fireEvent.change(billInput, { target: { value: "142" } })
        fireEvent.change(peopleInput, { target: { value: "5" } })

        radioButtons.forEach((radioButton, index) => {
            fireEvent.click(radioButton);

            expect(tipAmount.textContent).toBe(tipAmounts[index])
            expect(totalTipAmount.textContent).toBe(totalTipAmounts[index])
        })


        /* check if tip calculations are displayed correctly if custom tip is set */
        fireEvent.change(customTipInput, { target: { value: "60" } })
        expect(tipAmount.textContent).toBe("17.04$")
        expect(totalTipAmount.textContent).toBe("45.44$")
    })


    it("resets calculator after pressing the reset button", async () => {
        const { container } = render(<App />)
        
        const billInput = screen.getByLabelText("Bill");
        const peopleInput = screen.getByLabelText("People");
        const radioButton = screen.getAllByRole("radio")[0];
        const tipAmount = container.querySelector("#tip-amount")
        const totalTipAmount = container.querySelector("#total-tip-amount")
        const resetButton = screen.getByLabelText("reset calculator");

        fireEvent.change(billInput, { target: { value: "123" } })
        fireEvent.change(peopleInput, { target: { value: "123" } })
        fireEvent.click(radioButton)
        fireEvent.click(resetButton)

        expect(billInput.value).toBe("")
        expect(peopleInput.value).toBe("")
        expect(radioButton).not.toBeChecked()
        expect(tipAmount.textContent).toBe("0.00$")
        expect(totalTipAmount.textContent).toBe("0.00$")
    })
})
