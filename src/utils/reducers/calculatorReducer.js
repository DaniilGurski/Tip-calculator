import { act } from "react"

export const CALC_INITIAL_STATE = {
    bill: "",
    people: "",
    percentage: 0,
    formValid: false
}


export default function calculatorReducer(state, action) {
    switch (action.type) {
        case "set bill value":
            return {
                ...state,
                bill: action.payload
            }

        case "set people count":
            return {
                ...state,
                people: action.payload
            }

        case "set tip percentage":
            return {
                ...state,
                percentage: action.payload
            }

        case "reset states": 
            return {
                bill: "",
                people: "",
                percentage: 0
            }

        case "set form valid":
            return {
                ...state, 
                formValid: action.payload
            }

        default: return state
    }
}