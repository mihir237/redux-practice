import { createStore } from "redux";

const reducerFunc = (state = { counter: 0 }, action) => {

    if (action.type === "INC") {
        return { counter: state.counter + 1 }
    }
    if (action.type === "DEC") {
        return { counter: state.counter - 1 }
    }
    if(action.type === "ADD"){
        return {counter: state.counter + action.payload}
    }

    return state;
}

const store = createStore(reducerFunc)

export default store;