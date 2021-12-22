import { createReducer } from '@reduxjs/toolkit';
import { addCard, dellCard, dellCardCascade } from './actionCreator';
import { initialState } from './initialState';

export const Cards = createReducer(initialState, (builder) => {
    builder
        .addCase(addCard, (state, action) => {
            state.cards.push(action.payload);
        })
        .addCase(dellCard, (state, action) => {
            state.cards.push(action.payload);
        })
        .addCase(dellCardCascade, (state, action) => {
            state.cards = state.cards.filter((cards) => cards.boardId !== action.payload.boardId);
        });
});
