export function calculateTip(formValid, bill, people, percentage) {
    if (!formValid) {
        return {
            amountPerPerson: "0.00", 
            totalAmountPerPerson: "0.00",
        }
    }

    bill = +bill;
    people = +people;
    const tip = bill * (percentage / 100);

    return {
        amountPerPerson: (tip / people).toFixed(2), 
        totalAmountPerPerson: ((bill + tip) / people).toFixed(2)
    }
}

