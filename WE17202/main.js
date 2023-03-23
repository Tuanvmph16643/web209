import { createStore } from "redux";

const intialState = {
    count: 0
}

const action = {
    type: "INCREMENT"
}

const reducer = (State = intialState, action) => {
    if(action.type === "INCREMENT"){
        return{ count: State.count +1}
    }
    return State;
}

const store = createStore(reducer)
console.log('newState', store.getState());
store.dispath(action)
console.log('newState', store.getState());

