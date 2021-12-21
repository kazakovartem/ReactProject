import { createReducer } from '@reduxjs/toolkit';
import { addCard, dellCard } from './actionCreator';
import { initialState } from './initialState';

export const Cards = createReducer(initialState, (builder) => {
    builder
        .addCase(addCard, (state, action) => {
            state.cards.push(action.payload);
        })
        .addCase(dellCard, (state, action) => {
            state.cards.push(action.payload);
        });
});
