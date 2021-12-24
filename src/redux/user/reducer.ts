import { createReducer } from '@reduxjs/toolkit';
import { addUserName } from './actionCreator';
import { initialState } from '../initialState';

export const User = createReducer(initialState.nameUser, (builder) => {
    builder.addCase(addUserName, (state, action) => {
        state.userName = action.payload;
    });
});
