import { createReducer } from '@reduxjs/toolkit';
import { addCard, dellCard, dellCardCascade, changeCardHead, changeCardDescription } from './actions';
import { initialState } from './initialState';

const Cards = createReducer(initialState.cards, (builder) => {
    builder
        .addCase(addCard, (state, action) => {
            state.push(action.payload);
        })
        .addCase(dellCard, (state, action) => {
            return [...state.filter((cards) => cards.cardId !== action.payload.cardId)];
        })
        .addCase(dellCardCascade, (state, action) => {
            return [...state.filter((cards) => cards.boardId !== action.payload.boardId)];
        })
        .addCase(changeCardHead, (state, action) => {
            const change = state.find((cards) => cards.cardId === action.payload.cardId);
            if (change) {
                change.header = action.payload.header;
            }
        })
        .addCase(changeCardDescription, (state, action) => {
            const change = state.find((cards) => cards.cardId === action.payload.cardId);
            if (change) {
                change.description = action.payload.description;
            }
        });
});

export default Cards;
