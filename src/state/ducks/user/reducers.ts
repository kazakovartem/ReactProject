import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';

const nameUser = createReducer(initialState.user, (builder) => {
    builder.addCase(actions.default.addUserName, (state, action) => {
        state.userName = action.payload;
    });
});

export default nameUser;
