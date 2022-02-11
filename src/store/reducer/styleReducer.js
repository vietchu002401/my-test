import * as types from "../typeAction"
let initialState = [
    {
        r: 0,
        g: 0,
        b: 0,
        a: 20,
        right : "0",
        down : "0",
        blur : "5"
    }
]

let stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDSTYLE:
            state.push({
                r: 0,
                g: 0,
                b: 5,
                a: 20,
                right : "0",
                down : "0",
                blur : "5"
            })
            return [...state]
        case types.CHANGESTYLE:
            state[action.index] = action.item
            return [...state]
        case types.REMOVESTYLE:
            state.splice(action.index,1)
            return [...state]
        default:
            return state
    }
}

export default stylesReducer