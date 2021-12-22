import { createReducer, current } from '@reduxjs/toolkit';
import { addBoard, dellBoard, changeHeardBoard } from './actionCreator';
import { initialState } from './initialState';

export const Boards = createReducer(initialState, (builder) => {
    builder
        .addCase(addBoard, (state, action) => {
            state.boars.push(action.payload);
        })
        .addCase(dellBoard, (state, action) => {
            state.boars = state.boars.filter((boars) => boars.boardId !== action.payload.boardId);
        })
        .addCase(changeHeardBoard, (state, action) => {
            const change = state.boars.find((boars) => boars.boardId === action.payload.boardId);
            if (change) {
                change.boardsHeader = action.payload.boardsHeader;
            }
        });
});
/*            console.log(current(change));*/
