import { createReducer } from '@reduxjs/toolkit';
import { addBoard, dellBoard, changeHeardBoard } from './actionCreator';
import { initialState } from '../initialState';

export const Boards = createReducer(initialState.boards, (builder) => {
    builder
        .addCase(addBoard, (state, action) => {
            state.push(action.payload);
        })
        .addCase(dellBoard, (state, action) => {
            return [...state.filter((boards) => boards.boardId !== action.payload.boardId)];
        })
        .addCase(changeHeardBoard, (state, action) => {
            const change = state.find((boards) => boards.boardId === action.payload.boardId);
            if (change) {
                change.boardsHeader = action.payload.boardsHeader;
            }
        });
});
