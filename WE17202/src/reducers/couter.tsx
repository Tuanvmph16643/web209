import { ICounter } from "../interface/couter"

const intitialState = {
    count: 0
} as any

const couterReducer = (state= intitialState, action:any)=>{
    switch (action.type){
        case "INCREMENT":
            return {...state, count:state.count + 1}
        case "DECREMENT":
            return {...state, count:state.count - 1}
        case "INCREASE":
            return {...state, count:state.count + action.payload}
        default: 
        return state
    }
}

export default couterReducer