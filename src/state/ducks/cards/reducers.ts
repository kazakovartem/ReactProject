import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';

const Cards = createReducer(initialState.cards, (builder) => {
    builder
        .addCase(actions.default.addCard, (state, action) => {
            state.push(action.payload);
        })
        .addCase(actions.default.dellCard, (state, action) => {
            return [...state.filter((cards) => cards.cardId !== action.payload.cardId)];
        })
        .addCase(actions.default.dellCardCascade, (state, action) => {
            return [...state.filter((cards) => cards.boardId !== action.payload.boardId)];
        })
        .addCase(actions.default.changeCardHead, (state, action) => {
            const change = state.find((cards) => cards.cardId === action.payload.cardId);
            if (change) {
                change.header = action.payload.header;
            }
        })
        .addCase(actions.default.changeCardDescription, (state, action) => {
            const change = state.find((cards) => cards.cardId === action.payload.cardId);
            if (change) {
                change.description = action.payload.description;
            }
        });
});

export default Cards;
