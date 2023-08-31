import { createStore } from "redux";

const initialState = [];

const createReducer = (state = initialState, action) => {
    if (action.type === 'addItem') {
        return [...state, action.payload];
    }

    if (action.type === 'deleteItem') {
        const currState = [...state];
        currState.splice(action.payload, 1);
        return currState;
    }

    if (action.type === 'editItem') {
        const curState = [...state];
        curState[action.payload.index] = action.payload.editedValue;
        return curState;
    }

    return state;
}

const store = createStore(createReducer);

export default store;
