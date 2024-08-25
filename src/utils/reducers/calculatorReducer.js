import { act } from "react"

export const CALC_INITIAL_STATE = {
    bill: "",
    people: "",
    currentPercentage: 0,
    isCustomTip: false,
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

        case "set current tip percentage":
            return {
                ...state,
                currentPercentage: action.payload
            }
        
        case "set is custom tip":
            return {
                ...state,
                isCustomTip: !!action.payload,
            }

        case "reset states": 
            return {
                bill: "",
                people: "",
                currentPercentage: 0
            }

        case "set form valid":
            return {
                ...state, 
                formValid: action.payload
            }

        default: return state
    }
}