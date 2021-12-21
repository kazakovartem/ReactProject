import { createReducer } from '@reduxjs/toolkit';
import { addBoard } from './actionCreator';

export const initialState = {
    userName: 'Use Redux',
};

export const Comments = createReducer(initialState, (builder) => {
    builder.addCase(addBoard, (state, action) => {
        state.userName = action.payload;
    });
});
