import { createReducer, current } from '@reduxjs/toolkit';
import { addBoard } from './actionCreator';
import { initialState } from './initialState';

export const Boards = createReducer(initialState, (builder) => {
    builder.addCase(addBoard, (state, action) => {
        state.boars.push(action.payload);
        console.log('after', current(state));
    });
});
