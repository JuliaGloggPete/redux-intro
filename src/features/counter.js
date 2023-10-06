import { createAction, createReducer } from "@reduxjs/toolkit";


const increase = createAction('increase counter');
const decrease = createAction('decrease counter');

const actions = {increase, decrease};

const initialState = 0;

const reducer = createReducer(initialState, builder => {
builder
.addCase(increase, (state, actions)=> state + 1)
.addCase(decrease, (state, actions)=> state - 1)

} );
export{reducer, actions };