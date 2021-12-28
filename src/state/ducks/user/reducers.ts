import { createReducer } from '@reduxjs/toolkit';
import { addUserName } from './actions';
import { initialState } from './initialState';

const nameUser = createReducer(initialState.user, (builder) => {
    builder.addCase(addUserName, (state, action) => {
        state.userName = action.payload;
    });
});

export default nameUser;
